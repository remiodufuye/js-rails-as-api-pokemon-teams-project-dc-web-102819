const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`



        document.addEventListener("DOMContentLoaded", function() {
            getAllPokemonTeams()
        } )


        function getAllPokemonTeams(e) {
            fetch(TRAINERS_URL)
            .then(response => response.json())
            .then(AllTrainersPokemon => AllTrainersPokemon.forEach(trainer => renderPokemonTeams(trainer)) )
            console.log(" in the get pokemons")
        }
        
        
        function renderPokemonTeams(trainer) {
            
        

            let mainTag = document.querySelector("main")
            let pokemonCard = document.createElement("div")
            pokemonCard.setAttribute("data-id",trainer.id)
            pokemonCard.classList.add("card")

            let trainerName = document.createElement("p") 
            trainerName.innerText = trainer.name 
            let trainerButton = document.createElement("button")
            trainerButton.innerText = "Add Pokemon"
            trainerButton.addEventListener("click", () =>  addNewPokemon(trainer.id))
            trainerButton.setAttribute("data-trainer-id" , trainer.id)
            let pokemonMainList = document.createElement("ul")
        
            
            mainTag.appendChild(pokemonCard)
            pokemonCard.appendChild(trainerName)
            pokemonCard.appendChild(trainerButton) 
            pokemonCard.appendChild(pokemonMainList)


                trainer.pokemons.forEach(pokemon => {
                let individualPokemon = document.createElement("li")
                individualPokemon.innerHTML = pokemon.nickname + ' (' + pokemon.species + ')'
                pokemonMainList.appendChild(individualPokemon) 
                let pokemonIndButton =  document.createElement("button")
                pokemonIndButton.setAttribute("data-pokemon-id", pokemon.id)
                pokemonIndButton.classList.add("release")
                pokemonIndButton.innerText = "Release" 
                individualPokemon.appendChild(pokemonIndButton) 
                pokemonIndButton.addEventListener("click" , releasePokemon)

                }
            
            ) 


        }

        function releasePokemon() {
            console.log("You have Been Released!!")
        } 

        function addNewPokemon(trainerID) {
            console.log(` Trainer ID IS : ${trainerID}`)
            const configOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": "application/json"
                }, 
                body: JSON.stringify({trainer_id: trainerID})  
            }
            
            fetch(POKEMONS_URL, configOptions)
            .then(response => response.json())
            .then(data => renderNewPokemon(data))


        }

        function renderNewPokemon(data) {
           let pokemnlist = document.querySelector("ul")
           let newPokemon = document.createElement("li")
           newPokemon.innerHTML = data.nickname + ' (' + data.species + ')'
           pokemnlist.appendChild(newPokemon) 

        }
            
      