import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Site from "./index.js";

class App extends React.Component {
    constructor(){
    super();
    this.state = {
     results: {}
    }
    }
 
   render () {
	return (
		<div className="App">
		<div className="Site">
		<Site />
		</div>
		</div>
	)
   }
}
export default App;
// ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}>< App /></BrowserRouter>, document.getElementById('root'));
