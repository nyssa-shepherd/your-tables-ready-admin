import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddLocation.css';

class AddLocation extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      phone_number: '',
      tables_open: '',
      wait_time: ''
    }
  }

  updateState = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  postNewLocation = async(e) => {
    e.preventDefault();
    const { id } = this.props.loggedInUser
    console.log(id)
    const { location, phone_number, tables_open, wait_time } = this.state;
    const post = await fetch(`https://restaurant-res-backend.herokuapp.com/api/v1/restaurants/${id}/restaurant_details`, {
      method: 'POST',
      body: JSON.stringify({ location, phone_number, tables_open, wait_time, restaurant_id: id }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    console.log(await post.json());
  }

  render() {
    return (
      <div>
        <form className='add-location-form'
              onSubmit={this.postNewLocation}>
          <h3>Add Another Location</h3>
          <input type='text'
                 placeholder='Address'
                 value={this.state.location}
                 name='location'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='text'
                 placeholder='Phone Number'
                 value={this.state.phone_number}
                 name='phone_number'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='text'
                 placeholder='Tables Open'
                 value={this.state.tables_open}
                 name='tables_open'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='text'
                 placeholder='Wait Time'
                 value={this.state.wait_time}
                 name='wait_time'
                 onChange={(e) => this.updateState(e)}
          />
          <button id='add-location'>Add Location</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = store => ({
  loggedInUser: store.loggedInUser,
})

export default connect(mapStateToProps)(AddLocation);