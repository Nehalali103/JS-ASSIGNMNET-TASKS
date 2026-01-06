// chp 83


// Q no 1

// function submitHandler(){
//     // console.log('ma chl raha ho')

//     let valCheck = document.getElementsByName('checkbox')
//     // console.log(valCheck)
    
//     for(let i = 0; i < valCheck.length; i++){
//         if(valCheck[i].checked){
//             console.log(valCheck[i].value)
//         }
//     }
// }


// Q no 2

function submit(){
    // console.log('ma chl la')
    var slOp = document.getElementsByTagName('option')
   for (let i = 0; i < slOp.length; i++){
    if (slOp[i].selected){
        console.log('option value ==>', slOp[i].value)
    }
   }


}














