import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class GetStarted extends Component {
  
  render() { 
    return ( 
      <div>
        <Link to="/SecondPage" target="_blank">
          <button>Get Started</button>
        </Link>
      </div>
     );
  }
}
 
export default GetStarted ;