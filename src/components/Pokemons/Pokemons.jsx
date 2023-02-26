import PokemonCard from "./PokemonCard/PokemonCard.jsx";
import "./Pokemons.css";

export default function Pokemons({ pokemonsData } ) {

    let pokemons = undefined;
    if (pokemonsData.length) {
      pokemons = pokemonsData.map( pokemon => {
        return <PokemonCard 
          pokemonName={pokemon.name}
          key = {pokemon.url}
        />
      })
    }
    
    return (
      <ul className="cards-container">
        {pokemons}
      </ul>);
}