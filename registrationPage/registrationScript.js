var form = document.getElementsByName('form')
var fullname = document.getElementById('fullname')
var username = document.getElementById('username')
var email = document.getElementById('email')
var phonenumber = document.getElementById('phonenumber')
var password = document.getElementById('password')
var confirmpassword = document.getElementById('confirmpassword')
var agree = document.getElementById('agree')

function checkAlphaNum(password){ // Function to make password contain both alphabets and numeric
    var isNum = false
    var isAlpha = false
    for (let i = 0; i<password.length;i++){
        if(isNaN(password[i])){
            isAlpha = true
        } else {
            isNum = true
        }

        if(isAlpha && isNum){
            return true;
        }
    }
}

function checkInputs(){
    if (fullname.value == ''){
        alert('Full Name must be filled')
    } else if (username.value == '' || username.value.length < 5){
        alert('Username length must be more than 4 characters!')
    } else if (email.value == '' || !email.value.endsWith('@gmail.com')){
        alert('Email Field must end with "@gmail.com!"')
    } else if (phonenumber.value.length != 12){
        alert('Phone number must be 12 digits long')
    } else if (password.value == '' || password.value.length < 8){
        alert('Password must be at least 8 characters long')
    } else if (!checkAlphaNum(password.value)){
        alert('Password must be in alphanumeric')
    } else if (confirmpassword.value != password.value){
        alert('Confirm password is not the same as the password given')
    } else if (!agree.checked){
        alert('Please tick the agreement checkbox!')
    } else {
        confirm('Success! Your registration is complete!')
        window.location.href = "../loginPage/loginPage.html"
    }
}