import {fetchCharacters} from '../services/avatarApi'
import { useState, useEffect } from 'react';

export const useFetch = () => {
   const [loading, setLoading] = useState(true);
   const [characters, setCharacters] = useState([]);
   const [page, setPage] = useState(1)
   
  useEffect(() => {
    fetchCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);
   return {page, setPage, loading, characters}
}