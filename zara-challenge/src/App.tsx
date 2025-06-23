import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router';
import HeaderMenu from './components/HeaderMenu';

import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CharacterProvider } from './context/CharactersContext';



function App() {


  return (
    <>
  <CharacterProvider>
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
    </CharacterProvider>
  </>
  )
}

export default App
