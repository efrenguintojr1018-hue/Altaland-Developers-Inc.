var SPREADSHEET_ID = "1aWOsjTLLxh8kDpUOr6N_scDNE5ZvzUmNzSEdUfFX5TA";
var usersSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Users");
var leaveRequestsSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Leave Requests");
var leaveCreditsSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Leave Credits");

function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// AUTHENTICATION
function userLogin(email, password) {
  var users = usersSheet.getDataRange().getValues();
  for (var i = 1; i < users.length; i++) {
    if (users[i][0] === email && users[i][1] === password) {
      return JSON.stringify({ success: true, user: { email: users[i][0], role: users[i][2] } });
    }
  }
  return JSON.stringify({ success: false, message: "Invalid email or password" });
}

// LEAVE REQUESTS
function getLeaveRequests() {
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
    var days = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
    updateLeaveCredits(email, leaveType, days);
  }
  return JSON.stringify({ success: true, message: "Leave request status updated successfully" });
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
  var leaveTypeColumn = headers.indexOf(leaveType + " Leave");

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
