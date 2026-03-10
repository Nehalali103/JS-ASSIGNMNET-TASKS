

function sweetArlt(error, title, text) {
    Swal.fire({
        icon: error,
        title: title,
        text: text,
    });
}


let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.querySelector('.form')
let isUers = false;

let users = JSON.parse(localStorage.getItem('users')) || []

// console.log(users);


function formHandler() {
    event.preventDefault()
    // console.log('abc');

    if (
        email.value.trim() == '' ||
        password.value.trim() == ''
    ) {
        return sweetArlt('error', 'Oops...', 'Please Enter all fields')
    }

    if (email.value.trim() && password.value.trim()) {
        // console.log(email.value);
        // console.log(password.value);

        for (let i = 0; i < users.length; i++) {
            // console.log(users[i]);
            if (users[i].email == email.value && users[i].password == password.value) {
                console.log('if');
                isUers = true;
                break;
            }
            else {
                console.log('aaa');
                
              return  sweetArlt('error', 'User Not Found!', `it's seem like you hsve'nt register yet!`)
            }
                      
        }
        
        // user.forEach((users) => console.log(users))

        
        if (users) {
            sweetArlt('success', 'Login', 'Login Successfully!')


            setTimeout(() => {
                window.location.href = '../index.html'
            }, 1500)

            form.reset()
        }

    }


}




form.addEventListener('submit', formHandler)