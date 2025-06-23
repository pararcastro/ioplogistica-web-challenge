import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router';
import HeaderMenu from './components/HeaderMenu';

import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';



function App() {


  return (
    <>
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
