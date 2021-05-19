import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/avatarApi';

function Avatar() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <CharacterList characters={characters} />
  );
}

export default Avatar;
