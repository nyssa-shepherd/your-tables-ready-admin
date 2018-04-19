import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const renderLocations = locations ? 
      locations.map(location => {
        return (
          <div className='location-area'>
            <h3>{location.location}</h3>
            <p>{location.phone_number}</p>
            <p>{location.tables_open}</p>
            <p>{location.wait_time}</p>
          </div>
        );
      }) : null;
      
    return (
      <div>
        <div className='screen'>
          <AddLocation />
          {renderLocations}
        </div>
      </div>
    );
  }
};

const mapStateToProps = store => ({
  loggedInUser: store.loggedInUser
})

export default connect(mapStateToProps)(Locations);

