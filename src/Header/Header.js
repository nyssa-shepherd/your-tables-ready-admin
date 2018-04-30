import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import Reservations from '../Reservations/Reservations';
import Locations from '../Locations/Locations';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

    render() {
      const { loggedInUser } = this.props;
      const user = loggedInUser ? loggedInUser.restaurant_name
        : null;

      return (
        <div>
          <header>
            <h2>your table's ready</h2>
            <div className='nav-area'>
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
                to='/reservations'
                className='nav'>
                  Reservations
              </NavLink>
              <h3 className='user'>{user}</h3>
            </div>
          </header>
          <div>
            <Route exact path='/home' component={Home} />
            <Route exact path='/locations' component={Locations} />
            <Route exact path='/reservations' component={Reservations} />
          </div>
        </div>
      )
    
  }
}

const mapStateToProps = store => ({
  loggedInUser: store.loggedInUser,
})

export default connect(mapStateToProps)(Header);