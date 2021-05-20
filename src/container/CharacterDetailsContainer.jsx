import React from 'react';
import PropTypes from 'prop-types';
import Details from '../components/characters/Details';
import { useDetails } from '../hooks/useDetails';

function CharacterDetailsContainer({match}) {
  const id = match.params.id;
  const {character, loading} = useDetails(id)
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
