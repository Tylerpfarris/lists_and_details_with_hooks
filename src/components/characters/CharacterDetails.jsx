import React, { useEffect, useState } from 'react';
import { fetchById } from '../../services/avatarApi';
import { useParams } from 'react-router-dom';


function CharacterDetails() {
   const [character, setCharacter] = useState([]);
   const [loading, setLoading] = useState(true);
   const params = useParams();
 
   console.log(params)
  
   useEffect(() => {
  const id = params.id
    
    fetchById(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);
   
  return (loading) ? (
    <h1>Loading...</h1>
  ) : (
        <>
           <h1>character</h1>
      <h1>{character.name}</h1>
    </>
  );
}

export default CharacterDetails;


