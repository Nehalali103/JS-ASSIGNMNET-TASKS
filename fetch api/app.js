
// console.log('js Run');

let apiCl1 = 'https://jsonplaceholder.typicode.com/'
let apiCl2 = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'

let fetchUsersData = async () => {
    // console.log(apiCl);
    // fetch(apiCl)
    //     .then((succes) => {
    //         return succes.json()
    //     })
    //     .then((actualData) => {
    //         console.log('users', actualData);
    //     })
    //     .catch((err) => {
    //         console.log('err', err);
    //     })

    fetch(apiCl2)
        .then((succes) => {
            console.log(succes);
            return succes.json()
        })
        .then((actualData) => {
            console.log(actualData)
        })
        .catch()
    console.log(apiCl2)

    // let apiRes = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
    // // console.log(apiRes);
    // let result = await apiRes.json()
    // console.log(result);


}

fetchUsersData()