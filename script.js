document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation Logic
    // We use IntersectionObserver to watch for elements entering the viewport
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of element is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target all sections and the hero explicitly
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // 2. Navbar Scroll Behavior
    // Hides navbar on scroll down, shows on scroll up (optional)
    // Or just adds a solid background when not at top.
    const nav = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.5)";
        } else {
            nav.style.boxShadow = "none";
        }
        lastScrollY = window.scrollY;
    });

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});