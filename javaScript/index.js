// Login

document.getElementById('login-button').addEventListener('click', function(){
    const emailFeild = document.getElementById('input-email');
    const email = emailFeild.value;
    
    const passFeild = document.getElementById('input-password');
    const password = passFeild.value;

    if(email === 'shakilahamed@gmail.com' && password === 'Sakil10'){
        window.location.href='bank.html'
    }
    else{
        alert('Invalid Password');
    }
})

