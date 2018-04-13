import React, { Componenet } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <form>
          <input type='text'
                 placeholder='Restaurant Name'
          />
        </form>
      </div>
    )
  }
}