import PokemonCard from "./PokemonCard/PokemonCard.jsx";
import "./Pokemons.css";

export default function Pokemons() {
	return (
		<ul className="cards-container">
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
		</ul>
	)
}
