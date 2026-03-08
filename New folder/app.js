
let signupEl = document.getElementById('signup')
let form = document.getElementById('form')
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

    if (password.value.length < 8) {
        sweetArlt('error', 'Oops...', 'Password at least 8 character!')
    }

    let userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        date: date.value,
        month: month.value,
        year: year.value,
        email: email.value,
        password: password.value,
    }

    for (let i = 0; i < gender.length; i++) {

        if (gender[i].checked) {
            userObj.gender = gender[i].value;
        }

    }

    let usersData = JSON.parse(localStorage.getItem('users')) || []

    usersData.push(userObj)

    localStorage.setItem('users', JSON.stringify(usersData))
    

    sweetArlt('success','Signup','Congratulations! signup successfully!')


    setTimeout(()=>{
        window.location.href = './login/index.html'
    },1500)

    form.reset()

}



signupEl.addEventListener('click', formHandler)
