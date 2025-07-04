import { createContext, useState, useContext, } from "react"
import type { JSX, ReactNode } from "react";
import type { Character } from "../../components/CharacterCard/types";


interface CharacterContextType {
    likedCharacters: Character[];
    handleLike: (character: Character) => void;
}


interface CharacterProps {
    children: ReactNode;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(undefined)

export function useCharacterContext(): CharacterContextType {
    const context = useContext(CharacterContext);
    if (!context) {
        throw new Error('useCharacterContext must be used within a CharacterProvider');
    }
    return context;
}


export function CharacterProvider({ children }: CharacterProps): JSX.Element {
    const [likedCharacters, setLikedCharacters] = useState<Character[]>([]);

    function handleLike(character: Character) {

        if (!likedCharacters.some(likedCharacter => likedCharacter.id === character.id)) {
            setLikedCharacters(prevLikedCharacters => {
                return [
                    ...prevLikedCharacters,
                    {
                        id: character.id,
                        name: character.name,
                        image: character.image
                    }]
            })
        } else {
            setLikedCharacters(prevLikedCharacters => {
                return prevLikedCharacters.filter(likedCharacter => likedCharacter.id !== character.id)
            })
        }
    }

    return (
        <CharacterContext.Provider value={{ likedCharacters, handleLike }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterContext
