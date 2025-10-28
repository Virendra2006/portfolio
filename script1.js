// --- Smooth scrolling for nav links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Fade-in animation on scroll ---
const sections = document.querySelectorAll('section');

const options = {
    root: null, // it is the viewport
    threshold: 0.1, // 10% of the item is visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        // Add the 'visible' class to the section
        entry.target.classList.add('visible');
        // Stop observing the section once it's visible
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

console.log("Modern portfolio website loaded.");