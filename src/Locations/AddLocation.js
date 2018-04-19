import React, { Component } from 'react';
import './AddLocation.css';

class AddLocation extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <form>
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

export default AddLocation;