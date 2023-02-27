import { useState } from "react";
import "./PokemonCard.css";
import "./PokemonTypes.css";

export default function PokemonCard({ pokemonName, pokemonNumber, pokemonApi }) {

  async function getPokemonInfo() {
    const response = await fetch (
      pokemonApi,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  }

  let [pokemonType, setPokemonType] = useState(undefined);
  
  if (pokemonType === undefined){
    getPokemonInfo().then(
      info => {
        let type = info.types[0].type.name;
        setPokemonType(type);
      });
  }
  
  return (	
		<li className={`pokemon-card ${pokemonType}`}>
			<img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`} alt={`${pokemonName}`} />
			<div className="pokemon-desc">
				<h3 className="pokemon-name">{pokemonName}</h3>
        <p className="pokemon-type">{pokemonType}</p>
				<p className="pokemon-number">{pokemonNumber}</p>
			</div>
		</li>
	)
}