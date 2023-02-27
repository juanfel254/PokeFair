import PokemonCard from "./PokemonCard/PokemonCard.jsx";
import "./Pokemons.css";

export default function Pokemons({ pokemonsData } ) {

    let pokemons = undefined;
    if (pokemonsData.length) {
      pokemons = pokemonsData.map( (pokemon, index) => {
        return <PokemonCard 
          pokemonName = {pokemon.name}
          pokemonNumber = {index+1} 
          pokemonApi = {pokemon.url}
          key = {index+1}
        />
      })
    }
    
    return (
      <ul className="cards-container">
        {pokemons}
      </ul>);
}