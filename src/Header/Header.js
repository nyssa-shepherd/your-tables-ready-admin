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
            <h1>Reserant</h1>
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
              <NavLink 
                to='/signup'
                className='nav'>
                  Sign Up
              </NavLink>
            </div>
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