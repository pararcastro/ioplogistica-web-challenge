import CharacterCard from "../../components/CharacterCard/CharacterCard";
import {useCharacterContext} from "../../context/Characters/CharactersContext";

import './FavouriteCharacters.css';


export const FavouritesCharacter = () => {
    const {likedCharacters, handleLike} = useCharacterContext();

    return (
        <div className="container">
            <h1>Favourites</h1>
                <section className="characters-grid">
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