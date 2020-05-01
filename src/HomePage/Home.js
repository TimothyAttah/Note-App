import React, { Component, useState } from 'react';
import Modal from 'react-modal'
import '../App.css'
import { Link } from 'react-router-dom'

import Todo from '../images/todo.jpg';
import Coding from '../images/coding.jpeg';
import Gym from '../images/gym.jpeg';



class Home extends Component {
  
 
  render() { 
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
                  <Link to='#'>Login</Link>
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
        </div>
       
       
     </div>
     );
  }
}
 
export default Home;