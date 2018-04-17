import React from 'react';
import Arrow from '../Arrow.jsx';
import '../../css/main/Landing.css';

class Landing extends React.Component {
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
	      	<p id="landingWelcomeMessage">Praneeth Thalla</p>
	      	<p id="landingWelcomeCaption">Code today. Pioneer tomorrow.</p>
	    	</div>
	    	
				<div id="landingArrow">
					<Arrow arrowProps={arrowDownProps}/>
				</div>
			</div>
	  );
	}
} 

export default Landing;
