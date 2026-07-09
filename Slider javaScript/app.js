let userName = document.getElementById('username')
let jobtitle = document.getElementById('jobtitle')
let jobdesp = document.getElementById('jobdesp')
let index = 0;


let userObj = [
    {
        name: 'Fazi',
        jobTitle: 'DIGTAL MARKETKING',
        jobDes: 'Digital marketing is all about reaching the right audience at the right time. I analyze market trends to understand customer behavior. Social media platforms help build a strong brand presence.'
    }
    ,
    {
        name: 'Nehal Ali',
        jobTitle: 'WEB DEVELOPER',
        jobDes: 'As a web developer, I focus on building clean and responsive interfaces. Every project begins with understanding the client’s vision clearly. HTML and CSS form the foundation of every layout I create.'
    }
    ,
    {
        name: 'Hamdan',
        jobTitle: 'COMPUTER',
        jobDes: 'Computer repairing requires both technical skill and patience. I begin every repair by diagnosing the exact issue. Hardware problems often need careful inspection.'
    }
]

function loadApp(index) {
    userName.innerHTML = userObj[index].name;
    jobtitle.innerHTML = userObj[index].jobTitle;
    jobdesp.innerHTML = userObj[index].jobDes;
}

loadApp(index)

function right() {
    if (index < userObj.length - 1) {
        index++
        loadApp(index)
    } else {
        index = 0;
        loadApp(index)
    }

}

function left() {
    if (index > 0) {
        index--
        loadApp(index)

    } else {
        index = userObj.length - 1
        loadApp(index)

    }

}







// function updateText() {
//     document.getElementById('username').innerHTML = userName[index]
//     document.getElementById('jobtitle').innerHTML = jobTitle[index]
//     document.getElementById('jobdesp').innerHTML = jobDesp[index]
// }
// let userName = ['Faiz', 'Nehal Ali','Hamdan']
// let jobTitle = ['DIGTAL MARKETING','WEB DEVELOPER', 'COPMUTER REPAIRE',]
// let jobDesp = ['Digital marketing is all about reaching the right audience at the right time. I analyze market trends to understand customer behavior. Social media platforms help build a strong brand presence.'
// , 'As a web developer, I focus on building clean and responsive interfaces. Every project begins with understanding the client’s vision clearly. HTML and CSS form the foundation of every layout I create.'
// , 'Computer repairing requires both technical skill and patience. I begin every repair by diagnosing the exact issue. Hardware problems often need careful inspection.'
// ]
// let index = 0;
// function right(){
//     index++
//     if (index > 2) {
//         index = 0;
//        }
//     updateText()
// }
// function left(){
//     index--
//     if ( index < 0 ) {
//         index = 2;        
//     }
//     updateText()
// }


// let arryData = [
//     {
//         name: 'Fazi',
//         jobTitle: 'DIGTAL MARKETKING',
//         jobDes: 'Digital marketing is all about reaching the right audience at the right time. I analyze market trends to understand customer behavior. Social media platforms help build a strong brand presence.'
//     }
//     ,
//     {
//         name: 'Nehal Ali',
//         jobTitle: 'WEB DEVELOPER',
//         jobDes: 'As a web developer, I focus on building clean and responsive interfaces. Every project begins with understanding the client’s vision clearly. HTML and CSS form the foundation of every layout I create.'
//     }
//     ,
//     {
//         name: 'Hamdan',
//         jobTitle: 'COMPUTER',
//         jobDes: 'Computer repairing requires both technical skill and patience. I begin every repair by diagnosing the exact issue. Hardware problems often need careful inspection.'
//     }
// ]

// function updateText(){
//     document.getElementById('username').innerHTML = arryData[index].name
//     document.getElementById('jobtitle').innerHTML = arryData[index].jobTitle
//     document.getElementById('jobdesp').innerHTML = arryData[index].jobDes
// }

// let index = 0;

// function right(){
//     index++
//     if( index > arryData.length -1 ){
//         index = 0
//     }
//     updateText()
// }


// function left(){
//     index--
//     if( index < 0 ){
//         index = 2
//     }
//     updateText()
// }


