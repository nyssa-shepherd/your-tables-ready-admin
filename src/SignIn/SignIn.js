import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      verified: false,
      restaurants: null
    }
  }

  updateUserState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  fetchUserData = async(e) => {
    e.preventDefault();
    const initalFetch = await fetch('https://restaurant-res-backend.herokuapp.com/api/v1/restaurants');
    const restaurants = await initalFetch.json();
    await this.setState({ restaurants }, () => {
      this.checkIfMatch();
    });
  }

  checkIfMatch = () => {
    const { restaurants, username } = this.state;
    const matchingUsername = restaurants.find(restaurant => restaurant.name === username);
    console.log(matchingUsername);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.fetchUserData}>
          <h3>Sign In</h3>
          <input type='text'
                 placeholder='Username'
                 value={this.state.username}
                 name='username'
                 onChange={(e) => this.updateUserState(e)}
          />
          <input type='text'
                 placeholder='Password'
                 value={this.state.password}
                 name='password'
                 onChange={(e) => this.updateUserState(e)}
          />
          <button id='sign-up'>Sign In</button>
        </form>
      </div>
    );
  }
};

export default SignIn;