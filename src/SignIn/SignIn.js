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
      incorrectInput: '',
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
    const { restaurants, username, password, verified, incorrectInput } = this.state;
    const matchingRestaurant = restaurants.find(restaurant => restaurant.username === username ? restaurant : null);

    !matchingRestaurant ? this.setState({ incorrectInput: 'Incorrect username or password.' }) : this.checkForCorrectPassword(matchingRestaurant, password);
  }

  checkForCorrectPassword = (matchingRestaurant, password) => {
    matchingRestaurant.password === password ? this.props.loginUser(matchingRestaurant)
      : this.setState({ incorrectInput: 'Incorrect username or password.' });
  }

  resetState = () => {
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {    
    const { incorrectInput } = this.state;
    let incorrectMessage;
    incorrectInput !== '' ? incorrectMessage = incorrectInput : null;

    return (
      <div>
        <form onSubmit={this.fetchUserData}>
          <h3>Sign In</h3>
          <h5>{ incorrectMessage }</h5>
          <input type='text'
                 placeholder='Username'
                 value={this.state.username}
                 name='username'
                 onChange={(e) => this.updateUserState(e)}
          />
          <input type='password'
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