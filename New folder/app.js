
let signupEl = document.getElementById('signup')

let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')
let email = document.getElementById('email')
let password = document.getElementById('password')
let gender = document.getElementsByName('gender')


function sweetArlt(error, title, text) {
    Swal.fire({
        icon: error,
        title: title,
        text: text,
    });
}

function formHandler(event) {
    event.preventDefault()

    // console.log('xyz');

    if (
        firstName.value.trim() == "" ||
        lastName.value.trim() == '' ||
        date.value.trim() == '' ||
        month.value.trim() == '' ||
        year.value.trim() == '' ||
        email.value.trim() == '' ||
        password.value.trim() == '' 
    ) {
        return sweetArlt('error', 'Oops...', 'Please Enter all fields')
        // console.log('abc');        
    }

    if(password.value.length < 8){
        sweetArlt('error','Oops...','Password at least 8 character!')
    }

}



signupEl.addEventListener('click', formHandler)
