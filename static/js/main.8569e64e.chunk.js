(this.webpackJsonpcorkboard=this.webpackJsonpcorkboard||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(2),o=a(5),l=a(4),i=a(0),c=a.n(i),s=a(6),m=a.n(s),u=a(1),h=a(12),d=(a(29),a(13),a(7)),p=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"GridOfPosts"},c.a.createElement("div",{className:"grid-container"},this.props.pageNumber.projects.map((function(e){return c.a.createElement("div",{className:"box"}," ",c.a.createElement("div",{className:"PostText"},"  ",e.name," "),c.a.createElement("a",{href:e.url},c.a.createElement("div",{className:"grid-item",id:e.name},"  ",c.a.createElement(g,{name:e.name,im_url:e.im_url})," ")," "))}))))}}]),a}(c.a.Component);p.defaultProps={pageNumber:null};var g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.secondUrl=null,r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r.handleHover=r.handleHover.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.getElementById(this.props.name).style.backgroundImage="url("+this.props.im_url+")";this.secondUrl="url(https://raw.githubusercontent.com/PeterJochem/Portfolio/gh-pages/images/GAN.gif)",console.log(this.secondUrl)}},{key:"handleHover",value:function(e){console.log("Hello World"),this.setState({im_url:this.secondUrl})}},{key:"render",value:function(){return c.a.createElement("div",{className:"Post"})}}]),a}(c.a.Component);g.defaultProps={name:"me",im_url:""};var b=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage=null}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"portfolio"},c.a.createElement(p,{pageNumber:this.props.pageNumber})))}}]),a}(c.a.Component);b.defaultProps={};c.a.Component,a(15);var f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," ",this.props.projectName," "),c.a.createElement("p",null," I implemented a Generative Adversarial Network using Keras. I used the MNIST data set as the target data distribution to generate more instances from. "),c.a.createElement("h1",null," What is a Generative Adversarial Network? "),c.a.createElement("p",null,"A generative adversarial network (GAN) is a class of machine learning frameworks designed by Ian Goodfellow and his colleagues in 2014. Two neural networks contest with each other in a game. Given a training set, this technique learns to generate new data with the same statistics as the training set. I used the MNIST handwritten digits dataset. This is a large dataset of about 70,000 images of handwritten numbers. A really great primer on GANs, their use, and their future can be found ",c.a.createElement("a",{href:"https://arxiv.org/abs/1701.00160",id:"Goodfellow_Primer"}," here ")," "),c.a.createElement("h1",null," Results "),c.a.createElement("p",null,"On my first iteration, I implemented a simple GAN with only a shallow network and no convolutional operators. The results are still pretty cool. They certainly will not fool any humans but the network did learn a crude approximation of the input data distribution. "),c.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/MNIST_GAN/master/simpleNetworkResults.png",alt:"Vanilla GAN"}),c.a.createElement("p",null,"I also implemented a convolutional GAN and got much better results. The image set below shows a handful of images generated by the GAN.",c.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/MNIST_GAN/master/DCGAN_Results.png",alt:"Convolutional GAN"})),c.a.createElement("p",null,"This is a video of the generator evolving. Before starting to train the network, I create and store a random input vector for the generator. Every 100 training cycles, I forward prop this vector through the generator and store the resulting image. Those images are stacked to create a video. "),c.a.createElement("iframe",{width:"600",height:"315",src:"https://www.youtube.com/embed/S1WODtScCKI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}]),a}(c.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," ",this.props.projectName," "),c.a.createElement("p",null," For a course on Lagrangian dynamics, I implemented a simulation of a triple pendulum using Python and sympy. The code can be found at ",c.a.createElement("a",{href:""}," here "),". Below is a video of the resuting simulation. "),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/dSZ0XCMFC5I",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}," "),c.a.createElement("p",null,"I also added a feature to plot multiple triple pendulums at the same time but each having a slighly diffrent initial condition. This shows how dependent the trajectory is on the inital conditions. "),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UMQPzCR5CdQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}," "))}}]),a}(c.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," ",this.props.projectName," "),c.a.createElement("p",null,"I used the ",c.a.createElement("a",{href:"https://github.com/NxRLab/ModernRobotics",id:"Modern_Robotics_Link"},"Modern Robotics")," library and the V-REP simulation enviroment to program a Kuka YouBot to do pick and place tasks. The YouBot is a mobile base with four mecanum wheels and a 5R robot arm. The simulation enviroment gives us position control of each of the wheels and arm joints. I used the Modern Robotics library and a modern screw theoretic approach to plan a trajectory of the arm to pick up the block at an arbitrary location and put it down at an another arbitrary location. The code can be found ",c.a.createElement("a",{href:"https://github.com/PeterJochem/Mobile_Manipulator",id:"github_link"},"here"),"."),c.a.createElement("h1",null," Results "),c.a.createElement("p",null," A video of the YouBot performing the full task can be found below. "),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/oar5Ui4zqd0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}," "))}}]),a}(c.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," ",this.props.projectName," "),c.a.createElement("p",null,"This program plays chess by modeling chess as a Markov decision process. Each piece has a very specefic set of moves it can make given the state of the board. I expand this tree of all immediate possible moves and then used a heuristic scoring function to approximate how likely/desirable each state is. This allows me to compute the state with the highest expected value four to six moves forward in the game tree. Once I have the most desirable state at a leaf in the tree, I simply need to backrack to the immediate move that leads to it. My code can be found ",c.a.createElement("a",{href:"https://github.com/PeterJochem/Chess_AI",id:"github_link"},"here"),"."),c.a.createElement("h1",null," Results "),c.a.createElement("p",null," The system has a mode to let two AIs play against each other as well as the option to let you play against an AI. The results are pretty stunning! For such a brute force approach, the AI is surprisingly robust. I am not much of a chess player, but I often could not beat the AI. That probably speaks more to my chess ability than to that of the AI. I should send it to some friends who really play and see what they think. "))}}]),a}(c.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," ",this.props.projectName," "),c.a.createElement("p",null,"I used OpenAI's cart-pole enviroment to implement a Q-learning agent. I used Tensorflow/Keras to implement the neural network. A pole is attached by an un-actuated joint to a cart, which moves along a frictionless track. The system is controlled by applying a force of +1 or -1 to the cart. The pendulum starts upright, and the goal is to prevent it from falling over. A reward of +1 is provided for every timestep that the pole remains upright. The episode ends when the pole is more than 15 degrees from vertical, or the cart moves more than 2.4 units from the center."),c.a.createElement("h1",null," Results "),c.a.createElement("p",null,"The results are pretty amazing! The neural network learned to balance the pole pretty well! Below is a graph of the agents average reward per episode as it is learning the policy along with a gif of the final learned policy."),c.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Cart_Pole_RL/master/rewardPerEpisode.png",alt:"Cart Pole Learning"}),c.a.createElement("img",{src:"https://raw.githubusercontent.com/PeterJochem/Cart_Pole_RL/master/stable.gif",alt:"Cart Pole Learned Policy"}))}}]),a}(c.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.componentDidMount=r.componentDidMount.bind(Object(d.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," ",this.props.projectName," "),c.a.createElement("p",null,"I implemented a simple reinforcement learning enviroment. There are a set of states, arranged in a grid. The agent can move from its current location to any neighboring cell. The agents current location is denoted by the dark blue cell. If the agent leaves the grid, it recieves a penalty and when it reaches the goal state it recieves a reward. The agent must learn to navigate from its starting point to the goal state. On each episode, the agent has a new, random starting position. The goal state is always the same though. First, I implemented the simpler, table based Q learning algorithm. After I got this to work, I used a neural network to learn and store the same function as the table. I used Keras to build and train the neural network."),c.a.createElement("h1",null," Results "),c.a.createElement("p",null,"Below is a video of the agent learning how to navigate the enviroment! I was really happy with the results! The agent learns how to navigate the grid world in a short period of a few minutes. If I could do it again, I would use a diffrent package for the graphics. The Python graphics class is pretty slow and seems to be where a lot of the time is being spent. But hey, it was the end of the quarter rush and it worked!"),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Npsyv295kGU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}]),a}(c.a.Component),j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={results:{}},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Site"},c.a.createElement(M,null)))}}]),a}(c.a.Component),P={projects:[{name:"Triple Pendulum Simulation",url:"#/TriplePendulumSimulation",github_url:"https://github.com/PeterJochem/TriplePendulum",im_url:"https://peterjochem.github.io/myImages/pend.gif"},{name:"Mobile Manipulator",url:"#/MobileManipulator",github_url:"https://github.com/PeterJochem/Mobile_Manipulator",im_url:"https://peterjochem.github.io/myImages/kuka.gif"},{name:"Terminator",url:"https://github.com/ME495-EmbeddedSystems/final-project-terminator",im_url:"https://peterjochem.github.io/myImages/terminator.png"},{name:"Chess AI",url:"#ChessAI",github_url:"https://github.com/PeterJochem/Chess_AI",im_url:"https://peterjochem.github.io/myImages/chess.gif"},{name:"Neural Network Snake",url:"https://github.com/PeterJochem/Snake",im_url:"https://peterjochem.github.io/myImages/Snake.png"},{name:"Rapidly-Exploring Random Tree",url:"https://github.com/PeterJochem/RRT",im_url:"https://peterjochem.github.io/myImages/all_Points_3.png"},{name:"Sawyer Ping Pong",url:"https://github.com/PeterJochem/Sawyer_Ping_Pong",im_url:"https://peterjochem.github.io/myImages/ping_trajectory.png"},{name:"DeepQ Learning",url:"#/DeepQLearning",github_url:"https://github.com/PeterJochem/Grid_World_RL",im_url:"https://peterjochem.github.io/myImages/NN_Large.png"}]},k={projects:[{name:"Cart Pole RL",url:"#/Cart_Pole_RL",github_url:"https://github.com/PeterJochem/Cart_Pole_RL",im_url:"https://peterjochem.github.io/myImages/cartPole.gif"},{name:"CBirch 97",url:"https://github.com/PeterJochem/CBirch_97",im_url:"https://peterjochem.github.io/myImages/CBirch97.gif"},{name:"Canny Edge Detector",url:"https://github.com/PeterJochem/CannyEdgeDetector",im_url:"https://peterjochem.github.io/myImages/Lena_Processed.png"},{name:"Acrobot RL",url:"https://github.com/PeterJochem/Acrobot",im_url:"https://peterjochem.github.io/myImages/learnedPolicy.gif"},{name:"GAN",github_url:"https://github.com/PeterJochem/MNIST_GAN",url:"#/GAN",im_url:"https://peterjochem.github.io/myImages/DCGAN_Results.png"}]},I=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.title="Peter Jochem"}}]),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(h.c,null,c.a.createElement("div",null,c.a.createElement(h.a,{exact:!0,path:"/",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/projects2"},"More Projects"))),c.a.createElement("div",{className:"portfolio"}," ",c.a.createElement(b,{pageNumber:P})," "))}}),c.a.createElement(h.a,{exact:!0,path:"/projects2",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/"},"More Projects")),c.a.createElement("div",{className:"BannerImage"}," ")),c.a.createElement("div",{className:"portfolio"}," ",c.a.createElement(b,{pageNumber:k}),"  "))}}),c.a.createElement(h.a,{exact:!0,path:"/GAN",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/"},"More Projects")),c.a.createElement("div",{className:"BannerImage"}," ")),c.a.createElement("div",{className:"ProjectDescription"}," ",c.a.createElement(f,{projectName:"GAN"}),"  "))}}),c.a.createElement(h.a,{exact:!0,path:"/TriplePendulumSimulation",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/"},"More Projects")),c.a.createElement("div",{className:"BannerImage"}," ")),c.a.createElement("div",{className:"ProjectDescription"}," ",c.a.createElement(v,{projectName:"Triple Pendulum Simulation"}),"  "))}}),c.a.createElement(h.a,{exact:!0,path:"/MobileManipulator",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/"},"More Projects")),c.a.createElement("div",{className:"BannerImage"}," ")),c.a.createElement("div",{className:"ProjectDescription"}," ",c.a.createElement(E,{projectName:"Mobile Manipulator"}),"  "))}}),c.a.createElement(h.a,{exact:!0,path:"/ChessAI",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/"},"More Projects")),c.a.createElement("div",{className:"BannerImage"}," ")),c.a.createElement("div",{className:"ProjectDescription"}," ",c.a.createElement(y,{projectName:"ChessAI"}),"  "))}}),c.a.createElement(h.a,{exact:!0,path:"/Cart_Pole_RL",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/"},"More Projects")),c.a.createElement("div",{className:"BannerImage"}," ")),c.a.createElement("div",{className:"ProjectDescription"}," ",c.a.createElement(N,{projectName:"Cart Pole RL"}),"  "))}}),c.a.createElement(h.a,{exact:!0,path:"/DeepQLearning",render:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Banner"},c.a.createElement("div",{className:"bannerName"}," Peter Jochem"),c.a.createElement("div",{className:"moreInfo"},c.a.createElement(u.b,{className:"myResumeLink",to:"/ResumePage"},"Resume"),c.a.createElement(u.b,{className:"moreProjectsLink",to:"/"},"More Projects")),c.a.createElement("div",{className:"BannerImage"}," ")),c.a.createElement("div",{className:"ProjectDescription"}," ",c.a.createElement(w,{projectName:"DeepQ Learning"}),"  "))}}),c.a.createElement(h.a,{exact:!0,path:"/ResumePage",render:function(){return c.a.createElement("div",{className:"resumeBackground"},c.a.createElement("iframe",{id:"myResumeFrame",src:"http://docs.google.com/viewer?url=https://raw.githubusercontent.com/PeterJochem/PeterJochem.github.io/6331c077619a0b5593287d0fcead9a932102b569/Resume.pdf&embedded=true",width:"600",height:"780",framebordr:"0"}))}}))))}}]),a}(c.a.Component),M=t.default=I;m.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8569e64e.chunk.js.map