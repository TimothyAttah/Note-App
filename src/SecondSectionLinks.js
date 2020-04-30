import React, { Component } from 'react'
import ModalContainer from './ModalContainer'


class SecondSectionLinks extends Component {
 
  render() { 
    return ( 
      <div>
        <div className="second-section-links">
          <p className="personal">Personal</p>
          <p className="hours-style">23 Hours ago</p>
          <p className="dots" id="dots" onClick={this.toggleMenu}>...</p>
        </div>
      </div>
     );
  }
}
 
export default SecondSectionLinks;