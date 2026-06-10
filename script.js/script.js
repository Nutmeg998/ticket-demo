console.log("script loaded");

// clock
function updateClock() {
  const clock = document.getElementById("clock");

  if (!clock) {
    console.error("Clock element not found");
    return;
  }

  const now = new Date();
  clock.textContent = now.toTimeString().split(" ")[0];
}

setInterval(updateClock, 1000);
updateClock();

// QR
window.addEventListener("DOMContentLoaded", () => {

  const qrContainer = document.getElementById("qrcode");

  if (!qrContainer) {
    console.error("QR container not found");
    return;
  }

  const ticketData = {
    event: "Last Night in Luff",
    name: "Zack Henrick",
    id: "F511345",
    start: "10/06/2026 22:30",
    end: "11/06/2026 04:00"
  };

  const qrText = JSON.stringify(ticketData);

  if (typeof QRCode === "undefined") {
    console.error("QRCode library not loaded");
    return;
  }

  new QRCode(qrContainer, {
    text: qrText,
    width: 180,
    height: 180
  });

  console.log("QR generated");
});
