import React from "react";
import ReactDOM from 'react-dom';
import {render} from "react-dom";
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import './index.css'; 
import './DescriptionPages/Deep_RL_Description.css'
import './DescriptionPages/ROS_Navigation_Stack_Description'
// import './DescriptionPages/Deep_RL_Description.css'
import './portfolio.css';
import Portfolio from "./portfolio";
import Deep_RL_Description from "./DescriptionPages/Deep_RL_Description"
import ROS_Navigation_Stack_Description from "./DescriptionPages/ROS_Navigation_Stack_Description"
import App from "./App.js";

const page1 = {
  projects: [
    
    {
        name: "ROS Navigation",
        url: "https://github.com/PeterJochem/Turtlebot_Navigation",
	im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/tbot_pentagon.gif",
    	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/tbot_pentagon.gif"
    },
    {
        name: "GoBot",
        url: "https://github.com/PeterJochem/Go_Bot",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/GoBot_Demo.gif",
        hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/GoBot_Demo.gif"
     },
    {
        name: "Deep RL",
        url: "https://peterjochem.github.io/Portfolio#/Deep_RL",
	github_url: "https://github.com/PeterJochem/Deep_RL",
	im_url: "https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/hopper_learned_policy_cropped.gif",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/hopper_learned_policy_cropped.gif"
    },
    {
        name: "Mobile Manipulator",
        url: "https://github.com/PeterJochem/Mobile_Manipulator",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/kuka.gif",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/kuka.gif"
    },
    {
        name: "Terminator",
        url: "https://github.com/ME495-EmbeddedSystems/final-project-terminator",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/terminator.png",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/terminator.png"
     },
     {
        name: "Chess AI",
        url: "https://github.com/PeterJochem/Chess_AI",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/chess.gif",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/chess.gif"
    }, 
    {
        name: "GAN",
        url: "https://github.com/PeterJochem/MNIST_GAN",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/GAN_downsampled3.gif",
    	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/GAN_downsampled3.gif"
    },
    {
       	name: "Triple Pendulum",
        url: "https://github.com/PeterJochem/TriplePendulum",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/pend.gif",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/pend.gif"
    },
]
}

const page2 = {
  projects: [
    {
        name: "RRT",
        url: "https://github.com/PeterJochem/RRT",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/all_Points_3.png",
    	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/all_Points_3.png"
    },
     {
        name: "CBirch 97",
        url: "https://github.com/PeterJochem/CBirch_97",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/CBirch97.gif",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/CBirch97.gif"
    },
    {
        name: "Canny Edge Detector",
        url: "https://github.com/PeterJochem/CannyEdgeDetector",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/Lena_Processed.png",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/Lena_Processed.png"
    }, 
    {
        name: "DeepQ Learning",
        url: "https://github.com/PeterJochem/Grid_World_RL",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/NN_Large.png",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/NN_Large.png"
    },
    {
        name: "Neural Network Snake",
        url: "https://github.com/PeterJochem/Snake",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/Snake.png",
	hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/Snake.png"
    },
    {
        name: "Sawyer Ping Pong",
        url: "https://github.com/PeterJochem/Sawyer_Ping_Pong",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/ping_trajectory.png",
        hover_url: "https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/ping_trajectory.png"
     }
  ]
}


class Site extends React.Component {

componentDidMount(){
	document.title = "Peter Jochem" // Set the browser tab name
}

constructor(props) {
	super(props);
}

  render() {
    return (
	    <HashRouter>
	    <Switch>
       <div>
          
	    <Route exact path='/' render={() => (
            	
		<div>
			<div className = "Banner"> 	
		  	<div className = "bannerName"> Peter Jochem 
		  	</div>
		   	<div className = "moreInfo">
		  	
			<a className = "myResumeLink" href="https://github.com/PeterJochem/Portfolio/blob/master/src/Resume.pdf" >
                                Resume
                        </a>

		  	<Link className = "moreProjectsLink" to ="/projects2" >  
		    		More Projects
		    	</Link>
		        </div>	
		</div>

		<div className = "portfolio"> <Portfolio  pageNumber = {page1} />  </div>	
		</div>	

    		)} />
		
	     <Route exact path='/projects2' render={() => (
                <div>
			<div className = "Banner">
                        <div className = "bannerName"> Peter Jochem
                        </div>
                        <div className = "moreInfo">

		     	<a className = "myResumeLink" href="https://github.com/PeterJochem/Portfolio/blob/master/src/Resume.pdf" >
                                Resume
                        </a>

		     	<Link className = "moreProjectsLink" to ="/" >
                                Main
                        </Link>
		     	
                        </div>
                        <div className = "BannerImage"> </div>
                </div>
                
		<div className = "portfolio"> <Portfolio  pageNumber = {page2} />  </div>		
		</div>

                )} />

	    	<Route exact path='/Deep_RL' render={() => (
                        <div className = "Deep_RL_Description"> <Deep_RL_Description /> </div>
                )} />

	    	<Route exact path='/ROS_Navigation_Stack' render={() => (
                        <div className = "ROS_Navigation_Stack_Description"> <ROS_Navigation_Stack_Description /> </div>
                )} />

	  
	    
	  </div>
	  </Switch>
	  </HashRouter>
    );
  }
}
export default Site;

ReactDOM.render( <App />, document.getElementById('root') );
