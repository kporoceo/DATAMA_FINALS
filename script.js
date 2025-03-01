const serviceData = {
    "Royal Grooming": [
        "Small (1.0kg to 6.9kg) - 550",
        "Medium (7.0kg to 9.9kg) - 650",
        "Large (10.0kg to 15.9kg) - 800",
        "Extra Large (16.0kg to 40.0kg) - 975"
    ],
    "Bath & Blow Dry": [
        "Small (1.0kg to 6.9kg) - 300",
        "Medium (7.0kg to 9.9kg) - 350",
        "Large (10.0kg to 15.9kg) - 500",
        "Extra Large (16.0kg to 40.0kg) - 650"
    ],
    "Add-Ons": [
        "Sanitary Cut (Small) - 150",
        "Face Trim (Small) - 150",
        "Dematting (Small) - 250",
        "Medicated Shampoo (Small) - 100",
        "Haircut (Small) - 300"
    ],
    "Ala Carte": [
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

document.getElementById("serviceCategory").addEventListener("change", function () {
    const serviceType = document.getElementById("serviceType");
    const selectedCategory = this.value;

    serviceType.innerHTML = '<option value="">Select a Service</option>';

    if (serviceData[selectedCategory]) {
        serviceData[selectedCategory].forEach(service => {
            const option = document.createElement("option");
            option.value = service;
            option.textContent = service;
            serviceType.appendChild(option);
        });
    }
});

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = this.querySelectorAll("input, select, textarea");
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.style.border = "2px solid red";
            isValid = false;
        } else {
            input.style.border = "1px solid #ddd";
        }
    });

    if (isValid) {
        document.getElementById("confirmOwnerName").textContent = document.getElementById("ownerName").value;
        document.getElementById("confirmPetName").textContent = document.getElementById("petName").value;
        document.getElementById("confirmPetType").textContent = document.getElementById("petType").value;
        document.getElementById("confirmServiceType").textContent = document.getElementById("serviceType").value;
        document.getElementById("confirmPhoneNumber").textContent = document.getElementById("phoneNumber").value;
        document.getElementById("confirmEmailAddress").textContent = document.getElementById("emailAddress").value;
        document.getElementById("confirmAppointmentDate").textContent = document.getElementById("appointmentDate").value;
        document.getElementById("confirmNotes").textContent = document.getElementById("notes").value || "None";

        document.getElementById("confirmationCard").style.display = "block";
    }
});

