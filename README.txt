# Sameer Resume Website

## What changed
- Resume is **view-only from the website UI**; the Download Resume button was removed.
- A Resume viewer opens the PDF inside the site.
- Visitor tracking records time, IP address, page, referrer, language, screen size, timezone, device and browser user-agent.
- Visitor details are stored in Google Sheets and an email notification can be sent for each visit.

## Important limitation
A website cannot guarantee that a PDF can never be downloaded or copied. Browser PDF viewers, screenshots, printing, browser tools, or the direct PDF URL may still allow copying. For stronger protection, publish the resume as protected page images or use an authenticated document viewer.

## Enable visitor notifications
1. Create a Google Sheet.
2. Open **Extensions -> Apps Script**.
3. Copy `visitor-tracker.gs` into the Apps Script editor.
4. Replace `YOUR_EMAIL@example.com` with your email.
5. Deploy -> New deployment -> Web app. Set **Execute as: Me** and access to **Anyone**. Authorize it.
6. Copy the Web App URL.
7. Open `script.js` and replace `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with that URL.
8. Upload the website again.

## Add your resume
Place your real PDF in this folder and name it `resume.pdf`.

## Privacy
Because visitor analytics can involve personal data, use a clear privacy notice and only collect information you actually need. IP-based location is approximate and should not be treated as a person's exact identity or address.
