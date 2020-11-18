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
	      
	      <div id="paragraph_div">
	      <h1> Motivation </h1>
	      <p> This project was motivated by the work of Dan Lynch. He studies optimal control algorithms for legged robots on yielding terrain. Most of the work on legged robotics assumes the ground is a rigid body, but nature is full of materials that exhibit more complicated dynamics. Dans algorithms require a model of how a robots feet interact with the ground. I worked with Juntao He to develop discrete element method (DEM) simulations of a robots feet intruding into a bed of granular material. We then trained a neural network to map the state of the foot to the ground reaction forces and torques exerted by the granular material. This allows us to have a model of the ground which can then be used by Dans optimal control algorithms.                 
	      </p>
	      <h1>
	      Prior Work
	      </h1>
	      <p>
	      Chen Li at Georgia Tech has done a lot of work on how animal and robotic feet interact with granular materials. He studies the terradynamics of robotic locomotion. His lab has done experimental work to show how certain granular materials ground reaction forces change as a function of how the foot is oriented and the direction it is moving through the material. Juntao He and I re-created this experimental setup in a DEM simulation. We could then generate datasets describing how the ground reactions forces and torques change as the foot intrudes through the material.          
	      </p>

	      <h1>
	      Our Machine Learning Problem   	
	      </h1>
	      <p>
	      We used the DEM simulation of Chen Lis experiments to generate a dataset of the foots state as it intrudes into the granular material. We want to predict the ground reaction forces as a function of    
	      </p>


	      </div> 
	      
	      </div>
      )
   }
}

// Type Check properties here
//Deep_RL_Description.propTypes = {
//};
//Deep_RL_Description.defaultProps = {
//};


