import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import {HashRouter, Link, Switch} from "react-router-dom";
import '../portfolio.css'; 
import './../portfolio.css';
import './../index.css';

export default class Deep_RL_Description extends React.Component {
       constructor(props) {
       		super(props);
                this.componentDidMount = this.componentDidMount.bind(this);
        }
	
	componentDidMount(){	   	
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

	     <div className="HeaderVideoContainer" > 
		     <ReactPlayer url="https://youtu.be/j5IvaLyz6Rs" controls="True" className="HeaderVideo" />
	     </div>

	     <div id="paragraph_div">
      	   
	      <h1> Learning to Walk on Soft Ground - Overview </h1>
	      <p> This project was motivated by the work of <a href="https://robotics.northwestern.edu/people/profiles/students/lynch-dan.html" className="paper_link"> Dan Lynch</a>. He studies optimal control algorithms for legged robots on yielding terrain. Most of the work on legged robotics assumes the ground is a rigid body, but nature is full of materials that exhibit more complicated dynamics. Dan&apos;s algorithms require a model of how a robot&apos;s feet interact with the ground. I worked with Juntao He to develop discrete element method (DEM) simulations of a robot&apos;s feet intruding into a bed of granular material. We then trained a neural network to map the state of the foot to the ground reaction forces and torques exerted by the granular material. This allows us to have a model of the ground which can then be used by Dan&apos;s optimal control algorithms. For more technical details, feel free to check out the <a href="https://github.com/PeterJochem/Deep_RL" className="paper_link"> Github repo</a>. A more in depth video describing the project can also be found <a href="https://www.youtube.com/watch?v=pYh5rTPOqvk" className="paper_link">here</a>. </p>

	      <p>

	      	The second part of the project involved learning about reinforcement learning, succesively implementing more complicated deep reinforcement learning algorithms, and eventually trying to solve Dan&apos;s problem via RL. I started out reading <a className="paper_link" href="http://incompleteideas.net/book/the-book.html"> Sutton&apos;s and Barto&apos;s Reinforcement Learning </a> and building intution about reinforcement learning problems. I implemented <a className="paper_link" href="https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf"> DeepQ Learning </a>, and <a className="paper_link" href="https://arxiv.org/abs/1509.06461"> Double DeepQ Learning </a> in order to build up to more complicated temporal diffrence learning algorithms. I then implemented <a className="paper_link" href="https://arxiv.org/abs/1509.02971"> Deep Deterministic Policy Gradients </a> and then <a className="paper_link" href="https://arxiv.org/pdf/1802.09477.pdf"> TD3 </a>. Finally, I tried to get a working implementation of a <a className="paper_link" href="https://arxiv.org/abs/1910.02812"> Policies Modulating Trajectories Generators </a> architecture for our hopping robot problem.   
	      </p>

	      <h1> Learning a Model of the Ground </h1>
              <p>
              The <a className="TDynamics_Link" href={'https://li.me.jhu.edu/'}> Terradynamics lab </a> at Georgia Tech has done a lot of work on how animal and robotic feet interact with granular materials. They studies the terradynamics of robotic locomotion. The lab has done experimental work to show how certain granular materials ground reaction forces change as a function of how the foot is oriented and the direction it is moving through the material. Juntao He and I re-created this experimental setup in a discrete element method (DEM) simulation. We could then generate datasets describing how the ground reaction forces and torques change as the foot intrudes through the material. A visualization of what the experimental setup is below.  
	      </p>
		
	      <div class="row">
                <div class="column_for_intrusion_gif">
                        <img src="https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/h3pper/createGroundModel/media/intrusion.gif" alt="Foot Intruding into the Granular Material" alt="Foot Intruding Into The Granular Material"/>
        </div>
</div>


              <p> We used the DEM simulation of the Terradynamics lab experiments to generate a dataset of foot states and the corresponding ground reaction forces and torques as the foot intrudes into the granular material. We want to predict the ground reaction forces and torques as a function of the foot&apos;s state. Specefically, we want to map the foot&apos;s angle of attack, orientation angle, depth, x-velocity, z-velocity, and angular velocity to the ground reaction forces and torques that the foot experiences. Other approaches to this include <a className="RFT_Link" href={'https://li.me.jhu.edu/first-terradynamics-resistive-force-theory/'}> resistive force theory (RFT) </a> but even this very sophisticated method does not utilize the foots velocity information. Neural networks offer a computationally tractable way to learn this function taking into account information that RFT is not suited to use.
              </p>
	<p>
		We used our DEM dataset to train a neural network to map the foot&apos;s state to the corresponding ground reaction forces and torques that the ground exerts on the foot. Below are our comparisons of the neural network&apos;s predictions to the ground truth DEM data and the RFT calculations. The curves below are from a single run of the foot interacting with the granular material. At each time step, we recorded the foots&apos; state along with ground reaction forces and torques. The yellow curves below are the forces and torques as the DEM simulation calcuated them. In blue are the RFT predictions of what the forces and torques should be given as input the current DEM simulation&apos;s foot state. We plotted in orange the neural network&apos;s predictions of what the forces and torques should be given the current DEM simulation&apos;s foot state.  
	      </p>

		
	<div class="row">
        	<div class="column">
                	<img src="https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/h3pper/createGroundModel/validateModel/DEM_RFT_Comparisons/media/velocity_minus_2_results.png" alt="Learned Mapping Compared to DEM and RFT"/>
        </div>
</div>

<h1> Learning to Walk On Soft Ground </h1>

	      <p> In order to test Deep RL algorithms for the robot hopping on soft ground, I built a custom OpenAI gym environment. The OpenAI gym project was started in order to facilitate a common standard or benchmark for comparing RL algorithms. An agent has a set of actions it can take to influence the environment&apos;s state and accumulate reward. The agent must learn how to take actions which maximize its cumulative reward over time. One of the more simple gym environments is the pendulum environment. It features a simple pendulum that the agent must learn how to invert. At each time step, the agent recieves the pendulum&apos;s angle and can choose to either exert a unit of positive torque or negative torque. Although the problem can be easily solved with a PID controller, it serves as a simple test to see if your agent is learning. I built my gym in <a className="paper_link" href="https://pybullet.org/wordpress/"> PyBullet </a>, an open source physics engine. It features a hopping robot with an open chain leg. What makes my environment different is that I use my model of the soft ground to govern the ground reaction forces and torques on the robot&apos;s foot. In PyBullet, I track where the foot is, and when it is in contact with the granular material, I apply the ground reaction forces and torques that the model predicts. This allows me to have a highly tractable and realistic simulation of soft ground. Below is an image of what the environments looks like.
</p>
	
	
	<p>
	      In high level terms, the agents goal is move in the postive x-direction. I found that the exact details of the agents reward function made a huge diffrence in the agent&apos;s outcome. Roughly speaking, I rewarded the agent for having a larger x-coordinate, a positive x-velocity, and not falling over. I applied both <a className="paper_link" href="https://arxiv.org/abs/1509.02971"> Deep Deterministic Policy Gradients </a> and <a className="paper_link" href="https://arxiv.org/pdf/1802.09477.pdf"> TD3 </a> to the hopping robot and got interesting results! The agent decided to lock its leg joints and use only its foot to generate ground reaction forces. Although this is technically a viable policy, it is far from the natural gait we might have hoped for.                        
	</p>

	      <p>
		<a className="paper_link" href="https://arxiv.org/abs/1509.02971"> Deep Deterministic Policy Gradients </a> (DDPG) is one of the state of the art RL algorithms for continous action spaces. Most of the work in RL has focused on agents who have a discrete number of actions they can take. Some of these discrete action space methods include <a className="paper_link" href="https://en.wikipedia.org/wiki/Q-learning"> Q-Learning </a>, <a className="paper_link" href="https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf"> DeepQ Networks </a>, and <a className="paper_link" href="https://arxiv.org/abs/1509.06461"> Double DeepQ Learning </a>. In our case though, we want to learn how to apply torques to each of the robots motors. We could discretize the set of allowable motor torques but in practice, this does not work well. Instead, we need to use an algorithm designed for continous action spaces. I implemented both DDPG and TD3 for the hopping robot. In order to facilitate testing of DDPG and TD3, I also tried them on the Cheetah and Hopper Environments published by the OpenAI team. Both feature a legged robot that must learn how to locomote by applying a set of motor torques on its joints. This helped me validate the RL algorithms and was also a lot of fun. Below are some of the gaits that the agents learned.         
	      </p>

<div class="row">
 	<div class="column">
   		<img src="https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/hopper_learned_policy.gif" alt="Learned Gaits in Gym Environments"/>
	</div>
	<div class="column">
  		<img src="https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/cheetah2.gif" alt="Learned Gait in OpenAI Gym" className="OpenAI_gym_results_gif2"/>
 	</div>
</div>

<p className="p_describe_pyBullet_ddpg">
	Once I had validated my implementation of DDPG using the OpenAI teams environments, I applied the algorithm to the new environment in PyBullet. My custom hopping robot environment approximates Dan&apos;s robot. As of 2020, PyBullet does not support granular materials. So, I used the ground model from part one to simulate the soft ground in PyBullet. This allowed me to have a computationally tractable model of soft ground which I could use for reinforcement learning. I used both DDPG and TD3 in the new environment. Below, on the left, are some the learned gaits. Below on the right is a visualization of the soft ground I later added.             
</p>


<div class="row">
        <div class="column">
                <img src="https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/h3pper_DDPG2.gif" alt="Learned Gaits in Gym Environments"/>
        </div>
        <div class="column">
                <img src="https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/h3pper/gym-hopping_robot/images/hopper_in_sand.png" alt="Learned Gait in OpenAI Gym" className="OpenAI_gym_results_gif2"/>
        </div>
</div>

<p className="p_describe_pyBullet_pmtg">
	I then tried to implement a <a className="paper_link" href="https://arxiv.org/abs/1910.02812"> Policies Modulating Trajectory Generators </a> architecture for the hopping robot on soft ground. This architecture allows us to incorporate prior insight about what the robot&apos;s desired trajectory should be. The agent learns to control a new dynamical system, that of the robot and its controller rather than the robot directly. This results in learning good policies much faster. We modified Dan&apos;s optimal open-loop controller to be our trajectory generator. At each time step, the agent can modify parameters that define the open loop controller as well as add modulation terms to the ouput of the trajectory generator. In our case, our agent has a trajectory generator which is very well suited for the problem at hand but the trajectory generator need not be so well engineered. The original PMTG paper used a relatively approximate trajectory generator and still achieved good results. Think of the the trajectory generator as being near the desired solution and then letting the agent learn how to modify it to work fully. Unfortunately, I get the software setup but could not get the entire system to work!                             
</p>

</div>
</div>
      )
   }
}

