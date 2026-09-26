const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Visitor tracking setup:
// 1. Deploy the Google Apps Script in visitor-tracker.gs as a Web App.
// 2. Paste the Web App URL below.
const TRACKING_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

async function getVisitorDetails() {
  let ip = "Unavailable";
  try {
    const r = await fetch("https://api64.ipify.org?format=json", { cache: "no-store" });
    ip = (await r.json()).ip || ip;
  } catch (_) {}

  const ua = navigator.userAgent;
  const details = {
    time: new Date().toISOString(),
    ip,
    page: location.href,
    referrer: document.referrer || "Direct visit",
    language: navigator.language || "Unknown",
    screen: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
    userAgent: ua,
    device: /Mobi|Android/i.test(ua) ? "Mobile" : "Desktop/Laptop"
  };

  if (TRACKING_URL && !TRACKING_URL.includes("PASTE_YOUR")) {
    try {
      await fetch(TRACKING_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(details)
      });
    } catch (_) {}
  }
}
getVisitorDetails();

const modal = document.getElementById("resumeModal");
const openers = [document.getElementById("viewResumeBtn"), document.getElementById("viewResumeBtn2")];
const closeBtn = document.getElementById("closeResume");
openers.forEach(btn => btn?.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}));
closeBtn?.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});
modal?.addEventListener("click", e => {
  if (e.target === modal) closeBtn.click();
});
