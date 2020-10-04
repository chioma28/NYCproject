function adminlogin(){
    email = document.getElementById("email").value 
    password = document.getElementById("password").value

    if(email === "admin@nyc.com" && password === "admin1234" ){
        alert("login successful")
        location.href = "#"
    }
    else{
        alert("Incorrect email or password")
    }
}