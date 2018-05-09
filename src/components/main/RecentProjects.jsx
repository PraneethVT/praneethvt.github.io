import React from 'react';
import Arrow from '../Arrow.jsx';
import Slider from 'react-slick';
import '../../css/main/RecentProjects.css';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "back" }}
      onClick={onClick}
    />
  );
}

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

		const settings = {
      dots: true,
			infinite: true,
			fade: true,
      speed: 500,
      slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SamplePrevArrow/>,
			prevArrow: <SamplePrevArrow/>
    };

		return(
			<div id="recentProjects">
				<p id="recentProjectsHeader">Recent Projects</p>
				 	
				<div id="sliderStuff">
				<Slider {...settings}>
					<div id="recentProjectsThallaIO" className="recentProjectsBox">
						<div className="recentProjectsBoxOverlay">
							<p className="recentProjectsBoxName">Thalla.io</p>
							<button className="recentProjectsBoxViewButton">View Project</button>
						</div>
					</div>
					
					<div id="recentProjectsTweetTime" className="recentProjectsBox">
						<div className="recentProjectsBoxOverlay">
							<p className="recentProjectsBoxName">Tweet Time</p>
							<button className="recentProjectsBoxViewButton">View Project</button>
						</div>
					</div>
					
					<div id="recentProjectsUpward" className="recentProjectsBox">
						<div className="recentProjectsBoxOverlay">
							<p className="recentProjectsBoxName">Upward HQ</p>
							<button className="recentProjectsBoxViewButton">View Project</button>
						</div>
					</div>
        </Slider>
				</div>

				

				  	{/* <button id="recentProjectsMoreButton">More Projects</button> */}

				 {/* <Arrow arrowProps={arrowDownProps}/> */}
			</div>
		)
	}
}

export default RecentProjects;
