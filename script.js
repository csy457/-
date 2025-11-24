// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .step, .testimonial-card, .gallery-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Product card hover effect enhancement
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Track button clicks for analytics (placeholder for Google Analytics)
document.querySelectorAll('.btn-buy, .btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        // This is where you would add Google Analytics tracking
        // Example: gtag('event', 'click', { 'event_category': 'button', 'event_label': this.textContent });
        console.log('Button clicked:', this.textContent);
    });
});

// Add loading state to buttons
document.querySelectorAll('a.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.href && this.href.includes('typeform.com') || this.href.includes('#')) {
            // Add a small delay to show loading state
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        }
    });
});

// Mobile menu toggle (if needed in future)
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    // Future enhancement: Add hamburger menu for mobile
}

// Lazy loading for images (performance optimization)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images (if you want to implement lazy loading later)
    // document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Add to cart / form submission tracking
document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        const productPrice = this.closest('.product-card').querySelector('.price').textContent;
        
        // Store in sessionStorage for analytics
        sessionStorage.setItem('lastClickedProduct', JSON.stringify({
            name: productName,
            price: productPrice,
            timestamp: new Date().toISOString()
        }));
    });
});

// Console message for developers
console.log('%c🧲 个性化冰箱贴定制网站', 'color: #FF6B6B; font-size: 20px; font-weight: bold;');
console.log('%c如需集成分析工具，请在 script.js 中添加相应的跟踪代码', 'color: #7F8C8D; font-size: 12px;');

