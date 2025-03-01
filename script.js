document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");
    const confirmationCard = document.querySelector(".card");
    const details = document.querySelector(".details");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);
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
            aLaCarte: formData.get("aLaCarte"),
            boardingServices: formData.get("boardingServices"),
        };

        // Populate confirmation card with details
        details.innerHTML = `
            <p><strong>Owner's Name:</strong> ${appointmentDetails.ownerName}</p>
            <p><strong>Phone Number:</strong> ${appointmentDetails.phoneNumber}</p>
            <p><strong>Email:</strong> ${appointmentDetails.emailAddress}</p>
            <p><strong>Pet's Name:</strong> ${appointmentDetails.petName}</p>
            <p><strong>Pet Type:</strong> ${appointmentDetails.petType}</p>
            <p><strong>Royal Grooming:</strong> ${appointmentDetails.royalGrooming || "None"}</p>
            <p><strong>Bath & Blow Dry:</strong> ${appointmentDetails.bathBlowDry || "None"}</p>
            <p><strong>Sanitary Cut:</strong> ${appointmentDetails.sanitaryCut || "None"}</p>
            <p><strong>Face Trim:</strong> ${appointmentDetails.faceTrim || "None"}</p>
            <p><strong>A La Carte:</strong> ${appointmentDetails.aLaCarte || "None"}</p>
            <p><strong>Boarding Services:</strong> ${appointmentDetails.boardingServices || "None"}</p>
        `;

        // Show confirmation card
        confirmationCard.style.display = "block";

        // Optional: Clear form after submission
        form.reset();
    });
});
