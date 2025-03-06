const appointmentForm = document.getElementById("appointmentForm");
const confirmationCard = document.getElementById("confirmationCard");

const supabaseUrl = 'Yhttps://snfhnftwtelgsupzdiyy.supabase.co'; 
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuZmhuZnR3dGVsZ3N1cHpkaXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2NDEyOTcsImV4cCI6MjA1NjIxNzI5N30.oeO5sBmZx3Fk_VOrhp4w60-uax9_40oik55AYTZ6rIU; 
const supabase = createClient(supabaseUrl, supabaseAnonKey);

appointmentForm.addEventListener("submit", async function (e) { 
    e.preventDefault();

    const formData = new FormData(appointmentForm);

    const appointmentDetails = {
        ownerName: formData.get("ownerName"),
        phoneNumber: formData.get("phoneNumber"),
        emailAddress: formData.get("emailAddress"),
        petName: formData.get("petName"),
        petType: formData.get("petType"),
        royalGrooming: formData.get("royalGrooming"),
        bathBlowDry: formData.get("bathBlowDry"),
        dematting: formData.get("dematting"),
        medicatedShampoo: formData.get("medicatedShampoo"),
        boardingServices: formData.get("boardingServices"),
    };

    const { error } = await supabase
        .from('appointments')
        .insert([appointmentDetails]);

    if (error) {
        console.error('Error inserting data:', error);
        alert("There was an error submitting your appointment. Please try again.");
        return;
    } else {
        console.log('Data inserted successfully!');
        alert("Appointment booked successfully!");
    }

    confirmationCard.innerHTML = `
        <div class="card">
            <h2>Your Appointment Has Been Booked!</h2>
            <p>Thank you, <strong>${appointmentDetails.ownerName}</strong>, for booking an appointment for <strong>${appointmentDetails.petName}</strong> (${appointmentDetails.petType}).</p>
            <p>We will contact you at <strong>${appointmentDetails.phoneNumber}</strong> or <strong>${appointmentDetails.emailAddress}</strong> to confirm the details.</p>
            <h3>Selected Services:</h3>
            <ul>
                <li>Royal Grooming: ${appointmentDetails.royalGrooming || "None"}</li>
                <li>Bath & Blow Dry: ${appointmentDetails.bathBlowDry || "None"}</li>
                <li>Dematting: ${appointmentDetails.dematting || "None"}</li>
                <li>Medicated Shampoo: ${appointmentDetails.medicatedShampoo || "None"}</li>
                <li>Boarding Service: ${appointmentDetails.boardingServices || "None"}</li>
            </ul>
        </div>
    `;

    confirmationCard.style.display = "block";
    appointmentForm.reset();
});
