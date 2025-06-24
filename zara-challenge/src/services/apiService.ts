const API_BASE_URL = "https://dragonball-api.com/api";
import type { CharacterDetail, Character } from '../interfaces';


export interface CharacterResponse {
  items: Character[];
}


export const DragonBallAPI = {

  getCharacters: async (limit = 50): Promise<CharacterResponse> => {
    const response = await fetch(`${API_BASE_URL}/characters?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener personajes');
    }
    
    return await response.json();
  },


  getCharacterById: async (id: number): Promise<CharacterDetail> => {
    const response = await fetch(`${API_BASE_URL}/characters/${id}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener detalles del personaje');
    }
    
    return await response.json();
  }
};