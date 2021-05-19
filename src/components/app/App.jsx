import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Avatar from '../../container/Avatar';
import CharacterDetails from '../characters/CharacterDetails';

export default function App() {
  return (
    <Router>
      <NavLink to='/'>Home</NavLink>
      <Switch>
        <Route exact path='/' component={Avatar} />
        <Route exact path='/details/:id' component={CharacterDetails} />
      </Switch>
    </Router>
  )
}
