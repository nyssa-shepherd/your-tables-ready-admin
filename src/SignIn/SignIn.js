import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../ReduxFiles/actions/actions';

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
    await this.setState({ restaurants }, () => this.checkIfMatch() );
    await this.resetState();
  }

  checkIfMatch = () => {
    const { restaurants, username, password, verified } = this.state;
    const matchingRestaurant = restaurants.find(restaurant => restaurant.username === username ? restaurant : null);

    matchingRestaurant.password === password ?  this.props.loginUser(matchingRestaurant) : null;
  }

  resetState = () => {
    this.setState({
      username: '',
      password: '',
    })
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

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(SignIn);