function formValidation(e){
    e.preventDefault();

    var username = document.getElementById("username")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var confpassword = document.getElementById("confpassword")
    var checkbox1 = document.getElementById("checkbox1")
    var checkbox2 = document.getElementById("checkbox2")
    var national = document.getElementById("national")
    var gender1= document.getElementById("gender1")
    var gender2 = document.getElementById("gender2")
    var programselect=document.getElementById("programselect")
    var phonenumber=document.getElementById("phonenumber")
    var date= new Date(birthdate.value)

    if(username.value.length < 3){
        alert("Full name must be at least 3 characters!")
    }
    else if(!email.value.includes("@")|| !email.value.includes(".")){
        alert("Must Use Email!")
    }
    else if(!national.value){
        alert("Please Select Your Nationality!")
    }
    else if(password.value.length < 6){
        alert("Password must be at least 6 characters")
    }
    else if(!gender1.checked && !gender2.checked){
        alert("Choose your Gender!")
    }
    else if(!programselect.value){
        alert("Select Your Program!")
    }
    else if(phonenumber.value.length <5){
        alert("Phone number must be at least 5 number")
    }
    else if(!birthdate.value) {
        alert("Select Date Of Birth")
    }
    else if( password.value != confpassword.value){
        alert("Confirm Password Wrong!")
    }
    else if (!checkbox1.checked || !checkbox2.checked){
        alert("Check The Terms")
    }
    else{
        window.location.href = "registerext.html"
    }
}