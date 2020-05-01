import React, { Component } from 'react'
import '../Modal/login.css'
import { Link } from 'react-router-dom'

import Google from './images/google.jpg';


class LoginModal extends Component {
  
  render() { 
    return ( 
      <div>
        <div id='modal' onClick={this.modal}>
          <div id='modal-container'>
            <div id='modal-content'>
              <div id='modal-box'>
                <p className='close-btn'>&times;</p>
                <p className='modal-header'>3Sixty</p>
                <p className='ptag-welcome'>Hello Welcome Back</p>
                <p className='p-tag-details'>Enter your personal details to Login</p>
                  <Link to='https://www.google.com'>
                  <div className="google-box">
                    <div>
                      <img src={Google} alt="google" width="60px" />
                    </div>
                    <div>
                        <p>Sign Up With Google</p>
                      </div>
                  </div>
                </Link>
                <p className="or">
                  OR
                </p>
                <div className="input-box">
                  <input type="email" placeholder="Email" id="email-input" />
                  <input type="password" placeholder="Password" id="password-input" />
                </div>
                <div className="login-modal">
                  <Link to="#"><p id="login-btn">Log In</p></Link>
                </div>
                <p className="sign-up-modal">
                  Don't have an account? <Link to="#" id="signingUp" onclick="closeing2()">Sign up here</Link>
                </p>
              </div>
            </div>
          </div>
       </div>
      </div>
     );
  }
}
 
export default LoginModal;






