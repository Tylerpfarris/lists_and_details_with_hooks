import {fetchCharacters} from '../services/avatarApi'
import { useState, useEffect } from 'react';

export const useFetch = () => {
const [loading, setLoading] = useState(true);
const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);
   return {loading, characters}
}