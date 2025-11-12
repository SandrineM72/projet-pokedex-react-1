import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";




const pokemonList = [

  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },

];


function App() {
	const [pokemonName, setPokemonName] = useState("pikachu");

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("invalid pokemon name");

	}

  return (

    <div>
      <PokemonCard pokemon={pokemon} />

      <nav >

        {pokemonList.map((pokemon) =>
		<button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>

		<img src={pokemon.imgSrc}  style={{ width: '30px', height: '30px' }} />

		<p>{pokemon.name}</p>
		
		</button> )

		}

      </nav>

    </div>

  );
}

export default App;