import React from 'react';
import Arrow from '../Arrow.jsx';
import '../../css/main/Landing.css';

class Landing extends React.Component {
	constructor() {
		super();
		this.printOtherLetters = this.printOtherLetters.bind(this);
		this.printLetters = this.printLetters.bind(this);
		this.msg = "    Praneeth Thalla";
		this.msg2 = "Code today. Pioneer tomorrow.";
		this.j = 0;
		this.i = 0;
	}
	
	componentDidMount() {
		this.printLetters();
		setTimeout(this.printOtherLetters, 2000);
	}

	printLetters() {
		if (this.i < this.msg.length) {
			document.getElementById("landingWelcomeMessage").innerHTML += this.msg.charAt(this.i);
			this.i++;
			setTimeout(this.printLetters, 75);
		}
	}

	printOtherLetters() {
		if (this.j < this.msg2.length) {
			document.getElementById("landingWelcomeCaption").innerHTML += this.msg2.charAt(this.j);
			this.j++;
			setTimeout(this.printOtherLetters, 50);
		}
	}
	
	render() {
		let arrowDownProps = {
			direction: "down",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "recentProjects",
			placement: "bottom"
		};

	  return (
	    <div id="landing">
	    	
				<div id="landingWelcomeMessageHolder">
	      	<p id="landingWelcomeMessage"></p>
	      	<p id="landingWelcomeCaption"></p>
	    	</div>
	    	
				<div id="landingArrow">
					<Arrow arrowProps={arrowDownProps}/>
				</div>
			</div>
	  );
	}
} 

export default Landing;
