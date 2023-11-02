const btn = document.getElementById('cart');
const cart = document.getElementById('cart-page');
const close = document.getElementById('close');

btn.addEventListener('click', ()=> {
    if (cart.style.display == 'none'){
        cart.style.display = 'block'
    }else{
        cart.style.display = 'none'
    }
})

