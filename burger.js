const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.header-menu-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

