const btn = document.getElementById('cart');
const cart = document.getElementById('cart-page');
const close = document.getElementById('close');
const books = document.getElementById('books');
const booksTable = document.getElementById('books-table');
const booksBar = document.getElementById('books-bar');
const booksContent = document.getElementById('books-content');
const booksWraper = document.getElementById('books-wrapper');
const booksForm = document.getElementById('books-form');
const buton = document.getElementById('add-books-form-btn');
const isbn = document.getElementById('isbn');
const title = document.getElementById('title');
const descr = document.getElementById('description');
const submit = document.getElementById('btn-form-submit');

btn.addEventListener('click', ()=> {
        cart.style.display = 'block';
        close.addEventListener('click', ()=> {
            cart.style.display = 'none';
        })
})

buton.addEventListener('click', ()=> {
    if (booksForm.style.display == 'none'){
        booksForm.style.display = 'block'
    }else{
        booksForm.style.display = 'none'
    }
})



// submit.addEventListener('click', (event)=> {
        
//     event.preventDefault();
//     if (title.value.trim().length == 0 || isbn.value.trim().length == 0) {
//         console.log('title.value')
//         // error.innerText = "Note cannot be empty";
//         // console.error("Note cannot be empty");
//         // return;
//     }
// })

// addTask();


const aff = document.getElementById('affiche');

// aff.addEventListener('click', ()=> {
//     if (booksForm.style.display == 'none'){
//         booksForm.style.display = 'block';
//         books.style.display = 'none';
//     }else{
//         booksForm.style.display = 'none'
//         books.style.display = 'block'
//     }
// })



// RegEx

const Regex = {
    name : /^[a-zA-Z\s]{3,20}$/,
    number: /^[0-9]{16}$/
}

let putPays = document.querySelectorAll('#putPay');
const payBtn = document.getElementById('payBtn');
const nameError = document.getElementById('nameError');
const cardError = document.getElementById('cardError');

putPays.forEach(putPay => {
    payBtn.addEventListener('click', ()=> {
        console.log('adding');
        if (putPay.value === "") {
            nameError.textContent = 'Name is required';
        }
        else if (Regex.name.test(putPay.value)) {
            nameError.textContent = 'Invalid name';
        }
        else if (Regex.number.test(putPay.value)) {
            cardError.textContent = 'Invalid card number';
        }
        else {
            nameError.textContent = '';
            cardError.textContent = '';
        }
    })
})