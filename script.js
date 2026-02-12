gsap.registerPlugin(ScrollTrigger);

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Hero animations
gsap.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.to('.cta-btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1,
    ease: 'power3.out'
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// CTA button scroll
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('#how-it-works').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Animate cards on scroll
gsap.utils.toArray('.card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Animate rules
gsap.utils.toArray('.rule-item').forEach((rule, i) => {
    gsap.from(rule, {
        scrollTrigger: {
            trigger: rule,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power2.out'
    });
});

// Animate service cards
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.7)'
    });
});

// Animate penalty cards
gsap.utils.toArray('.penalty-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        rotation: 5,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Animate emergency cards
gsap.utils.toArray('.emergency-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: i * 0.12,
        ease: 'power2.out'
    });
});

// Section titles animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power2.out'
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        // navbar.style.background = 'rgba(30, 60, 114, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        // navbar.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
        navbar.style.backdropFilter = 'none';
    }
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// Emergency number pulse animation
gsap.to('.emergency-number', {
    scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Hover animations for interactive elements
document.querySelectorAll('.card, .service-card, .penalty-card, .emergency-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
