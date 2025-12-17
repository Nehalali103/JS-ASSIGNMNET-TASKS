var email = document.getElementById("email")
var pass = document.getElementById("pass")

function sweetAlert2(message) {

    // console.log(message)
    Swal.fire({
        icon: `error`,
        title: `Oops...`,
        text: `Something went wrong!`,
        footer: `<a href="#">${message}</a>`
    });
}

function submitHandle(e) {
    // console.log("form submit horaha hai ...", e)
    //     // console.log("Form submit horaha ha")
    //     // e.javaScriptvoid(0)
    //     // e.window.location.reload()
    e.preventDefault()

    if (email.value == "") {
        sweetAlert2("Please Enter a Email!")
        return

    }

    if (pass.value == "") {
        sweetAlert2("Please Enter a Password!")
        return

    }

    if ( pass.value.length <= 7 ) {
        sweetAlert2('Please Enter at least 8 Characters.')
    }


    
    Swal.fire({
        title: "Congratulations!",
        icon: "success",
        draggable: true
    });

    // setTimeout( function() {
    //   window.location.href = ""
    // } )
}





