
function check(){
    let form = document.getElementById("form")
    let emalEl = document.getElementById('email').value
    let resultval = document.getElementById('result')
    const  regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(regex.test(emalEl)){
        resultval.innerHTML = 'Email Approved '
        form.classList.add('vaild')                        
    }
    else{
        resultval.innerHTML = 'Invaild Email Adderss' 
    }
}