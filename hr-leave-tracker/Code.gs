var SPREADSHEET = SpreadsheetApp.getActiveSpreadsheet();
var usersSheet = SPREADSHEET.getSheetByName("Users");
var leaveRequestsSheet = SPREADSHEET.getSheetByName("Leave Requests");
var leaveCreditsSheet = SPREADSHEET.getSheetByName("Leave Credits");
var messagesSheet = SPREADSHEET.getSheetByName("Messages");

function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// AUTHENTICATION
function userLogin() {
  var email = Session.getActiveUser().getEmail();
  var users = usersSheet.getDataRange().getValues();
  for (var i = 1; i < users.length; i++) {
    if (users[i][0] === email) {
      return JSON.stringify({ success: true, user: { email: users[i][0], role: users[i][1] } });
    }
  }
  return JSON.stringify({ success: false, message: "User not found. Please contact HR." });
}

// USER MANAGEMENT
function getUsers() {
  return JSON.stringify(usersSheet.getDataRange().getValues());
}

function addUser(user) {
  usersSheet.appendRow([user.email, user.role]);
  return JSON.stringify({ success: true, message: "User added successfully" });
}

// MESSAGES
function getMessages() {
  var email = Session.getActiveUser().getEmail();
  var allMessages = messagesSheet.getDataRange().getValues();
  var userMessages = allMessages.filter(function(message) {
    return message[0] === email;
  });
  return JSON.stringify(userMessages);
}

function sendMessage(message) {
  messagesSheet.appendRow([
    message.to,
    message.from,
    message.body,
    new Date()
  ]);
  return JSON.stringify({ success: true, message: "Message sent successfully" });
}

// LEAVE REQUESTS
function getMyLeaveRequests() {
  var email = Session.getActiveUser().getEmail();
  var allRequests = leaveRequestsSheet.getDataRange().getValues();
  var userRequests = allRequests.filter(function(request) {
    return request[0] === email;
  });
  return JSON.stringify(userRequests);
}

function getAllLeaveRequests() {
  return JSON.stringify(leaveRequestsSheet.getDataRange().getValues());
}

function submitLeaveRequest(request) {
  leaveRequestsSheet.appendRow([
    request.employeeEmail,
    request.startDate,
    request.endDate,
    request.leaveType,
    "Pending",
    new Date()
  ]);
  return JSON.stringify({ success: true, message: "Leave request submitted successfully" });
}

function updateLeaveRequestStatus(row, status) {
  leaveRequestsSheet.getRange(row, 5).setValue(status);
  if (status === "Approved") {
    var request = leaveRequestsSheet.getRange(row, 1, 1, 4).getValues()[0];
    var email = request[0];
    var startDate = new Date(request[1]);
    var endDate = new Date(request[2]);
    var leaveType = request[3];
    var days = calculateBusinessDays(startDate, endDate);
    updateLeaveCredits(email, leaveType, days);
  }
  return JSON.stringify({ success: true, message: "Leave request status updated successfully" });
}

function calculateBusinessDays(startDate, endDate) {
  var count = 0;
  var curDate = new Date(startDate.getTime());
  while (curDate <= endDate) {
    var dayOfWeek = curDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
    }
    curDate.setDate(curDate.getDate() + 1);
  }
  return count;
}

// LEAVE CREDITS
function getLeaveCredits(email) {
  var credits = leaveCreditsSheet.getDataRange().getValues();
  for (var i = 1; i < credits.length; i++) {
    if (credits[i][0] === email) {
      return JSON.stringify({
        sickLeave: credits[i][1],
        vacationLeave: credits[i][2],
        personalLeave: credits[i][3]
      });
    }
  }
  return JSON.stringify({});
}

function updateLeaveCredits(email, leaveType, days) {
  var data = leaveCreditsSheet.getDataRange().getValues();
  var headers = data[0];
  var leaveTypeColumn = headers.indexOf(leaveType);

  if (leaveTypeColumn === -1) {
    return; // Leave type not found
  }

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === email) {
      var currentCredits = data[i][leaveTypeColumn];
      leaveCreditsSheet.getRange(i + 1, leaveTypeColumn + 1).setValue(currentCredits - days);
      break;
    }
  }
}
