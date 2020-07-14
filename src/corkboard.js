import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import './corkboard.css'; // Tell webpack that Button.js uses these styles
import {BrowserRouter, Route} from 'react-router-dom';
import doc from './links.yaml';

const allLinks = {
  links: [
    {
        title: "Protein Folding",
        url: "https://www.nytimes.com/2017/12/26/science/protein-design-david-baker.html",
    },
    { 
    	title: "Paper Microscope",
	url: "https://www.newyorker.com/magazine/2015/12/21/through-the-looking-glass-annals-of-science-carolyn-kormann",
    },
    {
       title: "Ok, Computer, Smell This",
       url: "https://www.newyorker.com/tech/elements/ok-computer-tell-me-what-this-smells-like",
    },
    {
       title: "Can Financial Engineering Cure Cancer?",
       url: "https://www.ted.com/talks/roger_stein_a_bold_new_way_to_fund_drug_research",
    },
    {
      title: "Neural Network Beats Dermatalogists",
      url: "https://www.nature.com/articles/nature21056",
    },
    {
      title: "Surgeon Performs Surgery via VR",
      url: "https://www.ted.com/talks/nadine_hachach_haram_how_augmented_reality_could_change_the_future_of_surgery?utm_campaign=social&utm_medium=referral&utm_source=facebook.com&utm_content=talk&utm_term=technology",
    },
    {
	title: "Atomic Origami: Designer Proteins", 
	url: "https://www.sciencemag.org/news/2016/07/protein-designer-aims-revolutionize-medicines-and-materials",
    },
    {
	title: "Drug Design via Supercomputer",
        url: "https://www.atomwise.com/",	
    },
    {
	title: "(Google's) Image Recognition Used to Screen Patients for Diabetic Retinopathy in India",
        url: "https://www.wired.com/2017/06/googles-ai-eye-doctor-gets-ready-go-work-india/",
    },
    {
	title: "Algorithm Used for Robotic Movement Finds Use in Designing Proteins",
        url: "https://www.scientificamerican.com/article/how-robot-math-and-smartphones-led-researchers-to-a-drug-discovery-breakthrough/?utm_source=facebook&utm_medium=social&utm_campaign=sa-editorial-social&utm_content&utm_term=tech_partner_text_free",
    },
    {
	title: "AI...The Doctor Angry Patients Can't Attack",
	url: "http://www.scmp.com/week-asia/business/article/2113455/artificial-intelligence-doctors-chinese-patients-cant-beat",	
    },
    {
	title: "Convoluted Neural Network Diagnosis Skin Cancer (Better than Clinicans??)",
        url: "https://www.nature.com/articles/nature21056",
    },
    {
	title: "Can You Reach a Computer to be Funny?",
        url: "https://ideas.ted.com/can-you-teach-a-computer-to-be-funny/?utm_campaign=social&utm_medium=referral&utm_source=facebook.com&utm_content=ideas-blog&utm_term=technology",
    },
    {
       title: "Can ML Write Poetry?",
       url: "https://ideas.ted.com/was-this-poem-written-by-a-computer-or-human/?utm_campaign=social&utm_medium=referral&utm_source=facebook.com&utm_content=ideas-blog&utm_term=technology",
    },
    {
	title: "Computers Compose Classical Music",
        url: "http://www.bbc.com/future/story/20140808-music-like-never-heard-before",
    },
    {
	title: "Using Proteins to Trace Authorship",
        url: "https://www.newyorker.com/magazine/2018/11/26/do-proteins-hold-the-key-to-the-past",
    },
    {
	title: "Is Spotify Creating AI to Compose Music?",
        url: "http://www.newsweek.com/artificial-intelligence-changing-music-799794",
    },
    {
	title: "ML and Engineering Design",
        url: "https://ideas.ted.com/machines-might-actually-be-better-than-humans-at-creativity-so-whats-left-for-us-to-do/",
    },
    {
	title: "The Engineer who is Starting an AI Church. Yes, you Read that Correctly",
    	url: "https://www.wired.com/story/anthony-levandowski-artificial-intelligence-religion/"
    },  
    {
	title: "AI in...the NFL",
        url: "https://www.wired.com/2016/01/football-coaches-are-turning-to-ai-for-help-calling-plays/"
    },
    {
        title: "Obama on Neural Networks and the Future of AI",
        url: "https://www.wired.com/2016/10/president-obama-mit-joi-ito-interview/"
    },
    {
	title: "Alpha_Go Movie",
        url: "https://www.youtube.com/watch?v=WXuK6gekU1Y"
    },
    {
    	title: "Alpha_Star",
        url: "https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii"
    },
    {
	title: "DeepRL for Backgammon",
        url: "https://cling.csd.uwo.ca/cs346a/extra/tdgammon.pdf"
    }
  ]
};


export default class Corkboard extends React.Component {
        // Set the browser tab name
	componentDidMount(){
	   	
	//document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/03/15/20/40/morning-2147400_960_720.jpg)";
		

	}
	
	state = { 
	}
   render () {                                   
      return (
        <div className = "Corkboard">
	      
  		<div>
    		<h1> Welcome to Peter's Corkboard </h1>
    		<h2>Interesting Links </h2>
	      	
		<ul>
      		{allLinks.links.map( (nextLink) => {
        		return <li> <a href = {nextLink.url} >
				{nextLink.title} 
			</a>
			</li>
     		}
		)}
    		</ul>

	        </div>

	      	
        </div>
      )
   }
}
