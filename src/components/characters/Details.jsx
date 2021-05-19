import React from 'react'
import PropTypes from 'prop-types'

function Details({character}) {
   return (
      <>
         <img src={character.image} alt={character.name} />
         <h3>{character.name}</h3>
         <p>gender: {character.gender}</p>
         <p>hair color: {character.hair}</p>
         <p>weapon: {character.weapon}</p>
         <p>profession: {character.profession}</p>
         <p>affiliation: {character.affiliation}</p>
         <p>allies: {character.allies}</p>
         <p>enemies: {character.enemies}</p>
      </>
   )
}

Details.propTypes = {
   character: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      hair: PropTypes.string.isRequired,
      weapon: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired,
      allies: PropTypes.array.isRequired,
      enemies: PropTypes.array.isRequired,
   }).isRequired
}

export default Details

