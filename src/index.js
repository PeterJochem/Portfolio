import React from "react";
import ReactDOM from 'react-dom';
import {render} from "react-dom";
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import {Document, Page} from 'react-pdf';
import './index.css'; 
import './DescriptionPages/Deep_RL_Description.css'
import './DescriptionPages/ROS_Navigation_Stack_Description'
// import './DescriptionPages/Deep_RL_Description.css'
import './portfolio.css';
import Portfolio from "./portfolio";
import Deep_RL_Description from "./DescriptionPages/Deep_RL_Description"
import ROS_Navigation_Stack_Description from "./DescriptionPages/ROS_Navigation_Stack_Description"
import App from "./App.js";
import resumePDF from "./Resume.pdf";

const page1 = {
  projects: [
    
    {
        name: "ROS Navigation",
        url: "https://github.com/PeterJochem/Turtlebot_Navigation",
        im_url: "https://raw.githubusercontent.com/PeterJochem/Turtlebot_Navigation/master/images/tbot_pentagon.gif",
    	hover_url: "https://raw.githubusercontent.com/PeterJochem/Turtlebot_Navigation/master/images/tbot_pentagon.gif"
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
        im_url: "https://peterjochem.github.io/myImages/kuka.gif",
	hover_url: "https://peterjochem.github.io/myImages/kuka.gif"
    },
    {
        name: "Terminator",
        url: "https://github.com/ME495-EmbeddedSystems/final-project-terminator",
        im_url: "https://peterjochem.github.io/myImages/terminator.png",
	hover_url: "https://peterjochem.github.io/myImages/terminator.png"
     },
     {
        name: "Chess AI",
        url: "https://github.com/PeterJochem/Chess_AI",
        im_url: "https://peterjochem.github.io/myImages/chess.gif",
	hover_url: "https://peterjochem.github.io/myImages/chess.gif"
    }, 
    {
        name: "Sawyer Ping Pong",
        url: "https://github.com/PeterJochem/Sawyer_Ping_Pong",
        im_url: "https://peterjochem.github.io/myImages/ping_trajectory.png",
	hover_url: "https://peterjochem.github.io/myImages/ping_trajectory.png"
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
        im_url: "https://peterjochem.github.io/myImages/pend.gif",
	hover_url: "https://peterjochem.github.io/myImages/pend.gif"
    },
]
}

const page2 = {
  projects: [
    {
        name: "RRT",
        url: "https://github.com/PeterJochem/RRT",
        im_url: "https://peterjochem.github.io/myImages/all_Points_3.png",
    	hover_url: "https://peterjochem.github.io/myImages/all_Points_3.png"
    },
     {
        name: "CBirch 97",
        url: "https://github.com/PeterJochem/CBirch_97",
        im_url: "https://peterjochem.github.io/myImages/CBirch97.gif",
	hover_url: "https://peterjochem.github.io/myImages/CBirch97.gif"
    },
    {
        name: "Canny Edge Detector",
        url: "https://github.com/PeterJochem/CannyEdgeDetector",
        im_url: "https://peterjochem.github.io/myImages/Lena_Processed.png",
	hover_url: "https://peterjochem.github.io/myImages/Lena_Processed.png"
    }, 
    {
        name: "DeepQ Learning",
        url: "https://github.com/PeterJochem/Grid_World_RL",
        im_url: "https://peterjochem.github.io/myImages/NN_Large.png",
	hover_url: "https://peterjochem.github.io/myImages/NN_Large.png"
    },
    {
        name: "Neural Network Snake",
        url: "https://github.com/PeterJochem/Snake",
        im_url: "https://peterjochem.github.io/myImages/Snake.png",
	hover_url: "https://peterjochem.github.io/myImages/Snake.png"
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
		  	
			<Link className = "myResumeLink" to ="/ResumePage" >
                                Resume
                        </Link>

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

		     	<Link className = "myResumeLink" to ="/ResumePage" >
                        	Resume
			</Link>

		     	<Link className = "moreProjectsLink" to ="/" >
                                More Projects
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

	    	<Route exact path='/ResumePage' render={() => (
		 <object data="https://raw.githubusercontent.com/PeterJochem/PeterJochem.github.io/6331c077619a0b5593287d0fcead9a932102b569/Resume.pdf" type="application/pdf" width="100%" height="100%">
      <p>Alternative text - include a link <a href="https://raw.githubusercontent.com/PeterJochem/PeterJochem.github.io/6331c077619a0b5593287d0fcead9a932102b569/Resume.pdf">to the PDF!</a></p>
  </object>
		)} />
	  
	    
	  </div>
	  </Switch>
	  </HashRouter>
    );
  }
}
export default Site;

ReactDOM.render( <App />, document.getElementById('root') );
