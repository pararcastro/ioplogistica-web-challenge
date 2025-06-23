import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [characters, setCharacters] = useState<[]>([]);
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
        console.log('Fetched Dragon Ball characters:', data);
        setCharacters(data.items || []);

      } catch (error) {
          setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dragon Ball</h1>
      <div className="characters-grid">
        {characters.length > 0 ? (
          characters.map(character => (
            <div key={character.id} className="character-card">
              <img 
                src={`${character.image}`}
                alt={character.name}
              />
              <h2>{character.name}</h2>
              <p>{character.description || 'No description available.'}</p>
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>
    </div>
  )
}

export default App
