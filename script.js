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
        "If with grooming (free 1 hour stay) succeeding hours 50/hour",
        "Without grooming 1st HR 100, Succeeding 80/hour",
        "8 Hour Package - 500"
    ]
};

// Populate dropdowns
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

document.addEventListener("DOMContentLoaded", populateDropdowns);

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const totalPrice = calculateTotalPrice(
        this.royalGrooming.value,
        this.bathBlowDry.value,
        this.aLaCarte.value,
        this.boardingServices.value
    );

    document.getElementById("confirmOwnerName").textContent = this.ownerName.value;
    document.getElementById("confirmPetName").textContent = this.petName.value;
    document.getElementById("confirmPetType").textContent = this.petType.value;
    document.getElementById("confirmPhoneNumber").textContent = this.phoneNumber.value;

    document.getElementById("confirmServiceType").innerHTML = `
        Royal Grooming: ${this.royalGrooming.value || "None"}<br>
        Bath & Blow Dry: ${this.bathBlowDry.value || "None"}<br>
        A La Carte: ${this.aLaCarte.value || "None"}<br>
        Boarding Services: ${this.boardingServices.value || "None"}
    `;

    document.getElementById("confirmTotalPrice").textContent = `Total Price: PHP ${totalPrice}`;
    document.getElementById("confirmationCard").style.display = "block";
});

function calculateTotalPrice(royalGrooming, bathBlowDry, aLaCarte, boardingServices) {
    const getPrice = service => parseInt(service.split(" - ").pop()) || 0;
    return getPrice(royalGrooming) + getPrice(bathBlowDry) + getPrice(aLaCarte) + getPrice(boardingServices);
}