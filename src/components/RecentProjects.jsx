import React from 'react';
import '../css/RecentProjects.css'

class RecentProjects extends React.Component {
	render() {
		return(
			<div id="recentprojectsfullpage">
				<div class="container">
					<div class="row">
				    <p id="latestprojectstext">My latest projects</p>
				  </div>

				 	<div class="row align-items-center">
				   	<div class="col">
				      <div className="projectsbox">
				      	<div className="projectboxcontents">
				      		<p>Thalla.io</p>
				      		<button className="projectsbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div class="col">
				    	<div className="projectsbox">
				    		<div className="projectboxcontents">
				    			<p>Time Tweet</p>
				    			<button className="projectsbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div class="col">
				    	<div className="projectsbox">
				      	<div className="projectboxcontents">
				      		<p>Upward HQ</p>
				      		<button className="projectsbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				  </div>
				  

				  <div class="row justify-content-md-center">
				  	<button id="moreprojects">More Projects</button>
				  </div>
				</div>
			</div>
		)
	}
}

export default RecentProjects;
