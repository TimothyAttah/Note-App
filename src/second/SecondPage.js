import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../second/second.css'
import ModalContainer from '../ModalContainer'
import SecondSectionLinks from '../SecondSectionLinks'

import Search from '../images/search.png';
import NoteIcon from '../images/note icon2.png'
import Todo from '../images/todo1.png'
import Trophy2 from '../images/trophy2.jpg'
import Archive from '../images/archive.png'
import Setting from '../images/setting1.png'


class SecondPage extends Component {

  render() {
    return (
      <div id='main-container2'>
       
        <header className='headerPage'>
          <div className='header-title'>
            <p>
              <Link to='/'>
                3Sixty
              </Link>
            </p>
          </div>
          <div className='header-logo'>
            <div>
              <img src={Search} alt="Search" width="30px" />
            </div>
            <p>Search notes</p>
          </div>
        </header>
        
        <nav>
          <div className='nav-wrapper'>
            <div className='navLinks'>
              <ul className='nav-ul'>
                <l1 className="note-icon">
                  <img src={NoteIcon} alt="note-icon2" width="15px" />
                  <span>
                    Notes <span className="num-10">10</span>
                  </span>
                </l1>
                <l1 className="hovering">
                  <img src={Todo} alt="Todo" width="15px"/>
                  <span>
                    Todo <span className="num-2">2</span>
                  </span>
                </l1>
                <l1 className="hovering">
                  <img src={Trophy2} alt="Events" width="15px" />
                  <span>
                    Events <span className="num-10">10</span>
                  </span>
                </l1>
                <l1 className="hovering">
                  <img src={Archive} alt="Archive" width="15px" />
                  <span className="right-margin">
                    Archives <span className="num-10">10</span>
                  </span>
                </l1>
                <l1 className="hovering">
                  <img src={Setting} alt="setting" width="15px" />
                  <span>
                    Setting <span className="num-10">10</span>
                  </span>
                </l1>
              </ul>
            </div>
            <div className='login-signUpPage'>
              <ul className='links-tag'>
                <li className="loginPage">
                  <a href="#">+</a>
                </li>
                <li className="sign-upPage">
                  <a href="#" id="note-modal">Create Note</a>
                </li>
                </ul>
            </div>
          </div>
        </nav>

        <div id='main-content-wrapper'>
          <section id='second-sectionPage'>
            <div id='second-section-wrapper'>
              <div id='section-nav'>
                <div className='first-section-nav'>
                  <h4>10 Hours Fasting Every Week</h4>
                  <p className='p-tag'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum necessitatibus possimus tenetur deserunt recusandae quos laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
                  </p>
                 <SecondSectionLinks />
                  <ModalContainer/>
                </div>
                <div className='second-section-nav'>
                  <h4>10 Hours Fasting Every Week</h4>
                  <p className='p-tag'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum necessitatibus possimus tenetur deserunt recusandae quos laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
                  </p>
                 <SecondSectionLinks />
                 <ModalContainer/>
                </div>
                <div className='third-section-nav'>
                  <h4>10 Hours Fasting Every Week</h4>
                  <p className='p-tag'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum necessitatibus possimus tenetur deserunt recusandae quos laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
                  </p>
                  <SecondSectionLinks />
                <ModalContainer/>
                </div>
                <div className='fourth-section-nav'>
                  <h4>10 Hours Fasting Every Week</h4>
                  <p className='p-tag'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum necessitatibus possimus tenetur deserunt recusandae quos laudantium eaque similique! Ipsa voluptatem est quasi similique debitis dolores.
                  </p>
                 <SecondSectionLinks/>
                  <ModalContainer/>
                </div>
              </div>
              <div id="section-main-body">
                <div>
                  <h2>Learn Darts</h2>
                </div>
                <div>
                  <p className='p-tag1'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum cumque tenetur nemo unde quis veniam modi officia error iusto incidunt reprehenderit labore corrupti blanditiis a tempora repellendus! Natus consequuntur possimus, fugiat deleniti fuga ipsam doloremque voluptate dolorum, illo commodi cupiditate.
                   </p>
                </div>
              </div>
               <ModalContainer/> 
              <div id="section-icons">
                <ul>
                  <li className="dots-2" onClick="toggleMenu5()">...</li>
                  <li className="plus-style">+</li>
                  <li className="minus-style">-</li>
                </ul>
               </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SecondPage;