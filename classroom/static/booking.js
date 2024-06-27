// booking.js

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const rollNumber = document.getElementById("roll-number").value.trim();
        const resource = document.getElementById("resource").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const duration = document.getElementById("duration").value;
        const details = document.getElementById("details").value;

        // Perform client-side validation (you can add more specific validation here)
        if (!name || !rollNumber || !resource || !date || !time || !duration) {
            alert("Please fill in all required fields.");
            return;
        }

        // Prepare the booking request to be sent to the server (simulated here)
        const bookingRequest = {
            name,
            rollNumber,
            resource,
            date,
            time,
            duration,
            details,
        };

        // Simulate sending the booking request to the server
        console.log("Booking request sent to the server:", bookingRequest);

        // Reset the form
        bookingForm.reset();
    });
});
