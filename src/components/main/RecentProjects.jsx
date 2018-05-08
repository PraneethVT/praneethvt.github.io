import React from 'react';
import Arrow from '../Arrow.jsx';
import '../../css/main/RecentProjects.css';

class RecentProjects extends React.Component {
	render() {
		let arrowUpProps = {
			direction: "up",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "landing",
			placement: "top"
		};


		let arrowDownProps = {
			direction: "down",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "experience",
			placement: "bottom"
		};

		return(
			<div id="recentProjects">
				  <p id="recentProjectsHeader">Recent Projects</p>
				 	
					<div id="recentProjectsThallaIO" className="recentProjectsBox">
						<div className="recentProjectsBoxOverlay">
							<p className="recentProjectsBoxName">Thalla.io</p>
							{/* <button className="recentProjectsBoxViewButton">View Project</button> */}
						</div>
					</div>

					<div id="recentProjectsTweetTime" className="recentProjectsBox">
						<div className="recentProjectsBoxOverlay">
							<p className="recentProjectsBoxName">Tweet Time</p>
							{/* <button className="recentProjectsBoxViewButton">View Project</button> */}
						</div>
					</div>

					<div id="recentProjectsUpward" className="recentProjectsBox">
						<div className="recentProjectsBoxOverlay">
							<p className="recentProjectsBoxName">Upward HQ</p>
							{/* <button className="recentProjectsBoxViewButton">View Project</button> */}
						</div>
					</div>

				  	{/* <button id="recentProjectsMoreButton">More Projects</button> */}

				 {/* <Arrow arrowProps={arrowDownProps}/> */}
			</div>
		)
	}
}

export default RecentProjects;
