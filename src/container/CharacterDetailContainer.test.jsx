import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterDetailsContainer from './CharacterDetailsContainer'



const server = setupServer(
  rest.get(
     'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d1', (req, res, ctx) => {
        return res(
          ctx.json(
            {
              allies: ['Riley'],
              enemies: [],
              _id: '5cf5679a915ecad153ab68d1',
              photoUrl:
                'https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201',
              name: 'Analay',
              gender: 'Female',
              eye: 'Purple',
              hair: 'Black with red highlights',
              weapon: 'Shadows',
              affiliation: 'Unnamed team',
              first: '"',
            },
          )
        );
    }
  )
);

describe('CharacterDetailsContainer', () => {

   beforeAll(() => server.listen());
   afterAll(() => server.close());

   it('displays a characters details', async () => {
      render(
         <MemoryRouter>
            <CharacterDetailsContainer
               match={{
                  params: {
                     id: '5cf5679a915ecad153ab68d1',
                  },
               }}/>
         </MemoryRouter>
   );

      screen.getByText('Loading...')
      const detailsDiv = await screen.findByTestId('details')
      expect(detailsDiv).toMatchSnapshot()
      expect(detailsDiv).not.toBeEmptyDOMElement()

      const charName = screen.findByTestId('nameEl')
      expect(charName).toContainHTML
   })
})