import type { FC } from "react";
import type { Character } from "../interfaces";
import heartOutline from "../assets/heart-outline.svg"; 
import heart from "../assets/heart.svg"; 

type Props = {
  character: Character;
};  


const CharacterCard: FC<Props> = ({ character }) => {
  return (
     <article key={character.id} className="character-card">
            <img
            className="character-card__image"
            src={`${character.image}`}
            alt={character.name}
            />
        <div className="character-info">
            <p>{character.name}</p>
             <img
                className="character-card__like-button" 
                src={heart}
                width={20} height={20} 
                alt="like button" 
                aria-label="button" />
        </div>
    </article>
  );
}

export default CharacterCard;