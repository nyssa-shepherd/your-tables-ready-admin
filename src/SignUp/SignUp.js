import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import  { loginUser } from '../ReduxFiles/actions/actions';
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
      url: '',
      dontMatch: ''
    }
  }

  updateState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); 
    
    name === 'password' || 'verifyPassword' ? this.verifyPasswordMatch() : null;
  }

  verifyPasswordMatch = () => {
    const { password, verifyPassword, dontMatch } = this.state;
    password === verifyPassword ? this.setState({ dontMatch: '' }, () => console.log(dontMatch)) : this.setState({ dontMatch: 'The passwords do not match' }, () => console.log(dontMatch));
  }

  submitRestaurant = async (e) => {
    e.preventDefault();
    const { username, password, verifyPassword, name, url } = this.state;
    const post = await fetch('https://restaurant-res-backend.herokuapp.com/api/v1/restaurants', {
      method: 'POST',
      body: JSON.stringify({ username, password, restaurant_name: name, img_url: url }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    const user = await post.json();
    await this.props.loginUser(user);
    await this.resetState();
  }

  resetState = () => {
    this.setState({ 
      signedIn: true, 
      username: '', 
      password: '', 
      verifyPassword: '', 
      name: '', 
      url: '' 
    });
  }

  render() {
    const { dontMatch } = this.state;
    let dontMatchMessage;
    
    dontMatch !== '' ? dontMatchMessage = dontMatch : null;
    console.log(dontMatchMessage)
    return (
      <div>
        <form onSubmit={this.verifyPasswordMatch}>
          <h3>Sign Up</h3>
          <h5>{ dontMatchMessage }</h5>
          <input type='text'
                 placeholder='Username'
                 value={this.state.username}
                 name='username'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='password'
                 placeholder='Password'
                 value={this.state.password}
                 name='password'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='password'
                 placeholder='Confirm Password'
                 value={this.state.verifyPassword}
                 name='verifyPassword'
                 onBlur={ e => this.updateState(e) }
                 onChange={ e => this.updateState(e) }
          />
          <input type='text'
                 placeholder='Restaurant Name'
                 value={this.state.name}
                 name='name'
                 onChange={(e) => this.updateState(e)}
          />
          <input type='text'
                 placeholder='Image Url'
                 value={this.state.url}
                 name='url'
                 onChange={(e) => this.updateState(e)}
          />
          <button id='sign-up'>Sign Up</button>
        </form>
      </div>
    );
  }
};

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(SignUp);