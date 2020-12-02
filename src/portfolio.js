import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import './portfolio.css'; 

class GridOfPosts extends React.Component {
        componentDidMount(){}
        state = {}

   render () {
      return (
	
	      <div className = "GridOfPosts"> 
              <div className="grid-container">
	   	
	      {this.props.pageNumber.projects.map( (project) => {
                        return  <div className = "box">  {project.name}
				<a href = {project.url} >
              		 		<div className="grid-item" id = {project.name}>  <Post name={project.name} im_url = {project.im_url} /> </div> 
				</a>             
			 </div>
                }
                )}
	      </div>   	 
	      </div>
      )
   }
}

GridOfPosts.propTypes = {
        pageNumber: PropTypes.node.isRequired,
};

GridOfPosts.defaultProps = {
	pageNumber: null,
};


class Post extends React.Component {
	constructor(props) {
   		super(props);	
		this.componentDidMount = this.componentDidMount.bind(this);
	}

        componentDidMount(){
		var myElement = document.getElementById(this.props.name);	
		myElement.style.backgroundImage = "url(" + this.props.im_url + ")";
        }
        
	state = {}

   render () {
      return (
        <div className = "Post"/> 
      )
   }
}

// Type check the props
Post.propTypes = {
	// No built in image type, image: React.PropTypes.image
	// Alternative would be to store the URL/file location of the image
	name: PropTypes.string.isRequired,
	im_url: PropTypes.string.isRequired
};

Post.defaultProps = {
	name: 'me',
	im_url: ''
};

export default class Portfolio extends React.Component {
       constructor(props) {
       		super(props);
                this.componentDidMount = this.componentDidMount.bind(this);
        }
	
	componentDidMount(){
		document.body.style.backgroundImage = null;	
	}
	
	state = {}
   render () {                                   
      return (
	 
	      <div>
	      	<div className = "portfolio"> 
	      		<GridOfPosts pageNumber={this.props.pageNumber} />	
	      </div>
	      </div>
      )
   }
}

// Type check the props
Portfolio.propTypes = {
	pageNumber: PropTypes.element.isRequired,
};

Portfolio.defaultProps = {
	/* This describes if we are using the first or second page
	pageNumber: 1 */
};
