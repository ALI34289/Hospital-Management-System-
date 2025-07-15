document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggleButton.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Language Toggle
    const languageToggleButton = document.getElementById('language-toggle');
    let currentLanguage = 'en';

    languageToggleButton.addEventListener('click', () => {
        if (currentLanguage === 'en') {
            currentLanguage = 'hi';
            languageToggleButton.textContent = 'EN';
        } else {
            currentLanguage = 'en';
            languageToggleButton.textContent = 'HI';
        }
        updateText();
    });

    function updateText() {
        document.querySelectorAll('[data-lang-en]').forEach(el => {
            el.innerText = el.getAttribute(`data-lang-${currentLanguage}`);
        });
    }

    // Mobile Menu
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Appointment Form
    const appointmentForm = document.getElementById('appointment-form');
    const modal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelector('.close-button');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                modal.style.display = 'flex';
            } else {
                alert('Please fill out all required fields.');
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal if user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
