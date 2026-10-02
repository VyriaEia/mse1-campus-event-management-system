
document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const eventSelect = document.getElementById("event-select");
    const registrationSection = document.getElementById("registration");
    const registrationForm = document.getElementById("registration-form");
    const formMessage = document.getElementById("form-message");

    // Select an event when its Register button is clicked.
    registerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedEvent = button.dataset.event;

            eventSelect.value = selectedEvent;

            registrationSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            eventSelect.focus({ preventScroll: true });
        });
    });

    // Validate the registration form.
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const studentName = document.getElementById("student-name").value.trim();
        const studentEmail = document.getElementById("student-email").value.trim();
        const selectedEvent = eventSelect.value;

        formMessage.textContent = "";

        if (!studentName || !studentEmail || !selectedEvent) {
            formMessage.textContent = "Please complete all required fields.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        // Demonstration only; no backend submission yet.
        formMessage.textContent =
            "Registration form validated for " + selectedEvent +
            ". Backend submission is not yet connected.";

        formMessage.style.color = "#166534";

        registrationForm.reset();
    });
});
