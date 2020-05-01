import React, { Component } from 'react';
import ModalContainer from '../ModalContainer'

class SectionIcons extends Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
    this.toggleMenu2 = this.toggleMenu2.bind(this)
  }

  toggleMenu2 = () => {
    const { show } = this.state;
    this.setState({ show: !show })
  }
  render() { 
    return ( 
      <div>
        <div id="section-icons">
         
          <ul>
            <span> {this.state.show && <ModalContainer />}</span>
            <li className="dots-2" onClick={this.toggleMenu2}>...</li>
            <li className="plus-style">+</li>
            <li className="minus-style">-</li>
          </ul>
         
        </div>
      </div>
     );
  }
}
 
export default SectionIcons;