import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitRestaurant}>
          <h3>Sign In</h3>
          <input type='text'
                 placeholder='Username'
                 value={this.state.username}
                 name='username'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='text'
                 placeholder='Password'
                 value={this.state.password}
                 name='password'
                 onChange={(e) => this.updateState(e)}
          />
          <button id='sign-up'>Sign In</button>
        </form>
      </div>
    );
  }
};

export default SignIn;