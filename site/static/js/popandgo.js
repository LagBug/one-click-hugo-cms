// Language Toggle Functionality
let currentLanguage = 'gr';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'gr' ? 'en' : 'gr';
    updateLanguage();
    
    // Update button text
    const langText = document.getElementById('langText');
    langText.textContent = currentLanguage === 'gr' ? 'EN' : 'GR';
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-gr]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const drawer = document.getElementById('mobileDrawer');
    const toggle = document.getElementById('mobileMenuToggle');
    drawer.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const drawer = document.getElementById('mobileDrawer');
    const toggle = document.getElementById('mobileMenuToggle');
    
    if (drawer.classList.contains('active') && 
        !drawer.contains(e.target) && 
        !toggle.contains(e.target)) {
        drawer.classList.remove('active');
        toggle.classList.remove('active');
    }
});

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Check for download parameter and redirect if on mobile
function checkDownloadRedirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const download = urlParams.get('download');
    
    if (download === 'true') {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // Check if iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = 'https://apps.apple.com/app/6748235605';
        }
        // Check if Android
        else if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=me.lagbug.popandgo';
        }
    }
}

// Add parallax effect to hero section
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrolled < hero.offsetHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.5;
            }
        }
    });
}

// Navbar background on scroll
function setupNavbarScroll() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    setCurrentYear();
    
    // Setup event listeners
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Setup features
    setupScrollAnimations();
    setupSmoothScroll();
    setupParallax();
    setupNavbarScroll();
    checkDownloadRedirect();
    
    // Add entrance animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
});

// Add resize handler for responsive adjustments
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            const drawer = document.getElementById('mobileDrawer');
            const toggle = document.getElementById('mobileMenuToggle');
            drawer.classList.remove('active');
            toggle.classList.remove('active');
        }
    }, 250);
});

