import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      upOrIn: 'In'
    }
  }

  toggleScreen = (e) => {
    e.target.classList.contains('In') ? this.setState({ upOrIn: 'Up' }) : this.setState({ upOrIn: 'In' })
  }

  
  render() {
    const sign = this.state.upOrIn === 'Up' ? <SignIn /> : <SignUp />
    const homeView = !this.state.user ?  sign : <h1>Your Table's Ready</h1>
    return (
      <div>
        <div className='form-area'>
          <div className='screen'>
            {homeView}
            <button onClick={this.toggleScreen} 
                  className={this.state.upOrIn}>
                  Sign {this.state.upOrIn}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;