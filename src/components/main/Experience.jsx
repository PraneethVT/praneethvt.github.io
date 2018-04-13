import React from 'react';
import Arrow from '../Arrow.jsx';
import ExperienceDescription from '../ExperienceDescription.jsx'
import '../../css/main/Experience.css';

class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.slideIndex = 0;
		this.plusDivs = this.plusDivs.bind(this);
		this.minusDivs = this.minusDivs.bind(this);
		this.showDivs = this.showDivs.bind(this);
		this.currentDiv = this.currentDiv.bind(this);
	}
	
	componentDidMount() {
		this.currentDiv(this.slideIndex);
	}

	plusDivs() {
		this.showDivs(this.slideIndex += 1);
	}

	minusDivs() {
		this.showDivs(this.slideIndex -= 1);
	}

	showDivs(slideNum) {
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
			scrollToComponentName: "recentProjects",
			placement: "top"
		};

		let arrowDownProps = {
			direction: "down",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "moreAboutMe",
			placement: "bottom"
		}

		return(
			<div id="experience">
				<Arrow arrowProps={arrowUpProps}/>
				
				<p id="experienceHeader">Experience</p>
			
				<div id="slidesNavButtonHolder"> 
					<button className="w3-button demo" onClick={() => this.currentDiv(0)}>2017</button> 
					<button className="w3-button demo" onClick={() => this.currentDiv(1)}>2016</button> 
					<button className="w3-button demo" onClick={() => this.currentDiv(2)}>2015</button>
				</div>

				<div id="slidesContainer">
						<div className="mySlides">
							<ExperienceDescription experienceName="fannie"/>
						</div>
						<div className="mySlides">
							<ExperienceDescription experienceName="upward"/>
						</div>
						<div className="mySlides">
							<ExperienceDescription experienceName="kaiser"/>
						</div>
				</div>

				<Arrow arrowProps={arrowDownProps}/>
			</div>
		);
	}
}

export default Experience;
