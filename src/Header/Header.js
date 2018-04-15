import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import Reservations from '../Reservations/Reservations';import Tables from '../Tables/Tables';

class Header extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

    render() {
      return (
        <div>
          <header>
            <h1>Reserant</h1>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/tables'>Tables</NavLink>
            <NavLink to='/reservations'>Reservations</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </header>
          <div>
            <Route exact path='/home' component={Home} />
            <Route exact path='/reservations' component={Reservations} />
            <Route exact path='/tables' component={Tables} />
            <Route exact path='/signup' component={SignUp} />
          </div>
        </div>
      )
    
  }
}

export default Header;