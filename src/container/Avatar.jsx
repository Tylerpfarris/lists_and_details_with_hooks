import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import { useFetch } from '../hooks/useFetch';


function Avatar() {
  const { loading, characters } = useFetch()
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <CharacterList characters={characters} />
  );
}

export default Avatar;
