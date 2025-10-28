// You can add interactive elements here later.
// For example, a "scroll to top" button or a mobile menu toggle.

console.log("Portfolio website loaded.");

// Example: Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});