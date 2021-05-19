export const fetchCharacters = async () => {
   const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
   const characters = await res.json()

   return characters.map(character => ({
      id: character._id || 'N/A',
      name: character.name || 'N/A',
      image: character.photoUrl || 'N/A'
   }))
}

export const fetchById = async (id) => {
   const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

   const char = await res.json();

   return {
      name: char.name || 'N/A',
      image: char.photoUrl || 'N/A',
      gender: char.gender || 'N/A',
      hair: char.hair || 'N/A',
      weapon: char.weapon || 'N/A',
      profession: char.profession || 'N/A',
      position: char.position || 'N/A',
      affiliation: char.affiliation || 'N/A',
      allies: char.allies || 'N/A',
      enemies: char.enemies || 'N/A'
   }
}

