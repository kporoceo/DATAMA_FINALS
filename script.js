// Updated service data with categories and prices
const serviceData = {
    "Royal Grooming": [
        "Full Groom - Small (1.0kg to 6.9kg) - 550",
        "Full Groom - Medium (7.0kg to 9.9kg) - 650",
        "Mini Groom - Large (10.0kg to 15.9kg) - 800",
        "Mini Groom - Extra Large (16.0kg to 40.0kg) - 975"
    ],
    "Bath & Blow Dry": [
        "Basic Bath - Small (1.0kg to 6.9kg) - 300",
        "Luxury Bath - Medium (7.0kg to 9.9kg) - 350",
        "Luxury Bath - Large (10.0kg to 15.9kg) - 500",
        "Luxury Bath - Extra Large (16.0kg to 40.0kg) - 650"
    ],
    "Add-ons": [
        "Sanitary Cut (Small) - 150",
        "Face Trim (Small) - 150",
        "Dematting (Small) - 250",
        "Medicated Shampoo (Small) - 100",
        "Haircut (Small) - 300"
    ],
    "A La Carte": [
        "Anal Sac - 99",
        "Ear Cleaning - 99",
        "Nail Trim & Filing - 99",
        "Tooth Brushing (excluding product) - 99"
    ],
    "Boarding Services": [
        "With Grooming (Succeeding Hours) - 50/hr",
        "Without Grooming (1st Hr) - 100",
        "8 Hour Package - 500"
    ]
};

// Populate the service options
function populateServices(selectElement, category) {
    selectElement.innerHTML = '<option value="">Select a Service</option>';
    if (serviceData[category]) {
        serviceData[category].forEach(service => {
            const option = document.createElement("option");
            option.value = service;
            option.textContent = service;
            selectElement.appendChild(option);
        });
    }
}

// Appointment form submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    const ownerName = form.ownerName.value;
    const petName = form.petName.value;
    const petType = form.petType.value;
    const royalGrooming = form.royalGrooming.value;
    const bathBlowDry = form.bathBlowDry.value;
    const addOns = form.addOns.value;
    const aLaCarte = form.aLaCarte.value;
    const boardingServices = form.boardingServices.value;
    const phoneNumber = form.phoneNumber.value;

    // Populate the confirmation card
    document.getElementById("confirmOwnerName").textContent = ownerName;
    document.getElementById("confirmPetName").textContent = petName;
    document.getElementById("confirmPetType").textContent = petType;
    document.getElementById("confirmServiceType").innerHTML = `
        <strong>Royal Grooming:</strong> ${royalGrooming || "None"}<br>
        <strong>Bath & Blow Dry:</strong> ${bathBlowDry || "None"}<br>
        <strong>Add-ons:</strong> ${addOns || "None"}<br>
        <strong>A La Carte:</strong> ${aLaCarte || "None"}<br>
        <strong>Boarding Services:</strong> ${boardingServices || "None"}
    `;
    document.getElementById("confirmPhoneNumber").textContent = phoneNumber;

    // Display the confirmation card
    document.getElementById("confirmationCard").style.display = "block";
});
