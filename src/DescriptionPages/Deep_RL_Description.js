import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { HashRouter, Link, Switch} from "react-router-dom";
import '../portfolio.css'; // Tell webpack that Button.js uses these styles
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import './../index.css'; // Tell webpack that Button.js uses these styles
import './../portfolio.css';

export default class Deep_RL_Description extends React.Component {
       constructor(props) {
       		super(props);
                this.componentDidMount = this.componentDidMount.bind(this);
        }
	
	// Set the browser tab name
	componentDidMount(){	   	
		// document.body.style.backgroundImage = "url()";
		document.body.style.backgroundImage = null;	
	}
	
	state = { 
	}
   render () {                                   
      return ( 
		      <div className = "Deep_RL_Description">
	      	     
	      	      		<div className = "Banner">
                	        	<div className = "bannerName"> Peter Jochem
                        	</div>
                  
	      		<div className = "moreInfo">
                        	<Link className = "myResumeLink" to ="/ResumePage" >
                                	Resume
                        	</Link>

                        	<Link className = "moreProjectsLink" to ="/projects2" >
                                	More Projects
                        	</Link>
                        </div> 
	      	      </div>
	      	
	      <p> Project Description Here </p>
	      
	      
	      </div>
      )
   }
}

// Type Check properties here
//Deep_RL_Description.propTypes = {
//};
//Deep_RL_Description.defaultProps = {
//};


