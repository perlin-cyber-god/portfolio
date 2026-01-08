document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation Logic
    const observerOptions = {
        root: null, 
        threshold: 0.1, 
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 2. Navbar Scroll Behavior
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.5)";
        } else {
            nav.style.boxShadow = "none";
        }
    });

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Grid Glow Effect (NEW CODE ADDED HERE)
    const bg = document.querySelector('.circuit-background');
    
    if (bg) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            bg.style.setProperty('--mouse-x', `${x}px`);
            bg.style.setProperty('--mouse-y', `${y}px`);
        });
    }

});