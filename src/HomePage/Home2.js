import React, { useState } from 'react'
import Modal from 'react-modal'
import '../App.css'
import LoginModal from '../components/Modal/LoginModal'
import { Link } from 'react-router-dom'

import Todo from '../images/todo.jpg';
import Coding from '../images/coding.jpeg';
import Gym from '../images/gym.jpeg';
import Google from '../images/google.jpg';



function Home2 () {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
 
    return (
      <div>
      <div className="container">
        <header>
          <div class="sixty">
            <p>
              3Sixty
            </p>
          </div>
          <div class="login-signUp">
            <ul class="links-tag">
              <li id="login" class="login">
                <Link to onClick={() => setmodalIsOpen(true)}>Login</Link>
              </li>
              <li id="signUp" class="sign-up">
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </header>

        <div id="first-section">
          <div id="first-section-box">
            <p className="first-section-text">
              There are essentially two things that will make you wiser- The books
              you read and the people you meet- by Charles Jones
        </p>
            <div className="first-cards-box">
              <p className="first-cards">
                <img src={Todo} alt="A todo img" width="280px" />
                <span className="first-img">Tracck your TODO list</span>
              </p>
            </div>
          </div>
        </div>

        <div id="second-section">
          <div className="second-section-ul">
            <ul>
              <li>
                {' '}
                <span className="lists">>></span> Track your daily activities
          </li>
              <li>
                <span className="lists">>></span> Save important note or code
            snippets you're likely to reuse.
          </li>
              <li>
                <span className="lists">>></span> Keep your dairy of your daily
            activities
          </li>
            </ul>
          </div>
          <div className="second-section-box">
            <p className="second-cards">
              <img src={Coding} alt="A coding img" width="280px" />
              <span className="first-img">Jot down resuable code snippets</span>
            </p>
            <div>
              <p className="second-cards">
                <img src={Gym} alt="A gym img" width="280px" />
                <span className="first-img">Jot down your daily activities</span>
              </p>
            </div>
          </div>
        </div>

        <div className="btnPage">
          <Link to='/SecondPage' target="_blank" className='mylinks'>
            <button id="get-started-btn">
                Get Started
            </button>
          </Link>
        </div>

        <div>
          <footer>
            <p>All reserved right. 2020 @Timothy Attah</p>
          </footer>
        </div>
        {/* <Link to='/SecondPage' target="_blank">
          <button>Get Started</button>
        </Link> */}

<Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setmodalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'grey',
              margin: '0 auto',
              opacity: '0.9'
             
            },
            content: {
              overflow: 'none',
              //  magin: '0 auto',
             width:'350px',
            marginLeft: '420px'
            }
            
          }}
          >
          {/* <h1>My Modal</h1>
          <p>Working with Modal</p>
          <div>
            <button onClick={() => setmodalIsOpen(false)}>
              Close MY Modal
            </button>
          </div> */}
          <div id='login-container5'>
          <div className='modal-box'>
                <p className='close-btn'onClick={() => setmodalIsOpen(false)}>&times;</p>
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
          
          </Modal>
      </div>
     
     
   </div>
    )
}



export default Home2