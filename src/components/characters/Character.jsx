import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ id, image, name }) {
  return (
    <figure>
      <h3>{name}</h3>
        <img src={image} alt={`${name}-${id}`} />
        <p>
           <Link to={`/details/${id}`}>Details</Link>
        </p>
      
    </figure>
  );
}

Character.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
