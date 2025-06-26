Job Tracker


**Job Tracker** is a full-stack application with a Chrome Extension and a web dashboard that helps users track job applications effortlessly. It allows users to save job posts directly from their browser and later view, modify, filter, and analyze them through a dashboard.


# What Was Built:

- **Chrome Extension**:
  - Provides a popup form to capture job application data from the current tab.
  - Sends form data to a local backend server.

- **Web Dashboard**:
  - Displays all submitted applications.
  - Shows useful statistics like total applications, average pay, and most frequent company.
  - Supports editing and deleting existing records.
  - Includes light/dark theme toggle and search functionality.

- **Backend Server (Node.js + Express + MongoDB)**:
  - REST API to save, fetch, update, and delete application data.
  - Connected to a local MongoDB instance.


# How to Use:

1. Run the Server Locally:
- # Requirements:
   - Node.js & npm
   - MongoDB installed and running locally
- # Steps:
   1. Clone the repository:
   2. Install dependencies:
   3. Start MongoDB
   4. Start the backend server:

2. Install & Test the Chrome Extension
- # Requirments:
   - Chrome
- # Steps:
   1. Open Chrome and go to `chrome://extensions/`.
   2. Enable **Developer Mode** (top right).
   3. Click **Load Unpacked**.
   4. Select the `extension/` directory containing:
   5. The extension should appear in your toolbar.

3. To Use:
- # Requirments
   - Ensure server is running
- # Steps
   1. Navigate to any job post page.
   2. Click the extension icon.
   3. Fill in or adjust the form.
   4. Click **Save Application**.
   5. Open the dashboard (index.html) in your browser to see the entry.


# Folder Structure

|- Task
|-- backend
│   |-- node_modules
|   |-- package.json
|   |-- package-lock.json
|   |-- server.js
|
|-- chrome-extension
│   |-- icons
|   |-- manifest.json
|   |-- popup.css
|   |-- popup.html
|   |-- popup.js
|
|-- frontend
│   |-- index.html
|   |-- script.js
|   |-- style.css
|
|-- README.md