import React from 'react';
import Arrow from './Arrow.jsx';
import '../css/AboutMe.css';

class AboutMe extends React.Component {
	render() {
		let arrowUpProps = {
			direction: "up",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "experience"
		}

		return(
			<div id="aboutme">
				<div id="aboutme_arrowupholder">
					<Arrow arrowProps={arrowUpProps}/>
				</div>
				<div id="blogbuttoncontainer">
					<p>Come back soon to visit my blog!</p>
				</div>

				<p id="bottom_note">Powered by Caffeine 2017</p>
    	</div>
		)
	}
}

export default AboutMe;
