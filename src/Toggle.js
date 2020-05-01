import React, { Component } from 'react'
import ModalContainer from './ModalContainer'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.toggleDiv = this.toggleDiv.bind(this)
  }
 
  toggleDiv = () => {
    const { show } = this.state;
    this.setState({show : !show})
  }

  render() { 
    return ( 
      <div>
        <button onClick={this.toggleDiv}>...</button>
        <br /><br />
        {this.state.show && <ModalContainer />}
      </div>
     );
  }
}

class Box extends Component{
  render() {
    return (
      <div>
        <h1>Toggle Hello World</h1>
      </div>
    )
  }
}
 
export default Toggle;