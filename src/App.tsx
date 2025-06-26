import '@assets/css/App.css'
import { BrowserRouter, Routes, Route, } from 'react-router';

import HeaderMenu from './components/HeaderMenu/HeaderMenu';

import { Home } from './pages/Home/Home';
import { FavouritesCharacter } from './pages/FavouriteCharacters/FavouriteCharacters';
import { CharacterProvider } from './context/CharactersContext';
import { CharacterDetail } from './pages/CharacterDetail/CharacterDetailPage';



function App() {


  return (
    <>
  <CharacterProvider>
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<FavouritesCharacter />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
    </CharacterProvider>
  </>
  )
}

export default App
