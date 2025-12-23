// ... (Code before addDepartment remains the same)

function addDepartment(departmentName) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(DEPARTMENTS_SHEET);
  const newId = Utilities.getUuid();
  sheet.appendRow([newId, departmentName]);
  return { DepartmentID: newId, DepartmentName: departmentName };
}

// ... (getDepartments, updateDepartment, deleteDepartment remain the same)

function addLeaveType(leaveTypeName, description) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(LEAVE_TYPES_SHEET);
  const newId = Utilities.getUuid();
  sheet.appendRow([newId, leaveTypeName, description]);
  return { LeaveTypeID: newId, LeaveTypeName: leaveTypeName, Description: description };
}

// ... (getLeaveTypes, updateLeaveType, deleteLeaveType remain the same)

function addEmployee(employee) {
  const hashedPassword = hashPassword(employee.password);
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(EMPLOYEES_SHEET);
  const newId = Utilities.getUuid();
  sheet.appendRow([newId, employee.firstName, employee.lastName, employee.email, hashedPassword, employee.departmentId, employee.role, employee.status]);
  return { ...employee, EmployeeID: newId };
}

// ... (getEmployees, updateEmployee, deleteEmployee, getLeaveApplications, updateLeaveApplicationStatus, getEmployeeContent, getEmployeeProfile, updateEmployeeProfile, updateEmployeePassword remain the same)

function submitLeaveApplication(user, application) {
  if (!user) throw new Error('Not logged in.');

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(LEAVE_APPLICATIONS_SHEET);
  const newId = Utilities.getUuid();

  sheet.appendRow([
    newId,
    user.EmployeeID,
    application.leaveTypeId,
    new Date(application.startDate),
    new Date(application.endDate),
    application.reason,
    'Pending',
    new Date()
  ]);

  return { success: true };
}

// ... (Rest of Code.gs remains the same)
