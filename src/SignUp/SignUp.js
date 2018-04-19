import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      verifyPassword: '',
      name: '',
      location: '',
      phoneNumber: '',
    }
  }

  updateState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });  
  }

  submitRestaurant = async (e) => {
    e.preventDefault();
    const { username, password, name } = this.state;
    const post = await fetch('http://localhost:3000/api/v1/restaurants', {
      method: 'POST',
      body: JSON.stringify({ username, password, restaurant_name: name }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    await post.json();
    await this.setState({ signedIn: true });
  }

  render() {
    this.state.signedIn === true ? <Redirect to='/home' /> : null;

    return (
      <div>
        <form onSubmit={this.submitRestaurant}>
          <h3>Sign Up</h3>
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
          <input type='text'
                 placeholder='Confirm Password'
                 value={this.state.verifyPassword}
                 name='verifyPassword'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='text'
                 placeholder='Restaurant Name'
                 value={this.state.name}
                 name='name'
                 onChange={(e) => this.updateState(e)}
          />
          <button id='sign-up'>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;