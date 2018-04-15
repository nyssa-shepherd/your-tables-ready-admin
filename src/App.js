import React, { Component } from 'react';
import Header from './Header/Header';
import SignUp from './SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignUp />
      </div>
    );
  }
}

export default App;
