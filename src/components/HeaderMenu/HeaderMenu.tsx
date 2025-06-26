import { Link } from 'react-router';
import logo from '@assets/img/Dragon-Ball-Logo.png';
import heart from '@assets/img/heart.svg';

import { useCharacterContext } from '../../context/CharactersContext';

import './HeaderMenu.css';

const HeaderMenu = () => { 
  const { likedCharacters } = useCharacterContext();

  return (
    <nav>
      <Link to="/">
      <img className='logo' src={logo} alt="go home button logo" />
      </Link>
      <Link to="/favourites" className='liked-characters'>
        <img src={heart} alt="favourites button" />
        <span data-testid='fav-counter'>{likedCharacters.length}</span>
      </Link>
    </nav>
  )
 }

 export default HeaderMenu;
