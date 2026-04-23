// Smooth Scroll for Navigation
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

// Header scroll effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Color Swatch Selection
document.querySelectorAll('.swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add to Cart Logic (Mockup)
function addToCart(narrative, defaultColor, price) {
    // Get selected color from the section
    const section = event.target.closest('.product-section');
    const activeSwatch = section.querySelector('.swatch.active');
    const selectedColor = activeSwatch ? activeSwatch.getAttribute('title') : defaultColor;

    const product = {
        name: 'Sofá Lutton',
        narrative: narrative,
        color: selectedColor,
        price: price,
        image: section.querySelector('img').src
    };

    // Store in localStorage for the cart page
    localStorage.setItem('cartItem', JSON.stringify(product));

    // Redirect to cart mockup
    window.location.href = 'cart.html';
}

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-section, .intro-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});
