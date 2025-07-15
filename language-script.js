document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('language-toggle-btn');
    const header = document.getElementById('main-header');
    const allTextElements = document.querySelectorAll('[data-lang-en]');
    const englishContent = document.querySelectorAll('.lang-en');
    const hindiContent = document.querySelectorAll('.lang-hi');

    let currentLanguage = 'en';

    toggleButton.addEventListener('click', () => {
        if (currentLanguage === 'en') {
            // Switch to Hindi
            header.classList.add('hindi');
            allTextElements.forEach(el => {
                el.textContent = el.getAttribute('data-lang-hi');
            });
            englishContent.forEach(el => el.style.display = 'none');
            hindiContent.forEach(el => el.style.display = 'block');
            toggleButton.textContent = 'Switch to English';
            currentLanguage = 'hi';
        } else {
            // Switch to English
            header.classList.remove('hindi');
            allTextElements.forEach(el => {
                el.textContent = el.getAttribute('data-lang-en');
            });
            englishContent.forEach(el => el.style.display = 'block');
            hindiContent.forEach(el => el.style.display = 'none');
            toggleButton.textContent = 'Switch to Hindi';
            currentLanguage = 'en';
        }
    });
});
