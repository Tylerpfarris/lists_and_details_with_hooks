import { useState, useEffect } from 'react';
import { fetchById } from '../services/avatarApi'

export const useDetails = (id) => {
   const [character, setCharacter] = useState([]);
   const [loading, setLoading] = useState(true);


   useEffect(() => {
      fetchById(id)
         .then(setCharacter)
         .finally(() => setLoading(false));
   }, []);

   return {character, loading}
}
