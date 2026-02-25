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

//btn minus or plur quantity in cart

document.addEventListener('click', function(e){
    const btnMinus = e.target.closest(".minus.quantity");
    const btnPlus = e.target.closest(".plus-quantity");


    if(!btnMinus && !btnPlus) return;

    const boxQuantityProduct = e.target.closest(".group-quantity-prod");
    const input = boxQuantityProduct.querySelector(".input-qty-product");

    let currentValue = parseInt(input.value) || 1;

    if(btnPlus){
        input.value = currentValue +  1;
    }

    if(btnMinus){
            input.value = currentValue -1;

        if(currentValue > 1){
            input.value = currentValue -1;
        }
    }

})