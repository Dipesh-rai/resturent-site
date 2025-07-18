// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    links.forEach(link => {
        link.style.animation ?
            (link.style.animation = '') :
            (link.style.animation = `navLinkFade 0.5s ease forwards ${link.dataset.delay || '0s'}`);
    });
    hamburger.classList.toggle('toggle');
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const topBar = document.querySelector('.top-bar');
    const topBarHeight = topBar ? topBar.offsetHeight : 0;

    header.classList.toggle('scrolled', window.scrollY > topBarHeight);

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    backToTop.classList.toggle('active', window.scrollY > 300);
});

// Menu Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.menu-item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const category = btn.dataset.tab;

        // Filter menu items
        menuItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;

function showSlide(n) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + testimonials.length) % testimonials.length;

    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(parseInt(dot.dataset.slide));
    });
});

// Auto slide testimonials
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Video Play Button
const video = document.querySelector('.video-section video');
const playBtn = document.querySelector('.play-btn');

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        }
    });
});

// Form Submission
const reservationForm = document.querySelector('.reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your reservation! We will contact you shortly to confirm your booking.');
        this.reset();
    });
}

// Gallery Lightbox (would need additional HTML/CSS for full implementation)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // In a full implementation, this would open a lightbox with the clicked image
        console.log('Gallery item clicked - would open lightbox in full implementation');
    });
});