let url = 'https://pokeapi.co/api/v2/pokemon/';

const bulbasaur = document.querySelector('bulbasaur')
const charmander = document.querySelector('charmander')
const squirtle = document.querySelector('squirtle')
let name = document.querySelector(".name");   //!
let id = document.querySelector(".id");
let type = document.querySelector(".type");
let name2 = document.querySelector(".name2");  
let id2 = document.querySelector(".id2");
let type2 = document.querySelector(".type2");

fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
.then(response => {
    //console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('bulbasaur').src = URL.createObjectURL(blob);
});


fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png')
.then(response => {
    //console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('charmander').src = URL.createObjectURL(blob);
});

fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png')
.then(response => {
    //console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('squirtle').src = URL.createObjectURL(blob);
});

const fetchPokemon = () => {
    fetch(url + '1/')
        .then( response => {
            return response.json();
        })
        .then( data => {
            console.log(data);
            let bulbasaur = {    //!
                name: data.name,
                id: data.id,
                type: data.types.map( type => type.type.name) .join(', '),         
                image: data.sprites.front_default,
            };
              console.log(bulbasaur)

            let newName = data.name;
            newName = newName.charAt(0).toUpperCase() + newName.slice(1);
            name.innerText = newName;

            let newId = data.id;
            id.innerHTML = newId;

            let newType = data.types.map( type => type.type.name) .join(', ');
            newType = newType.charAt(0).toUpperCase() + newType.slice(1);

            //newType = newType.charAt(7).toUpperCase() + newType.slice(8);
            type.innerText = newType;
       
        })
};

fetchPokemon();

/* function displayInfo(data) {
    console.log('DisplayInfo: ', data);

    let bulbs = data.forEach(r => {
        console.log(r);
        let bulb = document.createElement('li');
        bulb.innerText = r.name
    })
} */

const fetchPokemon2 = () => {
    fetch(url + '4/')
        .then( response => {
            return response.json();
        })
        .then( data => {
            //console.log(data);
            const charmander = {
                name: data.name,
                id: data.id,
                type: data.types.map( type => type.type.name) .join(', '),         
                image: data.sprites.front_default,
            };
                console.log(charmander)

                // let newName = data.name;
                // newName = newName.charAt(0).toUpperCase() + newName.slice(1);
                // name.innerText = newName;
    
                // let newId = data.id;
                // id.innerHTML = newId;

              
        });
};

fetchPokemon2();


const fetchPokemon3 = () => {
    fetch(url + '7/')
        .then( response => {
            return response.json();
        })
        .then( data => {
            //console.log(data);
            const squirtle = {
                name: data.name,
                id: data.id,
                type: data.types.map( type => type.type.name) .join(', '),         
                image: data.sprites.front_default,
            };
                // var str = JSON.stringify(getSquirtle, null, 2);
                // var mySquirtle = squirtle.stringify(json);
                // document.getElementById('div3').innerHTML = mySquirtle;
                console.log(squirtle);
                // appendData(squirtle);
        });
};

fetchPokemon3();

/*
async function getSquirtle() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.name);
    console.log(data.id);
    console.log(data.type);
}
*/