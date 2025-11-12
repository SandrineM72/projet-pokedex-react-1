import { useState } from "react";

interface PokemonCard {
    name: string;
    imgSrc?: string;
}


function PokemonCard({pokemon}: {pokemon: PokemonCard}) {

    function randomColor(currentColor?: string) {
        const colors = ["green", "blue", "pink", "salmon"];
        const availableColors = colors.filter(color => color !== currentColor);
        return availableColors [Math.floor(Math.random() * availableColors.length)];
    }

    const [bgColor, setBgColor] = useState(randomColor());

    function changeColor() {
        setBgColor(prevColor => randomColor(prevColor));
    }

  return (

    <figure>
        <h3>Clique pour afficher ton pokémon préféré !</h3>
        {pokemon.imgSrc !== undefined ? (
            <img
                src={pokemon.imgSrc}
                alt={pokemon.name} 
                className={`card-img ${bgColor}`}
                style={{cursor:"pointer"}}
                onClick={changeColor}
            />

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
