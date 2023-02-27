import Header from './components/Header/Header.jsx';
import Pokemons from './components/Pokemons/Pokemons.jsx';
import './App.css';
import React, { useState } from 'react';

async function getPokemons() {
  const response = await fetch (
    "https://pokeapi.co/api/v2/pokemon/",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data.results;
}

function App() {

  let [pokemonsData, setPokemonsData] = useState([]); 
  if (!pokemonsData.length){
    getPokemons().then(pokemons => (setPokemonsData(pokemons)));
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Pokemons pokemonsData={pokemonsData}/>
      </main>
    </div>
  );
}

export default App;
