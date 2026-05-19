const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (formSubmit) {
    formSubmit.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all input fields.");
        return;
    }

    alert("Your message has been successfully submitted. Thank you for contacting me🥰🥰🥰");

    contactForm.reset();

    localStorage.setItem("Name", name);
    localStorage.setItem("Email Address", email);
    localStorage.setItem("Message", message);

})





// Footer year
let now = new Date()
document.getElementById("year").innerText = now.getFullYear();