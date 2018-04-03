import React from 'react';
import Arrow from './Arrow.jsx';
import '../css/Landing.css';

class Landing extends React.Component {
	render() {
		let arrowProps = {
			direction: "down",
			borderStyle: "solid",
			borderColor: "white",
			scrollToComponentName: "recents"
		};

	  return (
	    <div id="landing">
	    	<div id="landing_titleholder">
	      	<p id="landing_title">Praneeth Thalla</p>
	      	<p id="landing_caption">Code today. Pioneer tomorrow.</p>
	    	</div>
	    	<div id="landing_arrowholder"> 
	    		<Arrow arrowProps={arrowProps}/>
	    	</div>
	    </div>
	  );
	}
} 

export default Landing;
