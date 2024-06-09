var username = document.getElementById('username')
var password = document.getElementById('password')

function checkInputs(){
    if (username.value == ''){
        alert("Please fill in the username field")
    } else if (password.value == ''){
        alert("Please fill in the password")
    } else {
        window.location.href = "../homePage/homePage.html"
    }
}