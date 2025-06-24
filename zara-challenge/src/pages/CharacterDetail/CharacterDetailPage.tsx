import { useLocation } from "react-router";
import { useCharacterContext } from "../../context/CharactersContext";
import { useEffect, useState, type FC } from "react";

import type { Character } from "../../interfaces";

import heart from '../../assets/heart.svg';
import heartOutline from '../../assets/heart-outline.svg';
import './CharacterDetail.css';


interface Transformation {
    id: string;
    name: string;
    image: string;
}



export const CharacterDetail: FC = () => {
    const [transformations, setTransformations] = useState<Transformation[]>([]);

    const character = useLocation().state;
    const { likedCharacters, handleLike } = useCharacterContext();

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const req = await fetch(`https://dragonball-api.com/api/characters/${character.id}`);
                const data = await req.json();
                setTransformations(data.transformations || []);                 
            } catch (error) {
                console.error("Error fetching character transformations:", error);
            }
        }

        fetchCharacterDetails();
    }, []);

    
    function toggleLike(character: Character): void {
        handleLike(character);
    }

    return (
        <>
             <div className="character-banner">
                <div className="character-banner-wrapper center-content">
                    <img src={character.image} alt="" />
                    <div className="character-banner__info">
                        <div className="character-name">
                            <h1>{character.name}</h1>
                            <img onClick={() => toggleLike(character)}
                                src={likedCharacters.some(likedCharacter => likedCharacter.id === character.id) ? heart : heartOutline}
                                width={24} height={24}
                                alt="click to like this character"
                                aria-label="like button" />
                        </div>
                        <p>{character.description}</p>
                    </div>
                </div>
            </div>
            <div className="transformation-list-wrapper center-content">
                <h2>Transformations</h2>
                <div className="transformation-list ">
                    {transformations.length === 0 && <h2>No hemos encontrado transformaciones en la base de datos...</h2>}
                    {transformations && transformations.map(transformation => {
                        return (
                            <article key={transformation.id} className="transformation-list__item">
                                <img src={`${transformation.image ? transformation.image : 'https://placehold.co/100x150'
                                }`} alt="transformation thumbnail image" />
                                <p>{transformation.name}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </>
    );
};
