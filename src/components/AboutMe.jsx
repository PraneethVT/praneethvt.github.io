import React from 'react';
import '../css/AboutMe.css'

class AboutMe extends React.Component {
	render() {
		return(
			<div id="about">
    		<p id="aboutname">Praneeth Thalla</p>
      	<p id="aboutdescription">Software Engineer, Web Designer, and Computer Scientist</p>
    		<img id="aboutpic" alt="About pic" ></img>
    		<p id="aboutcontent">
					<strong>Hi there!</strong>
					<br></br>
					<br></br>
					My name is Praneeth Thalla, and I've spent most of my adult life building full stack web applications. My interests primarily include designing interactive front-end interfaces and exploring innovative ideas in the field of web development. 
    		</p>
    	</div>
		)
	}
}

export default AboutMe;
