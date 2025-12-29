# Google Sheet Setup Instructions

To use the HR Leave Tracker Web App, you need to set up your Google Sheet with the correct sheets and columns. You can either create the sheets manually or use the provided CSV templates.

## 1. Using the CSV Templates (Recommended)

1.  Open your Google Sheet.
2.  Go to `File` > `Import`.
3.  Click the `Upload` tab and select the `Users.csv` file.
4.  For `Import location`, choose `Replace current sheet`.
5.  Click `Import data`.
6.  Click the `+` button in the bottom left to add a new sheet.
7.  Repeat steps 2-5 for `Leave Requests.csv`, `Leave Credits.csv`, and `Messages.csv`, creating a new sheet for each file.
8.  Make sure the sheet names are exactly `Users`, `Leave Requests`, `Leave Credits`, and `Messages`.

## 2. Manual Setup

If you prefer to set up the sheets manually, follow these instructions.

### Create the Required Sheets

In your Google Sheet, create four sheets with the following names:

1.  `Users`
2.  `Leave Requests`
3.  `Leave Credits`
4.  `Messages`

### Set Up the Columns

#### Users Sheet

| Email | Role |
| :--- | :--- |
| (user's Google account email) | (e.g., "Employee", "HR") |

**Authentication Note:** This application uses Google's secure sign-in system. It authenticates users based on their active Google account email. You must add the email addresses of authorized users to this sheet.

#### Leave Requests Sheet

| Employee Email | Start Date | End Date | Leave Type | Status | Timestamp |
| :--- | :--- | :--- | :--- | :--- | :--- |
| (employee's email) | (start date) | (end date) | (e.g., "Sick", "Vacation") | (e.g., "Pending", "Approved") | (timestamp) |

#### Leave Credits Sheet

| Employee Email | Sick Leave | Vacation Leave | Personal Leave |
| :--- | :--- | :--- | :--- |
| (employee's email) | (number of credits) | (number of credits) | (number of credits) |

#### Messages Sheet

| To | From | Message | Timestamp |
| :--- | :--- | :--- | :--- |
| (recipient's email) | (sender's email) | (message body) | (timestamp) |

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
