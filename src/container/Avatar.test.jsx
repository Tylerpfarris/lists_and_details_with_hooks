import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Avatar from './Avatar';
import avatarCharacterList from '../avatarCharacterList.json'

const server = setupServer(
   rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
     return res(ctx.json(avatarCharacterList))
  })
);

describe('Avatar', () => {

   beforeAll(() => server.listen());
   afterAll(() => server.close());

  it('renders a list of Avatar characters on the screen', async () => {
    render(
      <MemoryRouter>
        <Avatar />
      </MemoryRouter>
    );
     screen.getByText('Loading...');
     
     const ulEl = await screen.findByRole('list', { name: 'character-list' })
     expect(ulEl).toMatchSnapshot();

     const linkEl = await screen.findByTestId('link-Analay');
     userEvent.click(linkEl)

  });
});
