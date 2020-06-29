import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

class PokemonBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    }
  }

  async componentDidMount() {
    try {
      const url = 'http://localhost:8080/api/pokemon';
      const res = await fetch(url, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJNYXJjbyJ9LCJpYXQiOjE1OTM0NjU1NTUsImV4cCI6MTU5NDA3MDM1NSwianRpIjoiZjk2NWRjMzQtODZmYy00YjVhLTlhZDAtZDdiMGI4YzRlOTliIn0.cMNyKcM14m8OoiK_RT01u0toCVuXPJPflrOyn62u9O4'
        }
      });
      if (res.ok) {
        const pokemons = await res.json();
        return this.setState({
          pokemons
        });
      }
    } catch(e) {

    }
  }

  render() {
    return (
      <main className='pokemon-list-layout'>
        <BrowserRouter>
          <PokemonList pokemons={this.state.pokemons} />
          <Route path='/pokemons/pokemon/:id' component={PokemonDetails} />
        </BrowserRouter>
      </main>
    )
  }
}

export default PokemonBrowser;