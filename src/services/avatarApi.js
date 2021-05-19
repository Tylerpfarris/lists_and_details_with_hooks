export const fetchCharacters = async () => {
   const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
   const characters = await res.json()

   return characters.map(character => ({
      id: character._id,
      name: character.name,
      image: character.photoUrl
   }))
}

export const fetchById = async (id) => {
   const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

   const char = await res.json();

   return {
      name: char[0].name,
      image: char[0].photoUrl,
      gender: char[0].gender,
      hair: char[0].hair,
      weapon: char[0].weapon,
      profession: char[0].profession,
      position: char[0].position,
      affiliation: char[0].affiliation,
      allies: char[0].allies,
      enemies: char[0].enemies
   }
}

