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
    name: "mew",
  },

    {
    name: "koraidon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png",
  },

];



function App() {
	const [pokemonName, setPokemonName] = useState("bulbasaur");

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("invalid pokemon name");
	}

  return (
	<div>
		<PokemonCard pokemon={pokemon}/>

		<button type="button" onClick={() => setPokemonName ("bulbasaur")}>
		bulbasaur
		</button>

		<button type="button" onClick={() => setPokemonName ("mew")}>
		mew
		</button>

		<button type="button" onClick={() => setPokemonName ("koraidon")}>
		koraidon
		</button>

	</div>

  );
}

export default App;