document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real app, you would send this data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    });
    
    // Initialize active section on page load
    window.dispatchEvent(new Event('scroll'));

    // Initialize skill bars color
    document.querySelectorAll('.skill-bar').forEach(skillBar => {
        const value = parseInt(skillBar.value);
        if (value <= 50) {
            skillBar.style.setProperty('--value', `${value}%`);
            skillBar.style.setProperty('--color', 'var(--success-color)');
        } else if (value <= 75) {
            skillBar.style.setProperty('--value', `${value}%`);
            skillBar.style.setProperty('--color', 'var(--warning-color)');
        } else {
            skillBar.style.setProperty('--value', `${value}%`);
            skillBar.style.setProperty('--color', 'var(--danger-color)');
        }
    });
});
// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIconMoon = themeToggleBtn.querySelector('.fa-moon');
    const themeIconSun = themeToggleBtn.querySelector('.fa-sun');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIconMoon.style.display = 'none';
            themeIconSun.style.display = 'block';
        } else {
            themeIconMoon.style.display = 'block';
            themeIconSun.style.display = 'none';
        }
    }
    
    // Your existing JavaScript code continues here...
});