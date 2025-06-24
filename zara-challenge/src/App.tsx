import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router';
import HeaderMenu from './components/HeaderMenu';

import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CharacterProvider } from './context/CharactersContext';
import { CharacterDetail } from './pages/CharacterDetail/CharacterDetailPage';



function App() {


  return (
    <>
  <CharacterProvider>
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
    </CharacterProvider>
  </>
  )
}

export default App
