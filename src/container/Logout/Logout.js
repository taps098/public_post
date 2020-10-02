import React from 'react';
import {Link} from 'react-router-dom';

class Logout extends React.Component{
  constructor(props) {
    super(props);
    localStorage.removeItem('token');

  }
  render() {
    console.log('you are logged out!, login again')
    return(
      <div>
        <Link to = '/'>You are logged out</Link>
      </div>
    );
  }
}

export default  Logout;