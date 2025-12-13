// var dkMdEl = document.getElementById(dkMdEl)

// function darkMood() {
    
// }





var emailEl = document.getElementById("email")
var passwordEl = document.getElementById("password")


function submitHandler(e){
    // console.log('bhai kise ho' , e)
    // e.javaScriptvoid(0);
    e.prevenDefault()

    if (emailEl.value == ""){
        console.log("Please Enter a Email!")
    }
}