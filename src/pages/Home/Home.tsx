import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SearchBar from "../../components/SearchBar/SearchBar"
import Loader from "../../components/Loader/Loader";
import './Home.css';

import { useCharacterContext } from "../../context/Characters/CharactersContext";
import { useCharacterSearch } from "../../hooks/useCharacterSearch";

export const Home = () => {
    const { handleLike, likedCharacters } = useCharacterContext();
    const { 
        filteredCharacters, 
        loading, 
        searchLoading, 
        error, 
        searchQuery, 
        setSearchQuery 
    } = useCharacterSearch();

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
          <div className="container">
            <SearchBar 
                onSearch={setSearchQuery} 
                totalSearchResults={filteredCharacters.length}
                queryValue={searchQuery}
            />
            <div className="characters-grid">
              {searchLoading ? (
                <Loader />
              ) : filteredCharacters.length > 0 ? (
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