function checkAddress(field){
    // alert("field; " + field)

    var emailInput = document.getElementById(field)
    var emailValue = emailInput.value;

    if (emailInput === "") {
        var errorElement = document.getElementById("error");
        errorElement.innerText = "Email is requried";
        alert("Email is requried");
    } else{
        alert("login Sucessfully as "+ emailValue)
    }
}