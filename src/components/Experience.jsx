import React from 'react';
import Arrow from './Arrow.jsx';
import ExperienceDescription from './ExperienceDescription.jsx'
import '../css/Experience.css';

class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.slideIndex = 1;
		this.plusDivs = this.plusDivs.bind(this);
		this.minusDivs = this.minusDivs.bind(this);
		this.showDivs = this.showDivs.bind(this);
	}
	
	componentDidMount() {
		this.showDivs(this.slideIndex);
	}

	plusDivs() {
		//let rightAnimation = document.getElementById("experience_description");
		//rightAnimation.className = "w3-animate-right";
		this.showDivs(this.slideIndex += 1);
	}

	minusDivs() {
		//let leftAnimation = document.getElementById("experience_description");
		//leftAnimation.className = "w3-animate-left";
		this.showDivs(this.slideIndex -= 1);
	}

	showDivs(slideNum) {
		console.log(slideNum);
		let slidesElements = document.getElementsByClassName("mySlides");
		if (slideNum > slidesElements.length) {
			this.slideIndex = 1;
		} else if (slideNum < 1) {
			this.slideIndex = slidesElements.length;
		} 
		
		for (let i = 0; i < slidesElements.length; i++) {
						slidesElements[i].style.display = "none"; 
		}

		slidesElements[this.slideIndex - 1].style.backgroundColor = "block"; 
	}

	currentDiv(num) {
		let slidesElements = document.getElementsByClassName("mySlides");
		for (let i = 0; i < slidesElements.length; i++) {
			slidesElements[i].style.display = "none";
		}
		slidesElements[num].style.display = "block";

		let dots = document.getElementsByClassName("demo");
		for (let i = 0; i < dots.length; i++) {
			dots[i].style.backgroundColor = "";
			dots[i].style.color = "#000000";
		}

		dots[num].style.color = "#ffffff";
		dots[num].style.backgroundColor = "#2196F3";
	}
	
	render() {
		let arrowUpProps = {
			direction: "up",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "recents"
		};

		let arrowDownProps = {
			direction: "down",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "aboutme"
		}

		

		return(
			<div id="experience">
				<div id="experience_arrowupholder">
					<Arrow arrowProps={arrowUpProps}/>
				</div>
				<p id="experience_title">Experience</p>
			
				<div id="somebuttoncontainer"> 
					<button className="w3-button demo" onClick={() => this.currentDiv(0)}>2017</button> 
					<button className="w3-button demo" onClick={() => this.currentDiv(1)}>2016</button> 
					<button className="w3-button demo" onClick={() => this.currentDiv(2)}>2015</button>
				</div>

				<div id="slides_container">
						{/* <div className="slides_buttons"><p id="left_button_holder" onClick={this.minusDivs}><i id="left_button"></i></p></div> */}
						
						<div className="mySlides">
							<ExperienceDescription experienceName="fannie"/>
						</div>
						<div className="mySlides">
							<ExperienceDescription experienceName="upward"/>
						</div>
						<div className="mySlides">
							<ExperienceDescription experienceName="kaiser"/>
						</div>
						
						{/*<div className="slides_buttons"><p id="right_button_holder" onClick={this.plusDivs}><i id="right_button"></i></p></div>*/}

						
				</div>

				

				<div id="experience_arrowdownholder">
					<Arrow arrowProps={arrowDownProps}/>
				</div>
			</div>
		);
	}
}

export default Experience;
