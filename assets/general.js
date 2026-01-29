const btnBurgerMenu = document.querySelector('.burger-menu');
const menuNav = document.querySelector('nav')

btnBurgerMenu.addEventListener('click', ()=>{
    menuNav.classList.toggle('show-nav');
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Ajusta al breakpoint de desktop
        menuNav.classList.remove('show-nav'); // Siempre cerrar en desktop
    }
});
