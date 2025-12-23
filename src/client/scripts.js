let loggedInUser = null;

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const adminDashboard = document.getElementById('admin-dashboard');
  const employeeDashboard = document.getElementById('employee-dashboard');
  const loginPage = document.getElementById('login-page');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      google.script.run.withSuccessHandler(function(user) {
        if (user) {
          loggedInUser = user; // Store the user object
          if (user.Role === 'Admin') {
            loginPage.style.display = 'none';
            adminDashboard.style.display = 'block';
            loadAdminContent('home');
          } else if (user.Role === 'Employee') {
            loginPage.style.display = 'none';
            employeeDashboard.style.display = 'block';
            loadEmployeeContent('profile');
          }
        } else {
          alert('Invalid credentials.');
        }
      }).withFailureHandler(function(err) {
        alert('Login failed: ' + err.message);
      }).login(email, password);
    });
  }

  // Admin Navigation
  document.getElementById('home-link').addEventListener('click', () => loadAdminContent('home'));
  document.getElementById('departments-link').addEventListener('click', () => loadAdminContent('departments'));
  document.getElementById('leave-types-link').addEventListener('click', () => loadAdminContent('leave-types'));
  document.getElementById('employees-link').addEventListener('click', () => loadAdminContent('employees'));
  document.getElementById('leave-applications-link').addEventListener('click', () => loadAdminContent('leave-applications'));
  document.getElementById('logout-link').addEventListener('click', logout);

  // Employee Navigation
  document.getElementById('profile-link').addEventListener('click', () => loadEmployeeContent('profile'));
  document.getElementById('apply-leave-link').addEventListener('click', () => loadEmployeeContent('apply-leave'));
  document.getElementById('leave-history-link').addEventListener('click', () => loadEmployeeContent('leave-history'));
  document.getElementById('employee-logout-link').addEventListener('click', logout);
});

function loadAdminContent(page) {
  const adminContent = document.getElementById('admin-content');
  adminContent.innerHTML = 'Loading...';
  google.script.run.withSuccessHandler(function(html) {
    adminContent.innerHTML = html;
  }).getAdminContent(page);
}

function loadEmployeeContent(page) {
  const employeeContent = document.getElementById('employee-content');
  employeeContent.innerHTML = 'Loading...';
  google.script.run.withSuccessHandler(function(html) {
    employeeContent.innerHTML = html;
  }).getEmployeeContent(page); // We still need to update the server-side to not need a user ID here
}

function logout() {
  loggedInUser = null;
  location.reload();
}
