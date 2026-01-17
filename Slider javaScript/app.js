

function updateText() {
    document.getElementById('username').innerHTML = userName[index]
    document.getElementById('jobtitle').innerHTML = jobTitle[index]
    document.getElementById('jobdesp').innerHTML = jobDesp[index]
}

let userName = ['Faiz', 'Nehal Ali','Hamdan']
let jobTitle = ['DIGTAL MARKETING','WEB DEVELOPER', 'COPMUTER REPAIRE',]
let jobDesp = ['Digital marketing is all about reaching the right audience at the right time. I analyze market trends to understand customer behavior. Social media platforms help build a strong brand presence.'
, 'As a web developer, I focus on building clean and responsive interfaces. Every project begins with understanding the client’s vision clearly. HTML and CSS form the foundation of every layout I create.'
, 'Computer repairing requires both technical skill and patience. I begin every repair by diagnosing the exact issue. Hardware problems often need careful inspection.'
]

let index = 0;


function right(){
    index++
    if (index > 2) {
        index = 0;
       }
    updateText()
}

function left(){
    index--
    if ( index < 0 ) {
        index = 2;        
    }
    updateText()
}
