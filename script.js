const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonInfo = document.querySelector(".pokemon__info");

const pokemonImage = document.querySelector(".pokemon__image");
const form = document.querySelector(".poke__form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let procurarPokemon = 1;

const fetchPokemon = async (pokemon) => {
 const APIPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
 if (APIPokemon.status === 200){
    const data = await APIPokemon.json();
    return data;
 }

 
}


const mostrarnatela = async (pokemon)  =>{
    const data = await fetchPokemon (pokemon);
    if (data){
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonInfo.innerHTML = data['types']['0']['type']['name'];
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    procurarPokemon = data.id;
    }
    else {
        pokemonImage.style.display = 'none';
        pokemonNumber.innerHTML = "pokemon"
        pokemonName.innerHTML = 'não encontrado:(';
        input.value = '';
    }
}

form.addEventListener('submit', (event) =>{
 
 event.preventDefault();

 mostrarnatela(input.value.toLowerCase());
 
});

buttonPrev.addEventListener('click', () =>{
 
    procurarPokemon -= 1;
    mostrarnatela(procurarPokemon);
    
});
   
buttonNext.addEventListener('click', () =>{
 
  procurarPokemon += 1;
  mostrarnatela(procurarPokemon);
});
   



mostrarnatela('1')





