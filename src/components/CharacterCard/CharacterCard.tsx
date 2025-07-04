import type { FC } from "react";
import type { Character } from "./types";

import heartOutline from '@assets/img/heart-outline.svg'; 
import heart from '@assets/img/heart.svg'; 

import { Link } from "react-router";

import './CharacterCard.css';

type Props = {
  character: Character;
  likedCharacters?: Character[],
  handleLike: (character: Character) => void;
};  


const CharacterCard: FC<Props> = ({ character, likedCharacters, handleLike }) => {

const toggleLike = (character: Character) => {
    handleLike(character);
};


  return (
     <article key={character.id} className="character-card">
      <Link to={`../character/${character.id}`} state={character}>
        <img
            className="character-card__image"
            src={`${character.image}`}
            alt={character.name}
            />
      </Link>
        <div className="character-info">
            <p>{character.name}</p>
             <img
                onClick={() => toggleLike(character)}
                className="character-card__like-button" 
                src={likedCharacters?.some(hero => hero.id === character.id) ? heart : heartOutline}
                width={20} height={20} 
                alt="like button" 
                aria-label="button"
                data-testid={likedCharacters?.some(hero => hero.id === character.id) ? 'filled-heart' : 'empty-heart'}
                />
        </div>  
      
    </article>
  );
}

export default CharacterCard;