// console.log("js run");

// // Closuer

// function normal() {
//     let username = 'Nehal ALi'

//     function displayName() {
//         console.log(username);
//     }
//     return displayName
// }

// let result = normal()

// result()


// Curring 


function normal(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}


let firstfn = normal(2)

let secondfn = firstfn(4)

secondfn(2)

// function merafn(to) {
//      return function (sub) {
//        return function (body){
//         console.log(`Sending Email to: ${to} with Subject: ${sub} and Body:${body}
                    
//                     Regards, SMIT
//                     `)
//        }        
//     }

// }

// let sub = merafn('nehalcoder@gmail.com')

// console.log(sub('Application For Frontend Developer Position'))

// to => 'nehalcoder@gmail.com'
// sub => 'Application For Frontend Developer Position'
// body => "Hello! I'm Nehal ALi a full stack developer with 2+ years of experience in web development."












