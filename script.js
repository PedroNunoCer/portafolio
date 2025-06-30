// Animation for skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = `${width}%`;
        }, 300);
    });
}

// Animation for sections
function animateSections() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check saved preference
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }
    
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update icon
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️';
            localStorage.setItem('dark-mode', 'true');
        } else {
            darkModeToggle.textContent = '🌙';
            localStorage.setItem('dark-mode', 'false');
        }
    });
}

// Skills tabs functionality
function initSkillsTabs() {
    const skillTabs = document.querySelectorAll('.skills-tab');
    const skillContents = document.querySelectorAll('.skills-content');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            // Deactivate all tabs
            skillTabs.forEach(t => t.classList.remove('active'));
            skillContents.forEach(c => c.classList.remove('active'));
            
            // Activate selected tab
            tab.classList.add('active');
            document.getElementById(`${target}-skills`).classList.add('active');
        });
    });
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 800) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const duration = 1000; // Animation duration in ms
        const startingY = window.pageYOffset;
        const startTime = performance.now();

        function scroll() {
            const currentTime = performance.now();
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function
            const easeInOutCubic = progress => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };

            window.scrollTo(0, startingY * (1 - easeInOutCubic(progress)));

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        }

        requestAnimationFrame(scroll);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateSections();
    initDarkMode();
    initSkillsTabs();
    initScrollToTop();
});

// Initialize animations when page is fully loaded
window.addEventListener('load', () => {
    animateSkillBars();
}); 