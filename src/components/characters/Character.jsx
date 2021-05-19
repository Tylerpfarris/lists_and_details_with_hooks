import React from 'react';
import PropTypes from 'prop-types';

function Character({ id, image, name }) {
  return (
    <figure>
      <h3>{name}</h3>
        <img src={image} alt={`${name}`} />     
    </figure>
  );
}

Character.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
