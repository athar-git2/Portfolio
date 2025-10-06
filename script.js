// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    // Exit if menu elements are missing
    if (!menuButton || !mobileMenu) return;

    // Toggle menu visibility and icons
    const toggleMenu = () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isOpen);
        mobileMenu.classList.toggle('hidden');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    };

    // Handle menu button click
    menuButton.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            if (menuButton.getAttribute('aria-expanded') === 'true') {
                toggleMenu();
            }
        });
    });
});
