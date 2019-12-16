const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`



document.addEventListener("DOMContentLoaded", function() {
    getAllPokemonTeams()
} )


function getAllPokemonTeams(e) {
    // e.preventDefault()
     fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(AllTrainersPokemon => AllTrainersPokemon.forEach(trainer => renderTrainer(trainer)) )
    console.log(" in the get pokemons")
}


function renderTrainer(trainer) {

    let mainTag = document.querySelector("main")
    let pokemonCard = document.createElement("div")
    pokemonCard.setAttribute("data-id",trainer.id)
    pokemonCard.classList.add("card")

    let trainerName = document.createElement("p") 
    trainerName.innerText = trainer.name 
    let trainerButton = document.createElement("button")
    trainerButton.setAttribute("data-trainer-id" , trainer.id)
    let trainerMainList = document.createElement("ul")
    let individualTrainer = document.createElement("li")

    mainTag.appendChild(pokemonCard)
    pokemonCard.appendChild(trainerName)
    pokemonCard.appendChild(trainerButton) 

    console.log(trainer)


}

