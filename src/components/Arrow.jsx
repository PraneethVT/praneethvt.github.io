import React from 'react';
import Scroll from 'react-scroll';
import '../css/Arrow.css'

class Arrow extends React.Component {
	constructor(props) {
		super(props);
		this.scrollToComponent = this.scrollToComponent.bind(this);
		this.arrowProps = props.arrowProps;
	}

	componentDidMount() {
		this.componentHeight = document.getElementById(this.arrowProps.scrollToComponentName).offsetTop;
	}

	scrollToComponent() {
		Scroll.animateScroll.scrollTo(this.componentHeight, {
			duration: 1000,
			smooth: "easeOutQuint"
		});
	}

	render() {

		let transformation = (this.arrowProps.direction === "up") ? "rotate(225deg)": "rotate(45deg)";
		let arrowStyle = {
			"borderStyle": this.arrowProps.borderStyle,
			"borderColor": this.arrowProps.borderColor,
			"transform": transformation,
			"WebKitTransform": transformation
		}

		return(
	    <p id="bounceholder" onClick={this.scrollToComponent}><i id="arrow" style={arrowStyle}></i></p>
		);
	}
}

export default Arrow;
