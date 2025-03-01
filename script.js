document.addEventListener('DOMContentLoaded', function () {
    // Ensure the confirmation card is hidden initially
    document.getElementById('confirmationCard').style.display = 'none';

    document.getElementById('appointmentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const ownerName = document.getElementById('ownerName').value.trim();
        const petName = document.getElementById('petName').value.trim();
        const petType = document.getElementById('petType').value;
        const serviceType = document.getElementById('serviceType').value;
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const emailAddress = document.getElementById('emailAddress').value.trim();
        const appointmentDate = document.getElementById('appointmentDate').value;
        const notes = document.getElementById('notes').value.trim() || 'None';

        // Check if all confirmation elements exist
        const confirmFields = [
            { id: 'confirmOwnerName', value: ownerName },
            { id: 'confirmPetName', value: petName },
            { id: 'confirmPetType', value: petType },
            { id: 'confirmServiceType', value: serviceType },
            { id: 'confirmPhoneNumber', value: phoneNumber },
            { id: 'confirmEmailAddress', value: emailAddress },
            { id: 'confirmAppointmentDate', value: appointmentDate },
            { id: 'confirmNotes', value: notes }
        ];

        confirmFields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element) {
                element.textContent = field.value;
            } else {
                console.warn(`Element with ID '${field.id}' not found.`);
            }
        });

        // Hide form, show confirmation
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('confirmationCard').style.display = 'block';
    });
});
