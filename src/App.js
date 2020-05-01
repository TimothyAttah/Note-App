import React from 'react';

import Home2 from './HomePage/Home2'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SecondPage from './second/SecondPage';



function App() {
  
  return (
		<Router>
			<div className="App">
				<Route path="/" exact component={Home2} />
        <Route path="/SecondPage" exact component={SecondPage} />
			</div>
		</Router>
	);
}



export default App;
