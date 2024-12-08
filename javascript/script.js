// Newsletter form submission handling
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    
    const emailInput = document.getElementById("newsletter-email").value;
    
    if (emailInput === "") {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for subscribing to our newsletter!");
        document.getElementById("newsletter-form").reset(); // Clear the form after submission
    }
});

// Add active class to navigation links based on the current section the user is viewing
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

function updateActiveNavLink() {
    let currentSection = "";
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active"); // Add active class
        } else {
            link.classList.remove("active"); // Remove active class
        }
    });
}

// Call the updateActiveNavLink function on scroll and load
window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

// Optional: Smooth Scroll to sections when clicking on navigation links
navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust scroll position for fixed header
            behavior: "smooth"
        });
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector("header");
let scrollTimeout;

window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout); // Clear the previous timeout

    scrollTimeout = setTimeout(function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, 10); // Adjust the delay to your preference
});
