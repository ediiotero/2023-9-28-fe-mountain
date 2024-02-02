import { useState, useEffect } from 'react';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';
import './App.css';

function App() {

  const [albums, setAlbums] = useState([])
  const [pokemon, setPokemon] = useState({})

  const fetchAlbums = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=10')
    const data = await res.json()
    setAlbums(data)
  }

  const fetchPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    const data = await res.json()
    setPokemon(data)
  }

  const deleteAlbum = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE'
    })
    console.log(res.status)
  }

  useEffect(() => {
    fetchAlbums()
    fetchPokemon()
  }, [])
 
  return (
    <div className="App">
      <Form />
      <UpdateForm />
      {/* below: This is a ternary operator. You can think of is as a shorthand for an if else statement.
      see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator */}
      {pokemon.sprites ? 
        <div style={{backgroundColor: '#e8e6df', padding: '.5rem', margin: '.5rem'}}><p>{pokemon.name}</p> <img src={pokemon.sprites.front_default} alt="" /></div> :
        <p>no pokemon</p>
      }
    {albums.map(album => <p key={album.id} onClick={() => deleteAlbum(album.id)}>{album.title}</p>)}
    </div>
  );
}

export default App;
