import { useState, useEffect} from 'react';
import { DragonBallAPI } from '../services/apiService';
import { useDebounce } from './useDebounce';
import type { Character } from '../components/CharacterCard/types';


export function useCharacterSearch() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const data = await DragonBallAPI.getCharacters();
        setCharacters(data?.items || []);
        setFilteredCharacters(data?.items || []);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Hubo un error al cargar los personajes');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);


  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedSearchQuery.trim()) {
        setFilteredCharacters(characters);
        return;
      }

      setSearchLoading(true);
      try {
        const data = await DragonBallAPI.searchByName(debouncedSearchQuery);
        setFilteredCharacters(data?.items || []);
      } catch (err) {
       if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Hubo un error en la busqueda');
      }
      setFilteredCharacters([]);
      } finally {
        setSearchLoading(false);
      }
    };

    performSearch();
  }, [debouncedSearchQuery, characters]);

  return {
    filteredCharacters,
    loading,
    searchLoading,
    error,
    searchQuery,
    setSearchQuery
  };
} 