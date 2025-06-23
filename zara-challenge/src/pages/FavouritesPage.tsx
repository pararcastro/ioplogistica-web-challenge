import CharacterCard from "../components/CharacterCard";
import {useCharacterContext} from "../context/CharactersContext";


export const FavouritesPage = () => {
    const {likedCharacters, handleLike} = useCharacterContext();

    return (
        <div className="container">
            <h1>Favourites</h1>
                <section className="heroes-list">
                {likedCharacters.length > 0 &&
                    likedCharacters.map(character => 
                        <CharacterCard 
                        key={character.id} 
                        character={character} 
                        handleLike={handleLike} 
                        likedCharacters={likedCharacters} 
                    />)
                }
            </section>
            {!likedCharacters.length && <h2>No favourite Characters... yet!</h2>}
        </div>
    );
};