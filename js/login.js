document.getElementById('login-button').addEventListener('click',function(){
    let emailField = document.getElementById('your-email');
    let email = emailField.value;
    
    let passwordField = document.getElementById('your-pass');
    let password = passwordField.value;
    if(email === 'noman@gmail.com' && password === 'thequick'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Tui password vule geli kivave. tui taka pabi nah!!')
    }
})