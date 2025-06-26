const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import type { Character } from "../components/CharacterCard/types";
import type { Transformation } from "../pages/CharacterDetail/types";


interface CharacterResponse {
  items: Character[];
}

interface CharacterDetail extends Character {
  transformations: Transformation[];
}


export const DragonBallAPI = {

  getCharacters: async (limit = 50): Promise<CharacterResponse> => {
    const response = await fetch(`${API_BASE_URL}/characters?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener personajes');
    }
    
    return await response.json();
  },

  searchByName: async (name: string): Promise<CharacterResponse> => {
    const url = `${API_BASE_URL}/characters?name=${encodeURIComponent(name)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error al buscar personajes: ${response.status}`);
    }
    
    const data = await response.json();
    const result = Array.isArray(data) ? { items: data } : data;
    
    return result;
  },

  getCharacterById: async (id: number): Promise<CharacterDetail> => {
    const response = await fetch(`${API_BASE_URL}/characters/${id}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener detalles del personaje');
    }
    
    return await response.json();
  }
};