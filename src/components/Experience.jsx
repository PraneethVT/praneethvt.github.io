import React from 'react';
import '../css/Experience.css'

class Experience extends React.Component {
	render() {
		return(
			<div>
				<div id="projectsheader">Experience</div>
				<div id="projectslist">
					<div id="fannie" className="project">
				    <img id="fanniepic" className="projectpic" alt="Fannie pic"></img>
				    <div id="fanniedescr" className="projectdescr">
				      <h3 className="projectsnames"><a href="http://www.fanniemae.com/portal/index.html">Fannie Mae (2017)</a></h3>
				      <p>I currently work as a Software Engineer at Fannie Mae, primarily focusing on backend development using Java/Python. I've only worked here for a couple months so far, but I've already done some pretty interesting work. The main two projects that I've worked on are service virtualization and integrating machine learning into a Jenkins build pipeline.
				      <br></br>
				      <br></br>
				      With service virtualization, my team and I worked closely to create a virtual "dummy" application, one that mimicked the REST API responses of a real Fannie Mae application. This, in essence, created a proxy that acted like the real application, but it could be polled infinitely without disturbing production environments. This yielded a powerful and dynamic testing playground. I primarily used the open-source tool Mountebank to configure our environments and write scripts in Python that would setup the virtual service. 
				      <br></br>
				      <br></br>
				      My second big project in Fannie Mae, and the one I am currently working on, is leading a team to integrate machine learning and artificial intelligence principles into our Dev Ops toolchain. There are many problems that could be tackled using ML considering the vast amount of data that is available in Fannie Mae, but the one I have chosen to tackle is analyzing the usage of our Jenkins build servers to determine if a build will pass or fail depending on metrics such as CPU speed, RAM, and the size of the commit/build.</p>
				    </div>
				  </div>

				  <div id="upward" className="project">
				    <img id="upwardpic" className="projectpic" alt="Upward pic"></img>
				    <div id="upwarddescr" className="projectdescr">
							<h3 className="projectsnames"><a href="https://www.upwardhq.com">Upward (2016)</a></h3>
							<p>I cofounded Upward in 2016 to allow professionals to interact better in a work-based environment. Upward tackled the core issues of slow communication in an office by replacing email accounts with an innovative messaging platform.
							<br></br>
				      <br></br>
							My main role in Upward was backend development. I led and maintained the production of backend services using endpoints written in Node.js and Express. I also managed a database of users, messages, and emails using MongoDB, as well as created an innovative search engine using Elasticsearch. This search engine allowed users to search within a shareable link in any message, a feature which even Google search did not have!
				      <br></br>
				      <br></br>
				      Upward was my first experience in the startup world. It was a completely new experience for me, from the basic steps of a having an idea to implementing the product in the real world. I learned a lot about full-stack development, specifically using the MEAN stack and understanding its implications in building dynamic web sites and web applications. But most importantly, Upward introduced me to the highs and lows of entrepreneurship - the insane work hours dedicated to the product, the fast-paced decision making process, and the thrill in creating that solves a real problem in society. </p>
						</div>
					</div>

				  <div id="kaiser" className="project">
				    <img id="kaiserpic" className="projectpic" alt="Kaiser pic"></img>
				    <div id="kaiserdescr" className="projectdescr">
				      <h3 className="projectsnames"><a href="https://healthy.kaiserpermanente.org/">Kaiser Permanente (2015)</a></h3>
				      <p>My first steps into programming involved solving a problem I found with my university: the lack of a simple app to calculate my GPA. There were plenty of options on the Play Store (I had a Nexus 5), but most of them were unintuitive, cluttered with ads, lacked modern design principles, or just simply didn't work. 
				      <br></br>
				      <br></br>
				      Thus I started a journey to create my own app, while at the same time learning the fundamentals of Android Development. My full development process, at times difficult and frustrating, exposed me to the method of finding an issue in my life and tackling it, showing an early display of my problem-solving spirit.</p> 
				    </div>
				  </div>

					<div id="gpacalulator" className="project">
				    <img id="gpacalculatorpic" className="projectpic" alt="GPA Calculator pic"></img>
				    <div id="gpacalculatordescr" className="projectdescr">
							<h3 className="projectsnames"><a href="https://play.google.com/store/apps/details?id=com.praneeth.gpacalculator&hl=en">GPA Calculator (2014)</a></h3>
							<p>My first steps into programming involved solving a problem I found with my university: the lack of a simple app to calculate my GPA. There were plenty of options on the Play Store (I had a Nexus 5), but most of them were unintuitive, cluttered with ads, lacked modern design principles, or just simply didn't work. 
				      <br></br>
				      <br></br>
							Thus I started a journey to create my own app, while at the same time learning the fundamentals of Android Development. My full development process, at times difficult and frustrating, exposed me to the method of finding an issue in my life and tackling it, showing an early display of my problem-solving spirit.</p> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;