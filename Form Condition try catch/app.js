// var usersEl = document.getElementById('usersName')
// var emailEl = document.getElementById('email')
// var passEl = document.getElementById('pass')
// var erroEl = document.getElementById('erro')

// var obj = {
//     uName: 'john',
//     uEmail: 'john@gmail.com',
//     upass: 'abc123'
// }

// function submit() {
//     // console.log('funtion run')

//     if (usersEl.value != obj.uName) {
//         erroEl.innerHTML = 'Usersname reqiured'
//     }

//     else if (emailEl.value != obj.uEmail) {
//         erroEl.innerHTML = 'Email reqiured'
//     }
//     if (passEl.value != obj.upass) {
//         erroEl.innerHTML = 'Password reqiured'
//     }

//     else {
//         erroEl.innerHTML = "Date Submit SuccesFully"
//     }
// }





var userNameEl = document.getElementById('usersName')
var emailEl = document.getElementById('email')
var passEl = document.getElementById('pass')
var erroEl = document.getElementById('erro')

var obj = {
    uName : 'johon',
    uEmail : 'johon@gmail.com',
    uPass : 'abc123'
}

// function submit(){
//     if (userNameEl.value != obj.uName ){
//         erroEl.innerHTML = 'Usersname requried'
//     }
    
//     else if (emailEl.value != obj.uEmail ){
//         erroEl.innerHTML = 'Email requried'
//     }

//     else if (passEl.value != obj.uPass ){
//         erroEl.innerHTML = 'Password requried'
//     }

//     else{
//         erroEl.innerHTML = 'Data Submit SuccesFully'
//     }    
// }




function submit(){
    try {
        if ( userNameEl.value != obj.uName ){
            throw 'Usersname requried' 
        }

        else if ( emailEl.value != obj.uEmail ){
            throw 'Email requried'
        }

        else if ( passEl.value != obj.uPass ){
                throw 'Password requried' 
            }
        
        else{
            erroEl.innerHTML = "Data submit SuccesFully"
        }    
        }

    catch (error) {
        erroEl.innerHTML = error        
    }
}






















