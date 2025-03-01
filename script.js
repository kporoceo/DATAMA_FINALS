document.addEventListener("DOMContentLoaded", function () {
    // Reset form fields on page load to prevent auto-fill
    document.getElementById("appointmentForm").reset();

    // Handle form submission
    document.getElementById("appointmentForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(this);
        const appointmentDetails = {
            ownerName: formData.get("ownerName"),
            phoneNumber: formData.get("phoneNumber"),
            emailAddress: formData.get("emailAddress"),
            petName: formData.get("petName"),
            petType: formData.get("petType"),
            royalGrooming: formData.get("royalGrooming"),
            bathBlowDry: formData.get("bathBlowDry"),
            sanitaryCut: formData.get("sanitaryCut"),
            faceTrim: formData.get("faceTrim"),
            boardingServices: formData.get("boardingServices"),
        };

        // Display confirmation card with appointment details
        const confirmationCard = document.getElementById("confirmationCard");
        confirmationCard.innerHTML = `
            <div class="card">
                <h2>Your Appointment Has Been Booked!</h2>
                <p>Thank you, <strong>${appointmentDetails.ownerName}</strong>, for booking an appointment for <strong>${appointmentDetails.petName}</strong> (${appointmentDetails.petType}).</p>
                <p>We will contact you at <strong>${appointmentDetails.phoneNumber}</strong> or <strong>${appointmentDetails.emailAddress}</strong> to confirm the details.</p>
                <h3>Selected Services:</h3>
                <ul>
                    <li>Royal Grooming: ${appointmentDetails.royalGrooming || "None"}</li>
                    <li>Bath & Blow Dry: ${appointmentDetails.bathBlowDry || "None"}</li>
                    <li>Sanitary Cut: ${appointmentDetails.sanitaryCut || "None"}</li>
                    <li>Face Trim: ${appointmentDetails.faceTrim || "None"}</li>
                    <li>Boarding Service: ${appointmentDetails.boardingServices || "None"}</li>
                </ul>
            </div>
        `;
        
        // Hide form and show confirmation
        document.getElementById("appointmentForm").style.display = "none";
        confirmationCard.style.display = "block";
    });
});
