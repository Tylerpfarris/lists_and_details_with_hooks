import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import { useFetch } from '../hooks/useFetch';


function Avatar() {
  const { loading, characters, page, setPage } = useFetch()
  return loading ? (
    <h1>Loading...</h1>
  ) : (
     <div>
        <button onClick={() => {
          if (page === 1) return;
          else setPage((prevPage) => prevPage - 1);
        }}>Previous</button>
        <button onClick={() => setPage((prevPage) => prevPage +1)}>Next</button>
       <CharacterList characters={characters} />
     </div> 
  );
}

export default Avatar;
