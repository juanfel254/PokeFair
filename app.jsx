const root = document.getElementById("root");

function PokemonCard(props) {

	return (	
		<li className={`pokemon-card ${props.pokemonType}`}>
			<img className="pokemon-img" src={props.src} alt={`A picture of ${props.pokemonName}`} />
			<div className="pokemon-desc">
				<h3 className="pokemon-name">{props.pokemonName}</h3>
				<p className="pokemon-number">{props.pokemonNumber}</p>
			</div>
		</li>
	)
}

function Pokemons() {
	return (
		<ul className="cards-container">
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
			<PokemonCard 
				src="./imgs/001.png"
				pokemonName="Bulbasaur"
				pokemonNumber="001"
				pokemonType="grass"
			/>
		</ul>
	)
}

function Header(){
	return (
		<header className="header-container">
			<h1>PokeFair</h1>
			<p>Search for a Pokémon by name or using the National Pokédex number.</p>

		</header>
	)
}

function Home(){
	return(
		<div>
			<Header />
			<Pokemons />
		</div>
	)
}

ReactDOM.render(<Home />,root);