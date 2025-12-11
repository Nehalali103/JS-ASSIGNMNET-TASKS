

var h1El = document.getElementById('h1')
var bulbEl = document.getElementById('bulb')
var btnEl = document.getElementById('btn')
var isOpen = false; 

function userGreek(){
    
    if (isOpen) {
        isOpen = false
        bulbEl.src = "./3-bulb-png-image.png"
        h1El.innerText = "Bulb Off"
        btnEl.innerText = "Bulb On"
    }
    else{
        isOpen = true
        bulbEl.src = "./Light-Bulb-isolated-on-transparent-background-PNG.png"
        h1El.innerText = "Bulb On"
        btnEl.innerText = "Bulb Off"
    }

    console.log(isOpen)
}

// userGreek()