document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');
    const confirmationCard = document.querySelector('.card .details');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get form data
        const ownerName = document.getElementById('ownerName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const emailAddress = document.getElementById('emailAddress').value;
        const petName = document.getElementById('petName').value;
        const petType = document.getElementById('petType').value;
        const royalGrooming = document.getElementById('royalGrooming').value;
        const bathBlowDry = document.getElementById('bathBlowDry').value;
        const sanitaryCut = document.getElementById('sanitaryCut').value;
        const faceTrim = document.getElementById('faceTrim').value;
        const aLaCarte = document.getElementById('aLaCarte').value;
        const boardingServices = document.getElementById('boardingServices').value;

        // Format and display the confirmation details
        confirmationCard.innerHTML = `
            <p><strong>Owner's Name:</strong> ${ownerName}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p><strong>Email:</strong> ${emailAddress}</p>
            <p><strong>Pet's Name:</strong> ${petName}</p>
            <p><strong>Pet Type:</strong> ${petType}</p>
            <p><strong>Royal Grooming:</strong> ${royalGrooming}</p>
            <p><strong>Bath & Blow Dry:</strong> ${bathBlowDry}</p>
            <p><strong>Sanitary Cut:</strong> ${sanitaryCut}</p>
            <p><strong>Face Trim:</strong> ${faceTrim}</p>
            <p><strong>A La Carte:</strong> ${aLaCarte}</p>
            <p><strong>Boarding Services:</strong> ${boardingServices}</p>
        `;

        // Show the confirmation card
        document.querySelector('.card').style.display = 'block';

        // Optional: Clear the form after submission
        form.reset();
    });
});
