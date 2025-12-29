# Google Sheet Setup Instructions

To use the HR Leave Tracker Web App, you need to set up your Google Sheet with the correct sheets and columns.

## 1. Create the Required Sheets

In your Google Sheet, create three sheets with the following names:

1.  `Users`
2.  `Leave Requests`
3.  `Leave Credits`

## 2. Set Up the Columns

### Users Sheet

The `Users` sheet is used for authentication and role-based access. Add the following columns:

| Email | Password | Role |
| :--- | :--- | :--- |
| (user's email) | (user's password) | (e.g., "Employee", "HR") |

**CRITICAL SECURITY WARNING:** This application stores passwords in **plaintext** in your Google Sheet. This is a major security vulnerability. Anyone with access to the sheet will be able to see all user passwords. This method is **not recommended for a production environment**. Please ensure you understand and accept this risk before using the application.

### Leave Requests Sheet

The `Leave Requests` sheet is used to store all leave requests. Add the following columns:

| Employee Email | Start Date | End Date | Leave Type | Status | Timestamp |
| :--- | :--- | :--- | :--- | :--- | :--- |
| (employee's email) | (start date) | (end date) | (e.g., "Sick", "Vacation") | (e.g., "Pending", "Approved") | (timestamp) |

### Leave Credits Sheet

The `Leave Credits` sheet is used to store the remaining leave credits for each employee. Add the following columns:

| Employee Email | Sick Leave | Vacation Leave | Personal Leave |
| :--- | :--- | :--- | :--- |
| (employee's email) | (number of credits) | (number of credits) | (number of credits) |

## 3. Add Your Company Logo

In the `index.html` file, replace the placeholder image URL with a direct link to your company's logo.

```html
<img src="YOUR_LOGO_URL" alt="Company Logo" style="width: 100px; height: 100px;">
```

## 4. Deploy the Web App

1.  Open your Google Sheet.
2.  Go to `Extensions` > `Apps Script`.
3.  Create the following files in the Apps Script editor and copy the code from the files in this repository into them:
    *   `Code.gs`
    *   `index.html`
    *   `styles.html`
    *   `scripts.html`
4.  Click `Deploy` > `New deployment`.
5.  Select `Web app` as the deployment type.
6.  In the `Who has access` dropdown, select `Anyone with Google account`.
7.  Click `Deploy`.
8.  Copy the web app URL and open it in your browser.
