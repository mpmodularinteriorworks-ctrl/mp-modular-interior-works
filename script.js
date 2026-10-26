
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Update the copyright year automatically.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Handle the customer enquiry form.
  const enquiryForm = document.getElementById("enquiry-form");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document
        .getElementById("customer-name")
        .value.trim();

      const phone = document
        .getElementById("customer-phone")
        .value.trim();

      const service = document
        .getElementById("project-service")
        .value;

      const message = document
        .getElementById("project-message")
        .value.trim();

      // Basic checks before opening WhatsApp.
      if (!name || !phone || !service || !message) {
        alert("Please fill in all the fields before submitting.");
        return;
      }

      const enquiryMessage = [
        "Hello M P Modular Interior Designer!",
        "I would like to make an enquiry.",
        "",
        "Name: " + name,
        "Customer phone: " + phone,
        "Service: " + service,
        "Project details: " + message
      ].join("\n");

      const businessNumber = "919901372861";

      const whatsappURL =
        "https://wa.me/" +
        businessNumber +
        "?text=" +
        encodeURIComponent(enquiryMessage);

      // Opens WhatsApp with the message prepared.
      // The customer must press Send inside WhatsApp.
      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }
});
