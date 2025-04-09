// This file contains TypeScript code for the professional portfolio project.

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form") as HTMLFormElement;

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const data: { [key: string]: string } = {};
            formData.forEach((value, key) => {
                data[key] = value.toString();
            });

            console.log("Form submitted:", data);
            alert("Thank you for contacting me! I will get back to you soon.");
            contactForm.reset();
        });
    }
});