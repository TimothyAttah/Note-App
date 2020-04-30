import React from 'react';

import Home from './HomePage/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SecondPage from './second/SecondPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/SecondPage' exact component={SecondPage}/>
      </div>
    </Router>

  );
}



export default App;
