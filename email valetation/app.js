// let resultval = document.getElementById('result')
// resultval.innerHTML = 'Email Approved '
// let form = document.getElementById('form')
// resultval.innerHTML = 'Invaild Email Adderss' 

// function check(){
//     let form = document.getElementById("form")
//     let emalEl = document.getElementById('email').value
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/


//     if (regex.test(emalEl) ) {
//         form.classList.add('vaild')                        
//         form.classList.remove('invaild')                        
//     }
//     else{
//         form.classList.add('invaild')                        
//         form.classList.remove('vaild')                        
//     }
//     if(emalEl == ''){
//         form.classList.remove('vaild')                        
//         form.classList.remove('invaild')                        
//     }
// }



function inp(){
    let emailEl = document.getElementById('email').value
    let d = document.getElementById('indication')
    let form = document.getElementById('form')
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/

    if( regex.test(emailEl) ){
        form.classList.add('valid')
        form.classList.remove('invalid')
    }
    else{
        form.classList.remove('valid')
        form.classList.add('invalid')
    }
    if(emailEl == ''){
        form.classList.remove('invalid')
        form.classList.remove('valid')
    }
    
}
















