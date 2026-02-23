
let arr = ['karachi', 'lahore', 'islamabad']


arr.forEach(function (elemt, i) {
   console.log(elemt);

})

let result = arr.map(function(elemt){
   return `${elemt} Pakistan `
})


console.log(result);

let arr2 = [{
   name:'nehal',
   age :20,
   course: "web"
},
{
   name:'Ali',
   age :22,
   course: "cit"
},
{
   name:'subhan',
   age :25,
   course: "dit"
}]


let cheek = arr2.filter(function(elemt){
   return elemt.age > 20 && elemt.age < '25'
})

console.log(cheek);


let student = [{name:'jawwad',fee: 6543},{name:'Atif',fee: 9543}]

let cheek1 = student.reduce(function(a,v,i){
   return a + v.fee
},0)

console.log(cheek1);
