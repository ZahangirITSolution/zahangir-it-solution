// Mobile Menu
function toggleMenu()
{
 document.getElementById("navMenu")
    .classList.toggle("show");
}

// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

// Contact Form
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            alert("Thank you! Your message is ready.");

            form.reset();
        });
    }

});