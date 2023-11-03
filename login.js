function addData(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
}

function checkData(){
    let enterEmail = document.getElementById('sign-email').value;
    let enterPassword = document.getElementById('sign-password').value;


    let getEmail = localStorage.getItem('userEmail');
    let getpassword = localStorage.getItem('userPassword');

    if (enterEmail === getEmail && enterPassword === getpassword) {
        // alert('Login successful');
        // window.location.assign('index.html');
        window.location.href = 'https://www.semrush.com/blog/javascript-redirect';
        console.log('Success')
    }
    else {
        alert('Wrong email or password');
    }
}