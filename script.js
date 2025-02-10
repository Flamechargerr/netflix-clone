// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// FAQ accordion functionality
document.querySelectorAll('.faqbox').forEach(box => {
    box.addEventListener('click', () => {
        const content = box.querySelector('.faq-content');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

// Lazy loading for images and videos
document.addEventListener("DOMContentLoaded", function() {
    var lazyElements = [].slice.call(document.querySelectorAll("img.lazy, video.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyElementObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyElement = entry.target;
                    lazyElement.src = lazyElement.dataset.src;
                    lazyElement.classList.remove("lazy");
                    lazyElementObserver.unobserve(lazyElement);
                }
            });
        });

        lazyElements.forEach(function(lazyElement) {
            lazyElementObserver.observe(lazyElement);
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
