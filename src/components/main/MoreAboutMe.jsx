import React from 'react';
import Arrow from '../Arrow.jsx';
import '../../css/main/MoreAboutMe.css';

class MoreAboutMe extends React.Component {
	render() {
		let arrowUpProps = {
			direction: "up",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "experience",
			placement: "top"
		}

		return(
			<div id="moreAboutMe">
				<Arrow arrowProps={arrowUpProps}/>
				<div id="blogMessageContainer">
					<p>Come back soon to visit my blog!</p>
				</div>

				<p id="footnote">Powered by Caffeine 2017</p>
    	</div>
		)
	}
}

export default MoreAboutMe;
