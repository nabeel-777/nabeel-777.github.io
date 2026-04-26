document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Theme Management
    // ===================================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update body class for backward compatibility if needed
        body.className = `${theme}-mode`;
    }

    // ===================================
    // Smooth Scroll Navigation
    // ===================================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('.header');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                const nav = document.getElementById('nav');
                const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // ===================================
    // Active Nav & Header Scroll State
    // ===================================
    function handleScroll() {
        const scrollPosition = window.scrollY;
        
        // Header shadow on scroll
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link update
        const scrollWithOffset = scrollPosition + 150;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollWithOffset >= sectionTop && scrollWithOffset < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Scroll to top button visibility
        const scrollTopBtn = document.getElementById('scrollTop');
        if (scrollPosition > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    // ===================================
    // Reveal Animations (Intersection Observer)
    // ===================================
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Initial classes for reveal
    const sectionsToReveal = document.querySelectorAll('section, .skill-card, .project-card, .experience-card');
    sectionsToReveal.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formMessage = document.getElementById('formMessage');
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            const hCaptchaResponse = contactForm.querySelector('[name="h-captcha-response"]').value;
            if (!hCaptchaResponse) {
                formMessage.textContent = 'Please complete the hCaptcha.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                return;
            }

            const formData = new FormData(contactForm);
            formData.append("access_key", "17bf0746-335d-40d4-bc09-5467fc4ebca1");
            formData.append("h-captcha-response", hCaptchaResponse);
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                
                if (data.success) {
                    formMessage.textContent = 'Message sent successfully!';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formMessage.textContent = 'Oops! Something went wrong. Please try again.';
                formMessage.className = 'form-message error';
            } finally {
                formMessage.style.display = 'block';
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                if (typeof hcaptcha !== 'undefined') hcaptcha.reset();
            }
        });
    }

    // ===================================
    // Initialize
    // ===================================
    handleScroll();
});

// Prevent Form Resubmission
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}