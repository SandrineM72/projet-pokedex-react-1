interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}


function NavBar({setPokemonName, pokemonList}: NavBarProps) {
  return <nav>

        {pokemonList.map((pokemon) =>
          
          <button 
            key={pokemon.name} 
            onClick={() => setPokemonName(pokemon.name)}>

          <img 
            src={pokemon.imgSrc}  
            style={{ width: '40px', height: '40px' }}/>

          <p>{pokemon.name}</p>
          
          </button> 
        )
        }
    
    </nav>;
}

export default NavBar;