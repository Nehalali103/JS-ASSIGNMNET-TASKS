var email = document.getElementById("email")
var pass = document.getElementById("pass")

function sweetAlert2(message) {

    // console.log(message)
    Swal.fire({
        icon: `error`,
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}!</a>`
    });
}

function submitHandle(e) {
    // console.log("form submit horaha hai ...", e)
    //     // console.log("Form submit horaha ha")
    //     // e.javaScriptvoid(0)
    //     // e.window.location.reload()
    e.preventDefault()

    if (email.value == "") {
        console.log("Please Enter a Email!")
        return

    }

}





