import React from 'react';
import Scroll from 'react-scroll';
import '../css/Landing.css'

class Landing extends React.Component {
	constructor(props, context) {
		super(props, context);
   	this.scrollToRecentProjects = this.scrollToRecentProjects.bind(this);
	}	

	scrollToRecentProjects() {
		let scroll = Scroll.animateScroll;
		let i = document.getElementById("landingfullpage").clientHeight;
		scroll.scrollTo(i, {
			duration: 1000,
			smooth: "easeOutQuint"
		})
	}

	render() {
	  return (
	    <div id="landingfullpage">
	    	<div id="landingtextholder">
	      	<p id="landingtitle">Praneeth Thalla</p>
	      	<p id="landingdescr">Code today. Pioneer tomorrow.</p>
	    	</div>
	    	<div id="landingarrowholder">
	    		<p id="landingarrow" onClick={this.scrollToRecentProjects} className="bounce"><i id="downarrow"></i></p>
	    	</div>
	    </div>
	  );
	}
} 

export default Landing;
