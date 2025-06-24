import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SearchBar from "../../components/SearchBar/SearchBar"
import Loader from "../../components/Loader/Loader";
import '../../App.css';

import type { Character } from '../../interfaces';

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
