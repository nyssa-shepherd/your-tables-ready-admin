import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import Home from '../Home/Home';
import AddLocation from './AddLocation';
import './Locations.css';

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: null
    }
  }

  componentDidMount() {
    this.props.loggedInUser ? this.fetchLocations(this.props.loggedInUser.id) : null;
  }

  fetchLocations = async(id) => {
    const initalFetch = await fetch(`https://restaurant-res-backend.herokuapp.com/api/v1/restaurants/${id}/restaurant_details`);
    const locations = await initalFetch.json();
    await this.setState({ locations });
  }

  render() {
    const { locations } = this.state;
    const { loggedInUser } = this.props;
    const renderLocations = locations ? 
      locations.map(location => {
        return (
          <div className='location-area'>
            <h3 className='address'>{location.location}</h3>
            <p><span className='desribe'>Phone Number: </span> {location.phone_number}</p>
            <p><span className='desribe'>Tables Open: </span> {location.tables_open}</p>
            <div className='inline-button'>
              <p><span className='desribe'>Wait Time: </span> {location.wait_time}</p>
              <button className='update'>Update</button>
            </div> 
          </div>
        );
      }) : null;

    const showLocationInput = loggedInUser ? <AddLocation /> 
      : <div className='locations-nav'><NavLink to='/home' className='loco-nav'>Sign up or sign in</NavLink><h2>to view locations.</h2><Route exact path='/home' component={Home} /></div>
      
    return (      
      <div>
        <div className='screen'>
          <div className='location-screen'>
            { showLocationInput }
            <div className='cards'>
              { renderLocations }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = store => ({
  loggedInUser: store.loggedInUser
})

export default connect(mapStateToProps)(Locations);

