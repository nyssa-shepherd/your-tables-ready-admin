import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import Reservations from '../Reservations/Reservations';
import Locations from '../Locations/Locations';
import Tables from '../Tables/Tables';
import './Header.css';

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
            <h1>Your Table's Ready</h1>
            <div>
              <NavLink 
                to='/home'
                className='nav'>
                  Home
              </NavLink>
              <NavLink 
                to='/locations'
                className='nav'>
                  Locations
              </NavLink>
              <NavLink 
                to='/tables'
                className='nav'>
                  Tables
              </NavLink>
              <NavLink 
                to='/reservations'
                className='nav'>
                  Reservations
              </NavLink>
            </div>
          </header>
          <div>
            <Route exact path='/home' component={Home} />
            <Route exact path='/reservations' component={Reservations} />
            <Route exact path='/tables' component={Tables} />
          </div>
        </div>
      )
    
  }
}

export default Header;