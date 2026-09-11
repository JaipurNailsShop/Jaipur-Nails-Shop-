const form = document.getElementById("bookingForm");
const dateInput = document.getElementById("date");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (dateInput) {
  const today = new Date();
  const local = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
  dateInput.min = local.toISOString().split("T")[0];
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value.trim();

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  const prettyDate = new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
    day: "2-digit", month: "long", year: "numeric"
  });

  const text =
`✨ *NEW APPOINTMENT REQUEST* ✨

Hello Nail’ash Academy,

*Name:* ${name}
*Mobile:* ${phone}
*Service:* ${service}
*Preferred Date:* ${prettyDate}
*Preferred Time:* ${time}
${message ? `*Message:* ${message}\n` : ""}
📍 Raja Park, Jaipur

I would like to confirm the appointment.`;

  const whatsappNumber = "919928534799";
  const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
});
