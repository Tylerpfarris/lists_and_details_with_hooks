import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders a list of Avatar characters on the screen', async () => {
    render(
      <MemoryRouter>
        <Avatar />
      </MemoryRouter>
    );
    screen.getByText('Loading...');
  });
});
