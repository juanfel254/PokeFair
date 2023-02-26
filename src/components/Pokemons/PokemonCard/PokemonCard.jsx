import "./PokemonCard.css";
import "./PokemonTypes.css";

export default function PokemonCard({ src, pokemonName, pokemonNumber, pokemonType}) {
	return (	
		<li className={`pokemon-card ${pokemonType}`}>
			<img className="pokemon-img" src={src} alt={`${pokemonName}`} />
			<div className="pokemon-desc">
				<h3 className="pokemon-name">{pokemonName}</h3>
				<p className="pokemon-number">{pokemonNumber}</p>
			</div>
		</li>
	)
}