import React from 'react';
import Arrow from './Arrow.jsx';
import '../css/RecentProjects.css';

class RecentProjects extends React.Component {
	render() {
		let arrowUpProps = {
			direction: "up",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "landing"
		};


		let arrowDownProps = {
			direction: "down",
			borderStyle: "solid",
			borderColor: "black",
			scrollToComponentName: "experience"
		};

		return(
			<div id="recents">
				<div id="recents_arrowupholder">
					<Arrow arrowProps={arrowUpProps}/>
				</div>

				<div className="container">
					<div className="row">
				    <p id="recents_title">My latest projects</p>
				  </div>
				 	
				 	<div id="recents_list" className="row align-items-center">
				   	<div className="col">
				      <div id="recents_thallaio" className="recents_box">
				      	<div className="recents_boxoverlay">
				      		<p>Thalla.io</p>
				      		<button className="recents_viewbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div className="col">
				    	<div id="recents_uptothetwinute" className="recents_box">
				    		<div className="recents_boxoverlay">
				    			<p>Up To The Twinute</p>
				    			<button className="recents_viewbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				    <div className="col">
				    	<div id="recents_upward" className="recents_box">
				      	<div className="recents_boxoverlay">
				      		<p>Upward HQ</p>
				      		<button className="recents_viewbutton">View Project</button>
				      	</div>
				      </div>
				    </div>
				  </div>

				  <div className="row justify-content-md-center">
				  	<button id="recents_morebutton">More Projects</button>
				  </div>
				</div>

				<div id="recents_arrowdownholder">
					<Arrow arrowProps={arrowDownProps}/>
				</div>
			</div>
		)
	}
}

export default RecentProjects;
