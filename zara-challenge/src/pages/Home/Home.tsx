import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SearchBar from "../../components/SearchBar/SearchBar"
import Loader from "../../components/Loader/Loader";
import '../../App.css';

import type { Character } from '../../interfaces';
import { DragonBallAPI } from "../../services/apiService";  

import { useCharacterContext } from "../../context/CharactersContext";


export const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);
    const { handleLike, likedCharacters } = useCharacterContext();


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
    const fetchCharacters = async () => {
        setLoading(true);

        try {
          const data = await DragonBallAPI.getCharacters();
          setCharacters(data?.items || []);
          setFilteredCharacters(data?.items || []);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Hubo un error al cargar los personajes');
        } finally {
        setLoading(false);
        }
    };

    fetchCharacters();
    }, []);


    const handleSearch = (query: string) => {
        const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
    
        setFilteredCharacters(filteredCharacters);
    };



    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <>
          <div className="container">
            <SearchBar onSearch={handleSearch} totalSearchResults={filteredCharacters.length} />
            <div className="characters-grid">
              {filteredCharacters.length > 0 ? (
                filteredCharacters.map(character => (
                  <CharacterCard 
                    key={character.id} 
                    character={character} 
                    handleLike={handleLike} 
                    likedCharacters={likedCharacters} />
                ))
              ) : (
                <p>No se encontraron personajes</p>
              )}
            </div>
          </div>
        </>
    )
 }
