import React, { Component } from 'react';
import './second/second.css'

import EditLogo from './images/edit3.png'
import DeleteIcon from './images/delete icon.png'
import PrintLogo from './images/print.png'
import Archive from './images/archive.png'


class ModalContainer extends Component {

  render() { 
    return ( 
      <div>
        <div id="modal-container" >
          <ul>
            <a href="#" id="edit-page">
              <li><img src={EditLogo} alt="Edit" width="13px" /> Edit</li>
            </a>
            <a href="#" id="deleteNote1">
              <li><img src={DeleteIcon} alt="Delete" width="15px" /> Delete</li>
            </a>
            <a href="#">
              <li><img src={PrintLogo} alt="Print" width="15px" /> Print</li>
            </a>
            <a href="#">
              <li><img src={Archive} alt="Archive" width="15px" /> Archive</li>
            </a>
          </ul>
        </div>
      </div>
     );
  }
}
 
export default ModalContainer;