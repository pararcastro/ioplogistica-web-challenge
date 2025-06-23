import type { FC } from "react";
import type { Character } from "../interfaces";
import heartOutline from "../assets/heart-outline.svg"; 

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
                src={heartOutline}
                width={20} height={20} 
                alt="like button" 
                aria-label="button" />
        </div>
    </article>
  );
}

export default CharacterCard;