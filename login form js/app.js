// var email = document.getElementById("email").innerHTML
// var pass = document.getElementById("pass").innerHTML

// function sweetAlert2(message) {

//     // console.log(message)
//     Swal.fire({
//         icon: `error`,
//         title: "Oops...",
//         text: "Something went wrong!",
//         footer: `<a href="#">${message}!</a>`
//     });
// }

// function submitHandle(e) {
//     // console.log("form submit horaha hai ...", e)
//     //     // console.log("Form submit horaha ha")
//     //     // e.javaScriptvoid(0)
//     //     // e.window.location.reload()
//     e.preventDefault()

//     if (email.value.trim() == "") {
//         sweetAlert2("Please Enter a Email!")
//         return

//     }

// }





var para = document.getElementById('para')
var btn = document.getElementById('btn')

// var lgParaText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, ab a mollitia officia delectus minus qui
// repellendus nihil id. Quisquam alias voluptatem quo sed deleniti in quas eius quos, perspiciatis, accusamus
// nemo. Non, omnis! Hic vero a nesciunt totam nobis est, aliquid perspiciatis omnis non dicta quam ipsum laborum
// accusamus!`;



// function lgPara() {
//     if (btnEl.toLowerCase() == 'see more') {
//         paraEl = lgParaText
//         btnEl = 'see less'
//     }   
//     else{
    //         btn = 'see more'
    //         paraEl = lgParaText.slice(0,30)
    //     }
    //     // console.log(paraEl)
    
    // }
    
//     function lgPara() {
        
//         paraEl = lgParaText

//     if (btnEl == 'see more') {
//         paraEl.innerHTML = lgParaText;
//         btnEl.innerHTML = "see less";
//     }
// }




function seeMore(e){
    para.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim quae facilis! Magni?Lorem ipsum dolor sit amet consectetur. Nobis ipsum tempora at. Quos, minima ab.'
    btn.innerText = 'see less'
}

function seeLess(e) {
    para.innerText = 'Lorem, opsum dolor sit amet consectetur adipisicng elit.'
    btn.innerText = 'see less'
}

function lgPara(){
    if (btn.innerText == "See More"){
        return seeMore(this);

    }else{
        return lessMore (this)
    }
}f