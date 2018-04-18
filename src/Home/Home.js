import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  
  render() {
    const homeView = !this.state.user ? <SignUp /> : <h1>Your Table's Ready</h1>
    return (
      <div>
        <div className='screen'>{homeView}</div>
      </div>
    );
  }
}

export default Home;