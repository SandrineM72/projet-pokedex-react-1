function PokemonCard({pokemon}) {

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