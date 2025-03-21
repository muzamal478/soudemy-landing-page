// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Lazy Loading and Section Animations
    const sections = document.querySelectorAll('section'); // Target all sections
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Adjust margin to trigger slightly before the section is fully in view
    };

    // General Intersection Observer for all sections
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const section = entry.target;

                // Add a pop-up animation to the section
                section.classList.add('animate-pop-up');

                // Trigger specific animations for elements within the section
                const sectionId = section.getAttribute('id');
                switch (sectionId) {
                    case 'hero':
                        animateHeroSection();
                        break;
                    case 'products':
                        animateProductsSection();
                        break;
                    case 'build-websites':
                        animateBuildWebsitesSection();
                        break;
                    case 'stats':
                        animateStatsSection();
                        break;
                    case 'testimonial':
                        animateTestimonialSection();
                        break;
                    case 'cta':
                        animateCtaSection();
                        break;
                    case 'footer':
                        animateFooterSection();
                        break;
                }

                // Unobserve the section after animation to improve performance
                observer.unobserve(section);
            }
        });
    }, observerOptions);

    // Observe all sections for lazy loading and animation
    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    // Hero Section Animation (Continuous Image Movement)
    function animateHeroSection() {
        const heroTitle = document.querySelector('.hero-title');
        const heroBtn = document.querySelector('.hero-btn');
        const heroImageWrapper = document.querySelector('.hero-image-wrapper');
        const heroImage = document.querySelector('.hero-image');

        // Apply animations based on screen size
        if (window.innerWidth > 1024) {
            heroTitle.style.animation = 'slideInLeft 1s ease-out forwards';
            heroBtn.style.animation = 'slideInLeft 1s ease-out forwards 0.3s';
            heroImageWrapper.style.animation = 'slideInRight 1.2s ease-out forwards 0.6s';
        } else {
            heroTitle.style.animation = 'fadeInUp 1s ease-out forwards';
            heroBtn.style.animation = 'fadeInUp 1s ease-out forwards 0.3s';
            heroImageWrapper.style.animation = 'fadeInUp 1.2s ease-out forwards 0.6s';
        }

        // Continuous subtle movement for the hero image
        let direction = 1; // 1 for up, -1 for down
        let position = 0;
        const moveImage = () => {
            position += direction * 0.5; // Adjust speed of movement
            if (position > 10) direction = -1; // Move down
            if (position < -10) direction = 1; // Move up
            heroImage.style.transform = `translateY(${position}px)`;
            requestAnimationFrame(moveImage); // Loop the animation
        };
        moveImage();
    }

    // Products Section Animation
    function animateProductsSection() {
        const productsTitle = document.querySelector('.products-title');
        const productsSubtitle = document.querySelector('.products-subtitle');
        const productCards = document.querySelectorAll('.product-card');

        productsTitle.style.animation = 'fadeInUp 1s ease-out forwards';
        productsSubtitle.style.animation = 'fadeInUp 1s ease-out forwards 0.3s';
        productCards.forEach((card, index) => {
            card.style.animation = `popUp 0.8s ease-out forwards ${0.2 * (index + 1)}s`;
        });
    }

    // Build Websites Section Animation
    function animateBuildWebsitesSection() {
        const buildWebsitesTitle = document.querySelector('.build-websites-title');
        const buildWebsitesSubtitle = document.querySelector('.build-websites-subtitle');
        const websiteCards = document.querySelectorAll('.website-card');

        buildWebsitesTitle.style.animation = 'fadeInUp 1s ease-out forwards';
        buildWebsitesSubtitle.style.animation = 'fadeInUp 1s ease-out forwards 0.3s';
        websiteCards.forEach((card, index) => {
            card.style.animation = `slideInUp 1s ease-out forwards ${0.2 * (index + 1)}s`;
        });
    }

    // Stats Section Animation and Counter
    function animateStatsSection() {
        const statsTitle = document.querySelector('.stats-title');
        const statsSubtitle = document.querySelector('.stats-subtitle');
        const stats = document.querySelectorAll('.stat');
        const statNumbers = document.querySelectorAll('.stat-number');

        statsTitle.style.animation = 'fadeInUp 1s ease-out forwards';
        statsSubtitle.style.animation = 'fadeInUp 1s ease-out forwards 0.3s';
        stats.forEach((stat, index) => {
            stat.style.animation = `popUp 0.8s ease-out forwards ${0.2 * (index + 1)}s`;
        });

        // Start the counter animation for each stat number
        statNumbers.forEach((statNumber) => {
            const target = parseInt(statNumber.getAttribute('data-target'));
            let count = 0;
            const speed = 50; // Speed of the counter (lower is faster)

            const updateCounter = () => {
                const increment = target / speed;
                if (count < target) {
                    count += increment;
                    statNumber.textContent = `${Math.ceil(count)}%`;
                    setTimeout(updateCounter, 20);
                } else {
                    statNumber.textContent = `${target}%`;
                }
            };

            updateCounter();
        });
    }

    // Testimonial Section Animation
    function animateTestimonialSection() {
        const testimonialTitle = document.querySelector('.testimonial-title');
        const testimonialSubtitle = document.querySelector('.testimonial-subtitle');
        const testimonialCard = document.querySelector('.testimonial-card');

        testimonialTitle.style.animation = 'fadeInUp 1s ease-out forwards';
        testimonialSubtitle.style.animation = 'fadeInUp 1s ease-out forwards 0.3s';
        testimonialCard.style.animation = 'popUp 1s ease-out forwards 0.6s';
    }

    // CTA Section Animation
    function animateCtaSection() {
        const ctaTitle = document.querySelector('.cta-title');
        const ctaForm = document.querySelector('.cta-form');

        ctaTitle.style.animation = 'fadeInUp 1s ease-out forwards';
        ctaForm.style.animation = 'fadeInUp 1s ease-out forwards 0.3s';
    }

    // Footer Section Animation
    function animateFooterSection() {
        const footerColumns = document.querySelectorAll('.footer-column');

        footerColumns.forEach((column, index) => {
            column.style.animation = `fadeInUp 1s ease-out forwards ${0.2 * (index + 1)}s`;
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link, .nav-btn').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Form Submission Handling for CTA Section
    const ctaForm = document.querySelector('#cta-form');
    ctaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = ctaForm.querySelector('.cta-input').value;
        if (email) {
            alert('Thank you for signing up! We’ll get back to you soon.');
            ctaForm.reset(); // Clear the form
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Newsletter Form Submission for Footer
    const newsletterForm = document.querySelector('#newsletter-form');
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('.newsletter-input').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset(); // Clear the form
        } else {
            alert('Please enter a valid email address.');
        }
    });
});