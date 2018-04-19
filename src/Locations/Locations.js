import React, { Component } from 'react';
import AddLocation from './AddLocation';
import './Locations.css';

class Locations extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className='screen'>
          <AddLocation />
        </div>
      </div>
    );
  }
};

export default Locations;

