import { useState, useEffect } from 'react'
import './App.css'

import  CharacterCard from './components/CharacterCard';
import SearchBar from './components/SearchBar';
import logo from './assets/Dragon-Ball-Logo.png';
import heart from './assets/heart.svg';

import type { Character } from './interfaces';


const HeaderMenu = () => { 
  return (
    <nav>
      <img className='logo' src={logo} alt="go home button logo" />
      <div className='liked-characters'>
        <img src={heart} alt="favourites button" />
        <span>3</span>
      </div>
    </nav>
  )
 }



function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://dragonball-api.com/api/characters?limit=50");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacters(data?.items || []);
        setFilteredCharacters(data?.items || []);

      } catch (error) {
          setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);


  const handleSearch = (query: string) => {
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
    console.log("Filtered Characters:", filteredCharacters);
    
    
    setFilteredCharacters(filteredCharacters);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>

      <HeaderMenu />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <div className="characters-grid">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map(character => (
           <CharacterCard key={character.id} character={character} />
            ))
          ) : (
            <p>No se encontraron personajes</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
