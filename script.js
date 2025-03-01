// Service data
const serviceData = {
    "Royal Grooming": [
        "Small (1.0kg - 6.9kg) - 550",
        "Medium (7.0kg - 9.9kg) - 650",
        "Large (10.0kg - 15.9kg) - 800",
        "Extra Large (16.0kg - 40.0kg) - 975"
    ],
    "Bath & Blow Dry": [
        "Small (1.0kg - 6.9kg) - 300",
        "Medium (7.0kg - 9.9kg) - 350",
        "Large (10.0kg - 15.9kg) - 500",
        "Extra Large (16.0kg - 40.0kg) - 650"
    ],
    "A La Carte": [
        "Anal Sac - 99",
        "Ear Cleaning - 99",
        "Nail and Trim Filling - 99",
        "Tooth Brushing (Excluding Product) - 99",
        "Mouth Wash - 99",
        "Tear Stain Removal - 99",
        "Frontline Application - 99"
    ],
    "Boarding Services": [
        "With Grooming - 50/hr",
        "Without Grooming - 100",
        "8 Hour Package - 500"
    ]
};

// Populate dropdowns on page load
document.addEventListener("DOMContentLoaded", function () {
    populateDropdowns();
});

// Function to populate service dropdowns
function populateDropdowns() {
    populateServices("Royal Grooming", document.getElementById("royalGrooming"));
    populateServices("Bath & Blow Dry", document.getElementById("bathBlowDry"));
    populateServices("A La Carte", document.getElementById("aLaCarte"));
    populateServices("Boarding Services", document.getElementById("boardingServices"));
}

function populateServices(category, selectElement) {
    if (!selectElement) return;
    selectElement.innerHTML = '<option value="">Select a Service</option>';
    serviceData[category].forEach(service => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        selectElement.appendChild(option);
    });
}

// Form submission handling
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const ownerName = this.ownerName.value.trim();
    const petName = this.petName.value.trim();
    const petType = this.petType.value;
    const phoneNumber = this.phoneNumber.value.trim();
    const emailAddress = this.emailAddress.value.trim();

    const royalGrooming = this.royalGrooming.value;
    const bathBlowDry = this.bathBlowDry.value;
    const aLaCarte = this.aLaCarte.value;
    const boardingServices = this.boardingServices.value;

    // Validate required fields
    if (!ownerName || !petName || !phoneNumber || !emailAddress) {
        alert("Please fill in all required fields.");
        return;
    }

    // Calculate total price
    const totalPrice = calculateTotalPrice(royalGrooming, bathBlowDry, aLaCarte, boardingServices);

    // Display confirmation card
    displayConfirmation({
        ownerName,
        petName,
        petType,
        phoneNumber,
        emailAddress,
        royalGrooming,
        bathBlowDry,
        aLaCarte,
        boardingServices,
        totalPrice
    });
});

// Calculate total price from selected services
function calculateTotalPrice(...services) {
    return services.reduce((total, service) => {
        const price = parseInt(service.split(" - ").pop()) || 0;
        return total + price;
    }, 0);
}

// Display the confirmation card
function displayConfirmation(data) {
    document.getElementById("confirmOwnerName").textContent = data.ownerName;
    document.getElementById("confirmPetName").textContent = data.petName;
    document.getElementById("confirmPetType").textContent = data.petType;
    document.getElementById("confirmPhoneNumber").textContent = data.phoneNumber;
    document.getElementById("confirmEmailAddress").textContent = data.emailAddress;

    document.getElementById("confirmServiceType").innerHTML = `
        <strong>Royal Grooming:</strong> ${data.royalGrooming || "None"}<br>
        <strong>Bath & Blow Dry:</strong> ${data.bathBlowDry || "None"}<br>
        <strong>A La Carte:</strong> ${data.aLaCarte || "None"}<br>
        <strong>Boarding Services:</strong> ${data.boardingServices || "None"}
    `;

    document.getElementById("confirmTotalPrice").textContent = `Total Price: PHP ${data.totalPrice}`;

    document.getElementById("confirmationCard").style.display = "block";
}
