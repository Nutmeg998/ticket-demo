// live clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toTimeString().split(" ")[0];
}

setInterval(updateClock, 1000);
updateClock();


// ticket data to encode in QR
const ticketData = {
  event: "Last Night in Luff",
  name: "Zack Henrick",
  id: "F511345",
  start: "10/06/2026 22:30",
  end: "11/06/2026 04:00"
};

// convert to QR string
const qrText = JSON.stringify(ticketData);

// generate QR code
new QRCode(document.getElementById("qrcode"), {
  text: qrText,
  width: 180,
  height: 180
});
