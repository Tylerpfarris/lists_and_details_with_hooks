import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchById } from '../services/avatarApi';
import Details from '../components/characters/Details';

function CharacterDetailsContainer({match}) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const id = match.params.id;
     console.log(id);

    fetchById(match.params.id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>character</h1>
        <Details character={character}/>
    </>
  );
}

CharacterDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharacterDetailsContainer;
