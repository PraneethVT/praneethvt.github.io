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
				<Arrow arrowProps={arrowUpProps}/>

				<div className="container">
					<div className="row">
				    <p id="recentProjectsHeader">My latest projects</p>
				  </div>
				 	
				 	<div className="row align-items-center">
				   	<div className="col">
				      <div id="recentProjectsThallaIO" className="recentProjectsBox">
				      	<div className="recentProjectsBoxOverlay">
				      		<p>Thalla.io</p>
				      		<button className="recentProjectsBoxViewButton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div className="col">
				    	<div id="recentProjectsTweetTime" className="recentProjectsBox">
				    		<div className="recentProjectsBoxOverlay">
				    			<p>Tweet Time</p>
				    			<button className="recentProjectsBoxViewButton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div className="col">
				    	<div id="recentProjectsUpward" className="recentProjectsBox">
				      	<div className="recentProjectsBoxOverlay">
				      		<p>Upward HQ</p>
				      		<button className="recentProjectsBoxViewButton">View Project</button>
				      	</div>
				      </div>
				    </div>
				  </div>

				  <div className="row justify-content-md-center">
				  	<button id="recentProjectsMoreButton">More Projects</button>
				  </div>
				</div>

				<Arrow arrowProps={arrowDownProps}/>
			</div>
		)
	}
}

export default RecentProjects;
