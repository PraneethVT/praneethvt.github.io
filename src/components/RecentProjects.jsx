import React from 'react';
import '../css/RecentProjects.css'

class RecentProjects extends React.Component {
	render() {
		return(
			<div id="recentprojectsfullpage">
				<div class="container">
					<div class="row">
				    <p id="latestprojectstitle">My latest projects</p>
				  </div>

				 	<div id="projectslist" class="row align-items-center">
				   	<div class="col">
				      <div id="thallaiothumbnail" className="projectsbox">
				      	<div className="projectsboxoverlay">
				      		<p>Thalla.io</p>
				      		<button className="projectsboxviewbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div class="col">
				    	<div id="timetweetthumbnail" className="projectsbox">
				    		<div className="projectsboxoverlay">
				    			<p>Up To The Twinute</p>
				    			<button className="projectsboxviewbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div class="col">
				    	<div id="upwardhqthumbnail" className="projectsbox">
				      	<div className="projectsboxoverlay">
				      		<p>Upward HQ</p>
				      		<button className="projectsboxviewbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				  </div>

				  <div class="row justify-content-md-center">
				  	<button id="moreprojectsbutton">More Projects</button>
				  </div>
				</div>
			</div>
		)
	}
}

export default RecentProjects;
