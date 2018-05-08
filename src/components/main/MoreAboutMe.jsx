import React from 'react';
import Arrow from '../Arrow.jsx';
import '../../css/main/MoreAboutMe.css';

class MoreAboutMe extends React.Component {
	render() {
		let arrowUpProps = {
			direction: "up",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "landing",
			placement: "top"
		}

		return(
			<div id="moreAboutMe">
				{/* <Arrow arrowProps={arrowUpProps}/> */}
				<div id="blogMessageGrid">
					<div>
						<p id="blogMessage">Come back soon to visit my blog!</p>
					</div>
				</div>

				<p id="footnote">Powered by Caffeine 2017</p>
    	</div>
		)
	}
}

export default MoreAboutMe;
