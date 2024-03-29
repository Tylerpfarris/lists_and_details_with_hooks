import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Character from './Character';

function CharacterList({ characters }) {
  return (
    <>
      <ul aria-label="character-list">
        {characters.map((character) => (
          <li key={character.id}>
            <Character
              name={character.name}
              image={character.image || 'undefined'}
            />
            <Link data-testid={`link-${character.name}`} to={`/details/${character.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
