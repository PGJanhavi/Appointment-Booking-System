// script.js

// Show current date and time
function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock");
    clockElement.textContent = now.toLocaleString();
}

setInterval(updateClock, 1000);
updateClock();  // Call immediately to avoid 1-second delay

// Handle Appointment Booking
const bookingForm = document.getElementById("booking-form");
const appointmentsList = document.getElementById("appointments-list");

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const reason = document.getElementById("reason").value;

    // Validate that the date/time is not in the past
    const appointmentDate = new Date(`${date}T${time}`);
    const now = new Date();

    if (appointmentDate < now) {
        alert("You cannot select a date/time in the past.");
        return;
    }

    // Create appointment item
    const appointmentItem = document.createElement("li");
    appointmentItem.classList.add("appointment-item");

    appointmentItem.innerHTML = `
        <div>
            <strong>${name}</strong><br>
            ${email}<br>
            ${appointmentDate.toLocaleString()}<br>
            Reason: ${reason}
        </div>
        <button class="cancel-btn">Cancel</button>
    `;

    // Add cancel functionality
    appointmentItem.querySelector(".cancel-btn").addEventListener("click", () => {
        appointmentsList.removeChild(appointmentItem);
    });

    // Add appointment to list
    appointmentsList.appendChild(appointmentItem);

    // Clear the form
    bookingForm.reset();
});
