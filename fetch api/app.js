
// console.log('js Run');

let apiCl = 'https://jsonplaceholder.typicode.com/'

let fetchUsersData = () => {
    // console.log(apiCl);
    fetch(apiCl)
        .then((succes) => {
            return succes.json()
        })
        .then((actualData) => {
            console.log('users', actualData);
        })
        .catch((err) => {
            console.log('err', err);
        })
}

fetchUsersData()