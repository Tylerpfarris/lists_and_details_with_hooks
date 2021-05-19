import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Avatar from '../../container/Avatar';
import CharacterDetailsContainer from '../../container/CharacterDetailsContainer';

export default function App() {
  return (
    <Router>
      <NavLink to='/'>Home</NavLink>
      <Switch>
        <Route
          exact
          path='/'
          render={(routerProps) => <Avatar {...routerProps} />}
        />
        <Route
          exact
          path='/details/:id'
          render={(routerProps) => <CharacterDetailsContainer {...routerProps} />}
        />
      </Switch>
    </Router>
  )
}
