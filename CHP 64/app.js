
// var pEl = document.getElementsByTagName('p')

// console.log(pEl.length)



// CHP 67 se

var divEl = document.getElementById('cantainer')

var h2El = document.createElement('h2')
var h2Text = document.createTextNode('Element using JS')

h2El.appendChild(h2Text)
// console.log(h2El)

divEl.appendChild(h2El)




var inputTodoo = document.getElementById('to-doo')
var ulEl = document.getElementById('ul')

function addItems(){
    // console.log(inputTodoo.value)
    
    var li = document.createElement('li')
    var liContent = document.createTextNode(inputTodoo.value)
    
    li.appendChild(liContent)
    ulEl.appendChild(li)
    inputTodoo.value = "";
    inputTodoo.focus()





}