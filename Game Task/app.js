var left = 0;
function abc() {
    // console.log(event.keyCode)
    var charcter = document.getElementById('charcter')
    if (event.keyCode === 68 && left < 1100) {
        left = left + 10;
        charcter.style.left = left + 'px'
        charcter.src = 'iron-walk.gif'
    }

    if (event.keyCode === 65 && left > 1) {
        left = left - 10;
        charcter.style.left = left + 'px'
        charcter.src = 'iron-walk.gif'
    }
    if (event.keyCode === 32) {
        charcter.style.width = '400px'
        charcter.style.height = '400px'
        charcter.src = 'iron-gem.gif'
        setTimeout(function () {
            charcter.src = 'iron-man-stance.gif'
            charcter.style.width = '250px'
            charcter.style.height = '250px'

        }, 2500)
    }

}

window.onkeydown = abc;