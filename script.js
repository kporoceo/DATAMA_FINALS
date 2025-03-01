// Service data
const serviceData = {
    "Royal Grooming": ["Full Groom - 550", "Mini Groom - 800"],
    "Bath & Blow Dry": ["Basic Bath - 300", "Luxury Bath - 500"],
    "Add-ons": ["Nail Clipping - 150", "Teeth Cleaning - 250"],
    "A La Carte": ["Ear Cleaning - 99", "Paw Pad Treatment - 99"],
    "Boarding Services": ["Overnight Stay - 500", "Daycare - 300"]
};

// Populate dropdowns
function populateDropdowns() {
    populateServices("Royal Grooming", document.getElementById("royalGrooming"));
    populateServices("Bath & Blow Dry", document.getElementById("bathBlowDry"));
    populateServices("Add-ons", document.getElementById("addOns"));
    populateServices("A La Carte", document.getElementById("aLaCarte"));
    populateServices("Boarding Services", document.getElementById("boardingServices"));
}

function populateServices(category, selectElement) {
    if (!selectElement) return; // Ensure element exists
    selectElement.innerHTML = '<option value="">Select a Service</option>';
    serviceData[category].forEach(service => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        selectElement.appendChild(option);
    });
}

// Wait for full DOM load
document.addEventListener("DOMContentLoaded", populateDropdowns);

// Form submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmOwnerName").textContent = this.ownerName.value;
    document.getElementById("confirmPetName").textContent = this.petName.value;
    document.getElementById("confirmPetType").textContent = this.petType.value;
    document.getElementById("confirmPhoneNumber").textContent = this.phoneNumber.value;

    document.getElementById("confirmServiceType").innerHTML = `
        Royal Grooming: ${this.royalGrooming.value || "None"}<br>
        Bath & Blow Dry: ${this.bathBlowDry.value || "None"}<br>
        Add-ons: ${this.addOns.value || "None"}<br>
        A La Carte: ${this.aLaCarte.value || "None"}<br>
        Boarding Services: ${this.boardingServices.value || "None"}
    `;
    document.getElementById("confirmationCard").style.display = "block";
});
