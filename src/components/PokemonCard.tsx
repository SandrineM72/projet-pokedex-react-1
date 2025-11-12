interface PokemonCard {
    name: string;
    imgSrc?: string;
}


function PokemonCard({pokemon}: {pokemon: PokemonCard}) {

  return (

    <figure>
        <h3>Clique pour afficher ton pokémon préféré !</h3>
        {pokemon.imgSrc !== undefined ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
            <p><i>image manquante</i></p>
        )}
    
        <figcaption>
            <h1>{pokemon.name}</h1>
        </figcaption>
    </figure>
  );
}

export default PokemonCard;



// Site pokemons : https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/other/official-artwork


/* solution alternative si besoin, avec création d'une interface spécifique pour ce composant :

interface PokemonCardProps {
    pokemon: {
        name: string;
        imgSrc?: string;
    }
}

function PokemonCard({pokemon}: PokemonCardProps) {...} */
