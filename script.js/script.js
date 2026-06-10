console.log("SCRIPT LOADED");

// clock
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;

  const now = new Date();
  el.textContent = now.toTimeString().split(" ")[0];
}

setInterval(updateClock, 1000);
updateClock();

// QR
window.addEventListener("load", () => {

  console.log("PAGE LOADED");

  const container = document.getElementById("qrcode");

  if (!container) {
    console.error("QR container missing");
    return;
  }

  if (typeof QRCode === "undefined") {
    console.error("QR library NOT loaded");
    return;
  }

  new QRCode(container, {
    text: "Test Ticket F511345",
    width: 180,
    height: 180
  });

  console.log("QR CREATED");
});
