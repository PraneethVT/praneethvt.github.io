import React from 'react';
import Arrow from '../Arrow.jsx';
import ExperienceDescription from '../ExperienceDescription.jsx'
import '../../css/main/Experience.css';

class Experience extends React.Component {
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
				{/* <Arrow arrowProps={arrowUpProps}/> */}
				
				<p id="experienceHeader">Experience</p>

				<div className="experienceDiv">
					<ExperienceDescription experienceName="fannie"/>
				</div>
				<div className="experienceDiv">
					<ExperienceDescription experienceName="upward"/>
				</div>
				<div className="experienceDiv">
					<ExperienceDescription experienceName="kaiser"/>
				</div>

				{/* <Arrow arrowProps={arrowDownProps}/> */}
			</div>
		);
	}
}

export default Experience;
