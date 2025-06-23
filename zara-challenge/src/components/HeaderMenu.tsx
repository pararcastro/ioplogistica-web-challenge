import { Link } from 'react-router';
import logo from '../assets/Dragon-Ball-Logo.png';
import heart from '../assets/heart.svg';

const HeaderMenu = () => { 
  return (
    <nav>
      <Link to="/">
      <img className='logo' src={logo} alt="go home button logo" />
      </Link>
      <Link to="/favourites" className='liked-characters'>
        <img src={heart} alt="favourites button" />
        <span>3</span>
      </Link>
    </nav>
  )
 }

 export default HeaderMenu;
