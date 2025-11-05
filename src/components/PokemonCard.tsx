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
    name: "Koraidon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png",
  },

];


function PokemonCard() {
    const pokemon = pokemonList[1];

  return (

    <figure>
        {pokemon.imgSrc !== undefined ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
            <p><i>image manquante</i></p>
        )}
    
        <figcaption>
            <p>{pokemon.name}</p>
        </figcaption>
    </figure>
  );
}

export default PokemonCard;



// Site pokemons : https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/other/official-artwork