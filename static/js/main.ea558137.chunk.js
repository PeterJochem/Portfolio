(this.webpackJsonpcorkboard=this.webpackJsonpcorkboard||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){e.exports=a(58)},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var o=a(9),n=a(5),r=a(11),i=a(10),s=a(0),l=a.n(s),c=a(13),m=a.n(c),h=a(3),u=a(1),d=(a(20),a(35),a(18)),p=a(14),g=a(21),f=a.n(g),b=(a(16),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage=null}},{key:"render",value:function(){return l.a.createElement("div",{className:"Deep_RL_Description"},l.a.createElement("div",{className:"Banner"},l.a.createElement("div",{className:"bannerName"}," Peter Jochem"),l.a.createElement("div",{className:"moreInfo"},l.a.createElement(h.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),l.a.createElement(h.b,{className:"moreProjectsLink",to:"/projects2"},"More Projects"))),l.a.createElement("div",{id:"paragraph_div"},l.a.createElement("p",null," Insert a grid of images/gifs"),l.a.createElement("h1",null," Learning to Walk on Soft Ground "),l.a.createElement("p",null," This project was motivated by the work of Dan Lynch. He studies optimal control algorithms for legged robots on yielding terrain. Most of the work on legged robotics assumes the ground is a rigid body, but nature is full of materials that exhibit more complicated dynamics. Dans algorithms require a model of how a robots feet interact with the ground. I worked with Juntao He to develop discrete element method (DEM) simulations of a robots feet intruding into a bed of granular material. We then trained a neural network to map the state of the foot to the ground reaction forces and torques exerted by the granular material. This allows us to have a model of the ground which can then be used by Dans optimal control algorithms. "),l.a.createElement("p",null,"The second part of the project involved learning about reinforcement learning, succesively implementing more complicated deep reinforcement learning algorithms, and eventually trying to solve Dans problem via RL. I started out reading Sutton and Barto (link) and building intution about reinforcement learning problems. I implemented DeepQ Learning, and Double DeepQ Learning in order to build up to more complicated temporal diffrence learning algorithms. I then implemented Deep Determinisitc Policy Gradients and then TD3. Finally, I tried to get a working implementation of a Policies Modulating Trajectories Generators (link) architecture for our hopping robot problem."),l.a.createElement("h1",null," Learning a Model of the Ground "),l.a.createElement("p",null,"The ",l.a.createElement("a",{className:"TDynamics_Link",href:"https://li.me.jhu.edu/"}," Terradynamics lab ")," at Georgia Tech has done a lot of work on how animal and robotic feet interact with granular materials. They studies the terradynamics of robotic locomotion. The lab has done experimental work to show how certain granular materials ground reaction forces change as a function of how the foot is oriented and the direction it is moving through the material. Juntao He and I re-created this experimental setup in a discrete element method (DEM) simulation. We could then generate datasets describing how the ground reaction forces and torques change as the foot intrudes through the material. A visualization of what the experimental setup is below."),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column_for_intrusion_gif"},l.a.createElement("img",Object(d.a)({src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/h3pper/createGroundModel/media/intrusion.gif",alt:"Foot Intruding into the Granular Material"},"alt","Foot Intruding Into The Granular Material")))),l.a.createElement("p",null," We used the DEM simulation of the Terradynamics lab experiments to generate a dataset of foots states and the corresponding ground reaction forces and torques as the foot intrudes into the granular material. We want to predict the ground reaction forces and torques as a function of the foots state. Specefically, we want to map the foots angle of attack, orientation angle, depth, x-velocity, z-velocity, and angular velocity to the ground reaction forces and torques that the foot experiences. Other approaches to this include ",l.a.createElement("a",{className:"RFT_Link",href:"https://li.me.jhu.edu/first-terradynamics-resistive-force-theory/"}," resistive force theory (RFT) ")," but even this very sophisticated method does not utilize the foots velocity information. Neural networks offer a computationally tractable way to learn this function taking into account information that RFT is not suited to use."),l.a.createElement("p",null,"We used our DEM dataset to train a neural network to map the foots state to the corresponding ground reaction forces and torques that the ground exerts on the foot. Below are our comparisons of the neural networks predictions to the ground truth DEM data and the RFT calculations. The curves below are from a single run of the foot interacting with the granular material. At each time step, we recorded the foots state along with ground reaction forces and torques. The yellow curve below are the forces and torques as the DEM simulation calcuated them. In blue are the RFT predictions of what the forces and torques should be given as input the current DEM simulations foot state. We plotted in orange the neural network predictions of what the forces and torques should be given the current DEM simulations foot state."),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/h3pper/createGroundModel/validateModel/DEM_RFT_Comparisons/media/velocity_minus_2_results.png",alt:"Learned Mapping Compared to DEM and RFT"}))),l.a.createElement("h1",null," Learning to Walk On Soft Ground "),l.a.createElement("p",null," In order to test Deep RL algorithms for the robot hopping on soft ground, I built a custom OpenAI gym environment. The OpenAI gym project was started in order to facilitate a common standard or benchmark for comparing RL algorithms. An agent has a set of actions it can take to influence the environments state and accumulate reward. The agent must learn how to take actions which maximize its cumulative reward over time. One of the more simple gym environments is the pendulum environment. It features a simple pendulum that the agent must learn how to invert. At each time step, the agent recieves the pendulums angle and can choose to either exert a unit of positive torque or negative torque. Although the problem can be easily solved with a PID controller, it serves as a simple test to see if your agent is learning. I built my gym in ",l.a.createElement("a",{className:"paper_link",href:"https://pybullet.org/wordpress/"}," PyBullet "),", an open source physics engine. It features a hopping robot with an open chain leg. In high level terms, the agents goal is move in the postive x-direction. I found that the exact details of the agents reward function made a huge diffrence in the agents outcome. Roughly speaking, I rewarded the agent for having a larger x-coordinate, a positive x-velocity, and not falling over. I applied both ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.02971"}," Deep Deterministic Policy Gradients ")," and ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/pdf/1802.09477.pdf"}," TD3 ")," to the hopping robot and got interesting results! The agent decided to lock its leg joints and use its foot to generate ground reaction forces. Although this is technically a viable policy, it is far from the natural gait we might have hoped for."),l.a.createElement("p",null,l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.02971"}," Deep Deterministic Policy Gradients ")," (DDPG) is one of the state of the art RL algorithms for continous action spaces. Most of the work in RL has focused on agents who have a discrete number of actions they can take. Some of these discrete action space methods include ",l.a.createElement("a",{className:"paper_link",href:"https://en.wikipedia.org/wiki/Q-learning"}," Q-Learning "),", ",l.a.createElement("a",{className:"paper_link",href:"https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf"}," DeepQ Networks "),", and ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.06461"}," Double DeepQ Learning "),". In our case though, we want to learn how to apply torques to each of the robots motors. We could discretize the set of allowable motor torques but in practice, this does not work well. Instead, we need to use an algorithm designed for continous action spaces. I implemented both DDPG and TD3 for the hopping robot. In order to facilitate testing of DDPG and TD3, I also tried them on the Cheetah and Hopper Environments published by the OpenAI team. Both feature a legged robot that must learn how to locomote by applying a set of motor torques on its joints. This helped me validate the RL algorithms and was also a lot of fun. Below are some of the gaits that the agents learned."),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/hopper_learned_policy.gif",alt:"Learned Gaits in Gym Environments"})),l.a.createElement("div",{class:"column"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/cheetah2.gif",alt:"Learned Gait in OpenAI Gym",className:"OpenAI_gym_results_gif2"}))),l.a.createElement("img",{src:" https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/h3pper_DDPG2.gif",alt:"AI Gym Hopping Robot",className:"intrusion_gif"})))}}]),a}(l.a.Component)),v=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"GridOfPosts"},l.a.createElement("div",{className:"grid-container"},this.props.pageNumber.projects.map((function(e){return l.a.createElement("div",{className:"box"},"  ",e.name,l.a.createElement("a",{href:e.url},l.a.createElement("div",{className:"grid-item",id:e.name},"  ",l.a.createElement(w,{name:e.name,im_url:e.im_url}),"   ")," "))}))))}}]),a}(l.a.Component);v.defaultProps={pageNumber:null};var w=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.getElementById(this.props.name).style.backgroundImage="url("+this.props.im_url+")"}},{key:"render",value:function(){return l.a.createElement("div",{className:"Post"})}}]),a}(l.a.Component);w.defaultProps={name:"me",im_url:""};var y=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage=null}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"portfolio"},l.a.createElement(v,{pageNumber:this.props.pageNumber})))}}]),a}(l.a.Component);y.defaultProps={};var E=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage=null}},{key:"render",value:function(){return l.a.createElement("div",{className:"Deep_RL_Description"},l.a.createElement("div",{className:"Banner"},l.a.createElement("div",{className:"bannerName"}," Peter Jochem"),l.a.createElement("div",{className:"moreInfo"},l.a.createElement(h.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),l.a.createElement(h.b,{className:"moreProjectsLink",to:"/projects2"},"More Projects"))),l.a.createElement(f.a,{url:"https://youtu.be/j5IvaLyz6Rs",controls:"True",className:"HeaderVideo"}),l.a.createElement("div",{id:"paragraph_div"},l.a.createElement("h1",null," Learning to Walk on Soft Ground "),l.a.createElement("p",null," This project was motivated by the work of Dan Lynch. He studies optimal control algorithms for legged robots on yielding terrain. Most of the work on legged robotics assumes the ground is a rigid body, but nature is full of materials that exhibit more complicated dynamics. Dans algorithms require a model of how a robots feet interact with the ground. I worked with Juntao He to develop discrete element method (DEM) simulations of a robots feet intruding into a bed of granular material. We then trained a neural network to map the state of the foot to the ground reaction forces and torques exerted by the granular material. This allows us to have a model of the ground which can then be used by Dans optimal control algorithms. "),l.a.createElement("p",null,"The second part of the project involved learning about reinforcement learning, succesively implementing more complicated deep reinforcement learning algorithms, and eventually trying to solve Dans problem via RL. I started out reading Sutton and Barto (link) and building intution about reinforcement learning problems. I implemented ",l.a.createElement("a",{className:"paper_link",href:"https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf"}," DeepQ Learning "),", and ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.06461"}," Double DeepQ Learning ")," in order to build up to more complicated temporal diffrence learning algorithms. I then implemented ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.02971"}," Deep Deterministic Policy Gradients ")," and then ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/pdf/1802.09477.pdf"}," TD3 "),". Finally, I tried to get a working implementation of a ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1910.02812"}," Policies Modulating Trajectories Generators ")," architecture for our hopping robot problem."),l.a.createElement("h1",null," Learning a Model of the Ground "),l.a.createElement("p",null,"The ",l.a.createElement("a",{className:"TDynamics_Link",href:"https://li.me.jhu.edu/"}," Terradynamics lab ")," at Georgia Tech has done a lot of work on how animal and robotic feet interact with granular materials. They studies the terradynamics of robotic locomotion. The lab has done experimental work to show how certain granular materials ground reaction forces change as a function of how the foot is oriented and the direction it is moving through the material. Juntao He and I re-created this experimental setup in a discrete element method (DEM) simulation. We could then generate datasets describing how the ground reaction forces and torques change as the foot intrudes through the material. A visualization of what the experimental setup is below."),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column_for_intrusion_gif"},l.a.createElement("img",Object(d.a)({src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/h3pper/createGroundModel/media/intrusion.gif",alt:"Foot Intruding into the Granular Material"},"alt","Foot Intruding Into The Granular Material")))),l.a.createElement("p",null," We used the DEM simulation of the Terradynamics lab experiments to generate a dataset of foots states and the corresponding ground reaction forces and torques as the foot intrudes into the granular material. We want to predict the ground reaction forces and torques as a function of the foots state. Specefically, we want to map the foots angle of attack, orientation angle, depth, x-velocity, z-velocity, and angular velocity to the ground reaction forces and torques that the foot experiences. Other approaches to this include ",l.a.createElement("a",{className:"RFT_Link",href:"https://li.me.jhu.edu/first-terradynamics-resistive-force-theory/"}," resistive force theory (RFT) ")," but even this very sophisticated method does not utilize the foots velocity information. Neural networks offer a computationally tractable way to learn this function taking into account information that RFT is not suited to use."),l.a.createElement("p",null,"We used our DEM dataset to train a neural network to map the foots state to the corresponding ground reaction forces and torques that the ground exerts on the foot. Below are our comparisons of the neural networks predictions to the ground truth DEM data and the RFT calculations. The curves below are from a single run of the foot interacting with the granular material. At each time step, we recorded the foots state along with ground reaction forces and torques. The yellow curve below are the forces and torques as the DEM simulation calcuated them. In blue are the RFT predictions of what the forces and torques should be given as input the current DEM simulations foot state. We plotted in orange the neural network predictions of what the forces and torques should be given the current DEM simulations foot state."),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/h3pper/createGroundModel/validateModel/DEM_RFT_Comparisons/media/velocity_minus_2_results.png",alt:"Learned Mapping Compared to DEM and RFT"}))),l.a.createElement("h1",null," Learning to Walk On Soft Ground "),l.a.createElement("p",null," In order to test Deep RL algorithms for the robot hopping on soft ground, I built a custom OpenAI gym environment. The OpenAI gym project was started in order to facilitate a common standard or benchmark for comparing RL algorithms. An agent has a set of actions it can take to influence the environments state and accumulate reward. The agent must learn how to take actions which maximize its cumulative reward over time. One of the more simple gym environments is the pendulum environment. It features a simple pendulum that the agent must learn how to invert. At each time step, the agent recieves the pendulums angle and can choose to either exert a unit of positive torque or negative torque. Although the problem can be easily solved with a PID controller, it serves as a simple test to see if your agent is learning. I built my gym in ",l.a.createElement("a",{className:"paper_link",href:"https://pybullet.org/wordpress/"}," PyBullet "),", an open source physics engine. It features a hopping robot with an open chain leg. What makes my environment diffrent is that I use my model of the soft ground to govern the ground reaction forces and torques on the robots foot. In PyBullet, I track where the foot is, and when it is in contact with the granular material, I apply the ground reaction forces and torques that the model predicts. This allows me to have a highly tractable and realistic simulation of soft ground. Below is an image of what the environments looks like."),l.a.createElement("p",null,"In high level terms, the agents goal is move in the postive x-direction. I found that the exact details of the agents reward function made a huge diffrence in the agents outcome. Roughly speaking, I rewarded the agent for having a larger x-coordinate, a positive x-velocity, and not falling over. I applied both ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.02971"}," Deep Deterministic Policy Gradients ")," and ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/pdf/1802.09477.pdf"}," TD3 ")," to the hopping robot and got interesting results! The agent decided to lock its leg joints and use its foot to generate ground reaction forces. Although this is technically a viable policy, it is far from the natural gait we might have hoped for."),l.a.createElement("p",null,l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.02971"}," Deep Deterministic Policy Gradients ")," (DDPG) is one of the state of the art RL algorithms for continous action spaces. Most of the work in RL has focused on agents who have a discrete number of actions they can take. Some of these discrete action space methods include ",l.a.createElement("a",{className:"paper_link",href:"https://en.wikipedia.org/wiki/Q-learning"}," Q-Learning "),", ",l.a.createElement("a",{className:"paper_link",href:"https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf"}," DeepQ Networks "),", and ",l.a.createElement("a",{className:"paper_link",href:"https://arxiv.org/abs/1509.06461"}," Double DeepQ Learning "),". In our case though, we want to learn how to apply torques to each of the robots motors. We could discretize the set of allowable motor torques but in practice, this does not work well. Instead, we need to use an algorithm designed for continous action spaces. I implemented both DDPG and TD3 for the hopping robot. In order to facilitate testing of DDPG and TD3, I also tried them on the Cheetah and Hopper Environments published by the OpenAI team. Both feature a legged robot that must learn how to locomote by applying a set of motor torques on its joints. This helped me validate the RL algorithms and was also a lot of fun. Below are some of the gaits that the agents learned."),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/hopper_learned_policy.gif",alt:"Learned Gaits in Gym Environments"})),l.a.createElement("div",{class:"column"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/cheetah2.gif",alt:"Learned Gait in OpenAI Gym",className:"OpenAI_gym_results_gif2"}))),l.a.createElement("p",{className:"p_describe_pyBullet_ddpg"},"Once I had validated that my implementation of DDPG worked using the OpenAI teams environments, I applied the algorithm to the new environment in PyBullet. My custom"),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column_for_pybullet_gif"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/h3pper_DDPG2.gif",alt:"Custom PyBullet Hopping Robot"})))))}}]),a}(l.a.Component),D=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={results:{}},e}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"Site"},l.a.createElement(I,null)))}}]),a}(l.a.Component),_={projects:[{name:"ROS Navigation",url:"https://github.com/PeterJochem/Turtlebot_Navigation",im_url:"https://raw.githubusercontent.com/PeterJochem/Turtlebot_Navigation/master/images/tbot_pentagon.gif"},{name:"Deep RL",url:"https://peterjochem.github.io/Portfolio#/Deep_RL",github_url:"https://github.com/PeterJochem/Deep_RL",im_url:"https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/hopper_learned_policy_cropped.gif"},{name:"Mobile Manipulator",url:"https://github.com/PeterJochem/Mobile_Manipulator",im_url:"https://peterjochem.github.io/myImages/kuka.gif"},{name:"Terminator",url:"https://github.com/ME495-EmbeddedSystems/final-project-terminator",im_url:"https://peterjochem.github.io/myImages/terminator.png"},{name:"Chess AI",url:"https://github.com/PeterJochem/Chess_AI",im_url:"https://peterjochem.github.io/myImages/chess.gif"},{name:"Sawyer Ping Pong",url:"https://github.com/PeterJochem/Sawyer_Ping_Pong",im_url:"https://peterjochem.github.io/myImages/ping_trajectory.png"},{name:"DeepQ Learning",url:"https://github.com/PeterJochem/Grid_World_RL",im_url:"https://peterjochem.github.io/myImages/NN_Large.png"},{name:"Triple Pendulum",url:"https://github.com/PeterJochem/TriplePendulum",im_url:"https://peterjochem.github.io/myImages/pend.gif"}]},k={projects:[{name:"RRT",url:"https://github.com/PeterJochem/RRT",im_url:"https://peterjochem.github.io/myImages/all_Points_3.png"},{name:"CBirch 97",url:"https://github.com/PeterJochem/CBirch_97",im_url:"https://peterjochem.github.io/myImages/CBirch97.gif"},{name:"Canny Edge Detector",url:"https://github.com/PeterJochem/CannyEdgeDetector",im_url:"https://peterjochem.github.io/myImages/Lena_Processed.png"},{name:"GAN",url:"https://github.com/PeterJochem/MNIST_GAN",im_url:"https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/images/GAN.gif"},{name:"Neural Network Snake",url:"https://github.com/PeterJochem/Snake",im_url:"https://peterjochem.github.io/myImages/Snake.png"}]},P=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.title="Peter Jochem"}}]),Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(u.c,null,l.a.createElement("div",null,l.a.createElement(u.a,{exact:!0,path:"/",render:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Banner"},l.a.createElement("div",{className:"bannerName"}," Peter Jochem"),l.a.createElement("div",{className:"moreInfo"},l.a.createElement(h.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),l.a.createElement(h.b,{className:"moreProjectsLink",to:"/projects2"},"More Projects"))),l.a.createElement("div",{className:"portfolio"}," ",l.a.createElement(y,{pageNumber:_}),"  "))}}),l.a.createElement(u.a,{exact:!0,path:"/projects2",render:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Banner"},l.a.createElement("div",{className:"bannerName"}," Peter Jochem"),l.a.createElement("div",{className:"moreInfo"},l.a.createElement(h.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),l.a.createElement(h.b,{className:"moreProjectsLink",to:"/"},"More Projects")),l.a.createElement("div",{className:"BannerImage"}," ")),l.a.createElement("div",{className:"portfolio"}," ",l.a.createElement(y,{pageNumber:k}),"  "))}}),l.a.createElement(u.a,{exact:!0,path:"/Deep_RL",render:function(){return l.a.createElement("div",{className:"Deep_RL_Description"}," ",l.a.createElement(E,null)," ")}}),l.a.createElement(u.a,{exact:!0,path:"/ROS_Navigation_Stack",render:function(){return l.a.createElement("div",{className:"ROS_Navigation_Stack_Description"}," ",l.a.createElement(b,null)," ")}}),l.a.createElement(u.a,{exact:!0,path:"/ResumePage",render:function(){return l.a.createElement("div",{className:"resumeBackground"},l.a.createElement("iframe",{id:"myResumeFrame",src:"http://docs.google.com/viewer?url=https://raw.githubusercontent.com/PeterJochem/PeterJochem.github.io/6331c077619a0b5593287d0fcead9a932102b569/Resume.pdf&embedded=true",width:"600",height:"780",frameborder:"0"}))}}))))}}]),a}(l.a.Component),I=t.default=P;m.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ea558137.chunk.js.map