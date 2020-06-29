import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonList = props => (
  <div className='list'>
    {props.pokemons.map(pokemon => (
      <div key={pokemon.id}>
        <NavLink activeClassName='is-selected'
          to={`/pokemons/pokemon/${pokemon.id}`}>
            {pokemon.name}
        </NavLink>
      </div>
    ))}
  </div>
)

export default PokemonList;