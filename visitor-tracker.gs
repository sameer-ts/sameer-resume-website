// Google Apps Script visitor tracker
// Create a Google Sheet, then Extensions -> Apps Script. Paste this code.
// Change NOTIFY_EMAIL to the email address where you want visitor notifications.

const NOTIFY_EMAIL = "YOUR_EMAIL@example.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Time", "IP", "Page", "Referrer", "Language", "Screen", "Timezone", "Device", "User Agent"]);
    }

    sheet.appendRow([
      new Date(data.time || new Date()),
      data.ip || "Unavailable",
      data.page || "",
      data.referrer || "",
      data.language || "",
      data.screen || "",
      data.timezone || "",
      data.device || "",
      data.userAgent || ""
    ]);

    const subject = "Resume Website Visitor";
    const body = [
      "Someone viewed your resume website.",
      "",
      "Time: " + (data.time || "Unknown"),
      "IP address: " + (data.ip || "Unavailable"),
      "Device: " + (data.device || "Unknown"),
      "Screen: " + (data.screen || "Unknown"),
      "Language: " + (data.language || "Unknown"),
      "Timezone: " + (data.timezone || "Unknown"),
      "Referrer: " + (data.referrer || "Direct visit"),
      "Page: " + (data.page || ""),
      "User agent: " + (data.userAgent || "")
    ].join("\n");

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
    return ContentService.createTextOutput("OK");
  } catch (err) {
    return ContentService.createTextOutput("ERROR: " + err);
  }
}
