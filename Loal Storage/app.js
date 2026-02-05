
let users = {
    name: 'Nehal',
    company: 'xyz',
    dpart : 'Software',
}

localStorage.setItem( 'employ', JSON.stringify(users))

function removeData(){
    if ( localStorage.getItem('employ') != null) {
        console.log('Data is avaliable');
        localStorage.clear()
        
    }
    else console.log('Data is note avaliable')
}

