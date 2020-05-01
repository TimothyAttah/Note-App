import React, { Component } from 'react'
import ModalContainer from './ModalContainer'


class SecondSectionLinks extends Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  
  toggleMenu = () => {
    const { show } = this.state;
    this.setState({show:!show})
  }
  render() { 
    return ( 
      <div>
        <div className="second-section-links">
          <p className="personal">Personal</p>
          <p className="hours-style">23 Hours ago</p>
          <p className="dots" id="dots" onClick={this.toggleMenu}>...</p>
        </div>
        <div>
          <p> {this.state.show && <ModalContainer />}</p>
        </div>
      </div>
     );
  }
}
 
export default SecondSectionLinks;