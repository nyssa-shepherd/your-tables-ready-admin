import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }
  
  render() {
    return (
      <div>
        <h1>Your Table's Ready</h1>
        <div className='screen'></div>
      </div>
    );
  }
}

export default Home;