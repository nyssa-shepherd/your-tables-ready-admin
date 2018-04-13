import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      verifyPassword: '',
      name: '',
      location: '',
      phoneNumber: ''
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type='text'
                 placeholder='Username'
                 value={this.state.username}
                 id='username-input'
          />
          <input type='text'
                 placeholder='Password'
                 value={this.state.password}
                 id='password-input'
          />
          <input type='text'
                 placeholder='Password'
                 value={this.state.verifyPassword}
                 id='verify-password-input'
          />
          <input type='text'
                 placeholder='Restaurant Name'
                 value={this.state.name}
                 id='name-input'
          />
          <input type='text'
                 placeholder='Address'
                 value={this.state.location}
                 id='location-input'
          />
          <input type='text'
                 placeholder='Phone Number'
                 value={this.state.phoneNumber}
                 id='phonenumber-input'
          />
        </form>
      </div>
    )
  }
}

export default SignUp;