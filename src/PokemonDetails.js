import React from 'react';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    }
  }

  async componentDidMount() {
    await this.getPokemonInfo();
  }

  async componentDidUpdate(prevProps) {
    await this.getPokemonInfo(prevProps);
  }

  async getPokemonInfo(prevProps) {
    const { match: { params: { id } } } = this.props;
    
    if (prevProps && prevProps.match.params.id === id) {
      return;
    }

    try {
      const url = `http://localhost:8080/api/pokemon/${id}`
      const res = await fetch(url, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJNYXJjbyJ9LCJpYXQiOjE1OTM0NjU1NTUsImV4cCI6MTU5NDA3MDM1NSwianRpIjoiZjk2NWRjMzQtODZmYy00YjVhLTlhZDAtZDdiMGI4YzRlOTliIn0.cMNyKcM14m8OoiK_RT01u0toCVuXPJPflrOyn62u9O4'
        }
      })
      if (res.ok) {
        const pokemon = await res.json()
        this.setState({pokemon})
      }
    } catch(e) {

    }
  }

  getImageForPane() {
    return { backgroundImage: `url('${this.state.url}')`}
  }

  render() {
    const { attack, defense, imageUrl, items, moves, name, type, owner } = this.state.pokemon;
    console.log(moves)

    return (
      <>
        <h4>{name}</h4>
        <h6>Information
          <ul>
            <li>Type {type}</li>
            <li>Attack {attack}</li>
            <li>Defense {defense}</li>
            <li>Moves
            </li>
          </ul>
        </h6>
      </>
    )
  }
}

export default PokemonDetails;