document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const ctaButtons = document.querySelector('.cta-buttons');

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            ctaButtons.classList.toggle('active');
        });
    }
});
