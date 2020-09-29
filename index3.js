let url = 'https://pokeapi.co/api/v2/pokemon/';

const bulbasaur = document.querySelector('bulbasaur')
const charmander = document.querySelector('charmander')
const squirtle = document.querySelector('squirtle')

fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('bulbasaur').src = URL.createObjectURL(blob);
});


fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png')
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('charmander').src = URL.createObjectURL(blob);
});

fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png')
.then(response => {
    console.log(response);
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
                console.log(bulbasaur);

       
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
            console.log(data);
            const charmander = {
                name: data.name,
                id: data.id,
                type: data.types.map( type => type.type.name) .join(', '),         
                image: data.sprites.front_default,
            };
                console.log(charmander)
        });
};

fetchPokemon2();



const fetchPokemon3 = () => {
    fetch(url + '7/')
        .then( response => {
            return response.json();
        })
        .then( data => {
            console.log(data);
            const squirtle = {
                name: data.name,
                id: data.id,
                type: data.types.map( type => type.type.name) .join(', '),         
                image: data.sprites.front_default,
            };
                console.log(squirtle)
            
        });
};

fetchPokemon3();