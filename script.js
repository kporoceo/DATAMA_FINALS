document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const ownerName = document.getElementById('ownerName').value;
    const petName = document.getElementById('petName').value;
    const petType = document.getElementById('petType').value;
    const serviceType = document.getElementById('serviceType').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const notes = document.getElementById('notes').value || 'None';

    // Populate confirmation card
    document.getElementById('confirmOwnerName').textContent = ownerName;
    document.getElementById('confirmPetName').textContent = petName;
    document.getElementById('confirmPetType').textContent = petType;
    document.getElementById('confirmServiceType').textContent = serviceType;
    document.getElementById('confirmAppointmentDate').textContent = appointmentDate;
    document.getElementById('confirmNotes').textContent = notes;

    // Show confirmation card and hide form
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('confirmationCard').style.display = 'block';
});
