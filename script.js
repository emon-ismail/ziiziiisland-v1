// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Wait for all sections to load before initializing
    setTimeout(() => {
        initializeWebsite();
    }, 1000);
});

// ===== AOS INIT =====
function isMobile() {
    return window.innerWidth <= 576;
}

function initializeWebsite() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100,
            // Disable AOS on mobile
            disable: isMobile
        });
    }

    // Initialize all components
    initNavbar();
    initSmoothScrolling();
    initScrollspy();
    initGalleryModal();
    initLazyLoading();
    initTypingAnimation();
    initFormValidation();
    initBackToTop();
    initParallaxEffects();
    initBranchSelection();
}

// ===== NAVBAR FUNCTIONALITY =====
function initNavbar() {
    const navbar = document.getElementById('mainNavbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (!navbar) return;

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Mobile dropdown functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdownMenu = this.nextElementSibling;
            const isOpen = dropdownMenu.classList.contains('show');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
            
            // Toggle current dropdown
            if (isOpen) {
                dropdownMenu.classList.remove('show');
            } else {
                dropdownMenu.classList.add('show');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    // Add scrolled class styles
    const style = document.createElement('style');
    style.textContent = `
        .navbar.scrolled {
            background: rgba(254, 254, 254, 0.98) !important;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLLSPY =====
function initScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== GALLERY MODAL =====
function initGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modalImage = document.getElementById('modalImage');
    
    if (!modalImage) return;
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
            }
        });
    });
}

// ===== LAZY LOADING =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.width = '0';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// ===== FORM VALIDATION =====
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Form submitted successfully!', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTopBtn = document.querySelector('.btn-outline-light');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
}

// ===== PARALLAX EFFECTS =====
// function initParallaxEffects() {
//     const parallaxElements = document.querySelectorAll('.hero-section');
    
//     if (parallaxElements.length === 0) return;
    
//     window.addEventListener('scroll', function() {
//         const scrolled = window.pageYOffset;
        
//         parallaxElements.forEach(element => {
//             const rate = scrolled * -0.5;
//             element.style.transform = `translateY(${rate}px)`;
//         });
//     });
// }

// ===== BRANCH SELECTION =====
function initBranchSelection() {
    const branchCards = document.querySelectorAll('.branch-card');
    const branchSelection = document.getElementById('branchSelection');
    const khulshiDetails = document.getElementById('khulshiDetails');
    const finlayDetails = document.getElementById('finlayDetails');
    
    if (branchCards.length === 0) return;
    
    branchCards.forEach(card => {
        card.addEventListener('click', function() {
            const branch = this.getAttribute('data-branch');
            
            // Hide branch selection
            if (branchSelection) {
                branchSelection.style.display = 'none';
            }
            
            // Show appropriate branch details
            if (branch === 'khulshi' && khulshiDetails) {
                khulshiDetails.style.display = 'block';
                if (finlayDetails) finlayDetails.style.display = 'none';
            } else if (branch === 'finlay' && finlayDetails) {
                finlayDetails.style.display = 'block';
                if (khulshiDetails) khulshiDetails.style.display = 'none';
            }
            
            // Scroll to branches section
            const branchesSection = document.getElementById('branches');
            if (branchesSection) {
                branchesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== SHOW BRANCH SELECTION =====
function showBranchSelection() {
    const branchSelection = document.getElementById('branchSelection');
    const khulshiDetails = document.getElementById('khulshiDetails');
    const finlayDetails = document.getElementById('finlayDetails');
    
    // Show branch selection
    if (branchSelection) {
        branchSelection.style.display = 'block';
    }
    
    // Hide branch details
    if (khulshiDetails) {
        khulshiDetails.style.display = 'none';
    }
    if (finlayDetails) {
        finlayDetails.style.display = 'none';
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            padding: 1rem;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-success {
            border-left: 4px solid #28a745;
        }
        
        .notification-error {
            border-left: 4px solid #dc3545;
        }
        
        .notification-info {
            border-left: 4px solid #17a2b8;
        }
        
        .notification-close {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: auto;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ===== INTERACTIVE FEATURES =====

// Package selection
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const packageButtons = document.querySelectorAll('.package-card .btn');
        
        packageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const packageCard = this.closest('.package-card');
                if (packageCard) {
                    const packageName = packageCard.querySelector('h3');
                    if (packageName) {
                        showNotification(`Selected package: ${packageName.textContent}`, 'success');
                    }
                }
            });
        });
    }, 1500);
});

// Menu tab functionality
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const menuTabs = document.querySelectorAll('#menuTabs .nav-link');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Add AOS animation to new content
                const targetId = this.getAttribute('data-bs-target');
                const targetContent = document.querySelector(targetId);
                
                if (targetContent) {
                    targetContent.querySelectorAll('[data-aos]').forEach(element => {
                        element.classList.remove('aos-animate');
                        setTimeout(() => {
                            element.classList.add('aos-animate');
                        }, 100);
                    });
                }
            });
        });
    }, 1500);
});

// Floating button pulse effect
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const floatingBtn = document.querySelector('.floating-book-btn .btn');
        
        if (floatingBtn) {
            setInterval(() => {
                floatingBtn.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    floatingBtn.style.transform = 'scale(1)';
                }, 200);
            }, 3000);
        }
    }, 1500);
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// ===== ACCESSIBILITY FEATURES =====

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            const closeBtn = modal.querySelector('.btn-close');
            if (closeBtn) closeBtn.click();
        });
    }
    
    // Enter key for buttons
    if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
        e.target.click();
    }
});

// Focus management
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        
        // Add focus styles
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--primary-color)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }, 1500);
});

// ===== ANALYTICS AND TRACKING =====

// Track user interactions
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Custom event logging
    console.log('Event tracked:', eventName, eventData);
}

// Track page views
document.addEventListener('DOMContentLoaded', function() {
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
});

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        trackEvent('button_click', {
            button_text: e.target.textContent.trim(),
            button_class: e.target.className
        });
    }
});

// ===== ERROR HANDLING =====

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Don't show notification for every error to avoid spam
});

// Promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Don't show notification for every error to avoid spam
});

// ===== UTILITY FUNCTIONS =====

// Format currency
function formatCurrency(amount, currency = '৳') {
    return `${currency}${amount.toLocaleString()}`;
}

// Format phone number
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{4})(\d{3})/, '$1-$2-$3');
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== EXPORT FUNCTIONS FOR GLOBAL USE =====
window.ZiiZiiIsland = {
    showNotification,
    trackEvent,
    formatCurrency,
    formatPhoneNumber,
    validateEmail,
    getCurrentTime,
    isInViewport,
    showBranchSelection
};

// ===== VIDEO MODAL LOGIC =====
document.addEventListener('DOMContentLoaded', function() {
    var videoModal = document.getElementById('videoModal');
    var youtubeVideo = document.getElementById('youtubeVideo');
    if (videoModal && youtubeVideo) {
        var videoSrc = youtubeVideo.src;
        videoModal.addEventListener('show.bs.modal', function () {
            // Optionally autoplay
            youtubeVideo.src = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
        });
        videoModal.addEventListener('hide.bs.modal', function () {
            youtubeVideo.src = '';
        });
        videoModal.addEventListener('hidden.bs.modal', function () {
            youtubeVideo.src = videoSrc;
        });
    }
});

// ===== GOOGLE SHEETS BOOKING SUBMISSION =====
document.addEventListener('DOMContentLoaded', function() {
  var bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var form = e.target;
      var data = {
        name: form.querySelector('[name="name"]').value,
        phone: form.querySelector('[name="phone"]').value,
        date: form.querySelector('[name="date"]').value,
        time: form.querySelector('[name="time"]').value,
        branch: form.querySelector('[name="branch"]').value,
        package: form.querySelector('[name="package"]').value,
        people: form.querySelector('[name="people"]').value,
        requests: form.querySelector('[name="requests"]').value
      };
      fetch('https://script.google.com/macros/s/AKfycbwo2Mr1h5tjbu8PSlNdK4_XbQrYdGn5Y9NBnF6BgYBKTzT0dSET8lJ6h33xGxbkp68lFw/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => {
        if (res.result === 'success') {
          alert('Booking confirmed!');
          form.reset();
        } else {
          alert('There was an error. Please try again.');
        }
      })
      .catch(() => alert('There was an error. Please try again.'));
    });
  }
}); 