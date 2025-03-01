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
    "Sanitary Cut": [
        "None - 0",
        "Small - 150",
        "Medium - 200",
        "Large - 250",
        "Extra Large - 300"
    ],
    "Face Trim": [
        "None - 0",
        "Small - 150",
        "Medium - 200",
        "Large - 250",
        "Extra Large - 300"
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
        "None - 0",
        "With Grooming - 50/hr",
        "Without Grooming - 100",
        "8 Hour Package - 500"
    ]
};

// Populate dropdowns on page load
document.addEventListener("DOMContentLoaded", function () {
    populateDropdowns();
});

// Populate service options
function populateDropdowns() {
    populateServices("Royal Grooming", document.getElementById("royalGrooming"));
    populateServices("Bath & Blow Dry", document.getElementById("bathBlowDry"));
    populateServices("Sanitary Cut", document.getElementById("sanitaryCut"));
    populateServices("Face Trim", document.getElementById("faceTrim"));
    populateServices("A La Carte", document.getElementById("aLaCarte"));
    populateServices("Boarding Services", document.getElementById("boardingServices"));
}

function populateServices(category, selectElement) {
    if (!selectElement) return;
    selectElement.innerHTML = "";
    serviceData[category].forEach(service => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        selectElement.appendChild(option);
    });
}

// Form submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        ownerName: this.ownerName.value.trim(),
        phoneNumber: this.phoneNumber.value.trim(),
        emailAddress: this.emailAddress.value.trim(),
        petName: this.petName.value.trim(),
        petType: this.petType.value,
        royalGrooming: this.royalGrooming.value,
        bathBlowDry: this.bathBlowDry.value,
        sanitaryCut: this.sanitaryCut.value,
        faceTrim: this.faceTrim.value,
        aLaCarte: this.aLaCarte.value,
        boardingServices: this.boardingServices.value
    };

    // Validation
    if (!formData.ownerName || !formData.phoneNumber || !formData.emailAddress || !formData.petName) {
        alert("Please fill in all required fields.");
        return;
    }

    // Calculate total
    const totalPrice = calculateTotalPrice(
        formData.royalGrooming,
        formData.bathBlowDry,
        formData.sanitaryCut,
        formData.faceTrim,
        formData.aLaCarte,
        formData.boardingServices
    );

    // Display confirmation
    displayConfirmation({ ...formData, totalPrice });
});

// Calculate total price
function calculateTotalPrice(...services) {
    return services.reduce((total, service) => {
        const price = parseInt(service.split(" - ").pop()) || 0;
        return total + price;
    }, 0);
}

// Display confirmation
function displayConfirmation(data) {
    alert(`
        Appointment Summary:
        -------------------------
        Owner's Name: ${data.ownerName}
        Phone Number: ${data.phoneNumber}
        Email Address: ${data.emailAddress}
        Pet's Name: ${data.petName}
        Pet Type: ${data.petType}

        Services:
        - Royal Grooming: ${data.royalGrooming || "None"}
        - Bath & Blow Dry: ${data.bathBlowDry || "None"}

        Add-Ons:
        - Sanitary Cut: ${data.sanitaryCut || "None"}
        - Face Trim: ${data.faceTrim || "None"}

        A La Carte: ${data.aLaCarte || "None"}
        Boarding Services: ${data.boardingServices || "None"}

        Total Price: PHP ${data.totalPrice}
    `);
}
