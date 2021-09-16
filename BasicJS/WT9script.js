function getuser(){
    fetch('https://reqres.in/api/users').then(res => res.json()).then(anyvar => console.log(anyvar));
}

function addUser(){
    fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        BODY:JSON.stringify({
            name: 'mdp'

        })
    })
    .then(res => res.json())
    .then(anyvar => console.log(anyvar));
}

function getUserById(id){
    fetch('https://reqres.in/api/users/'+id).then(res => res.json()).then(anyvar => console.log(anyvar));
}

