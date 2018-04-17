import React from 'react';
import '../css/ExperienceDescription.css';
import fanniepic from '../images/fannie.jpg';
import upwardpic from '../images/upward.jpg';
import kaiserpic from '../images/kaiser.png';

class ExperienceDescription extends React.Component {
  constructor(props) {
    super(props);
    
    switch(props.experienceName) {
      case "fannie": 
        this.img_id = "fanniePic";
        this.img_alt = "Fannie Mae Pic";
        this.img_src = fanniepic;
        this.experience_company = <a href="http://www.fanniemae.com/portal/index.html">Fannie Mae</a>;
        this.experience_role = <p>Software Engineer, <i>Since Fall 2017</i></p>;
        this.experience_location = "Reston, VA";
        this.experience_summary = "I currently work as a Software Engineer at Fannie Mae, primarily focusing on backend development using Java/Python. Right now, I work closely with the Multifamily Tech team to maintain and implement new functionality for our eServicing Application. Previously, I lead a proof-of-concept project which integrated machine learning into our Dev Ops toolchain.";
        break;

      case "upward": 
        this.img_id = "upwardPic";
        this.img_alt = "Upward Pic";
        this.img_src = upwardpic;
        this.experience_company = <a href="https://www.upwardhq.com">Upward</a>;
        this.experience_role = <p>Co-Founder and Lead Developer, <i>Summer 2016</i></p>;
        this.experience_location = "New York City, NY";
        this.experience_summary = "I cofounded Upward to allow professionals to interact better with each other in a work-based environment. My main role was backend development, where I led and maintained the production of backend services using endpoints written in Node.js and Express. I also managed a database of users, messages, and emails using MongoDB, as well as created an innovative search engine using Elasticsearch.";
        break;

      case "kaiser": 
        this.img_id = "kaiserPic";
        this.img_alt = "Kaiser Pic";
        this.img_src = kaiserpic;
        this.experience_company = <a href="https://healthy.kaiserpermanente.org/">Kaiser Permanente</a>;
        this.experience_role = <p>Software Engineer Intern, <i>Summer 2015</i></p>;
        this.experience_location = "Silver Spring, MD";
        this.experience_summary = "As a Software Engineer intern at Kaiser Permanente, most of my summer was spent developing OneCare, an iOS app that allowed employees to report company-wide facility issues using a snap & share technique, similar to Instagram. It was built using the Intel XDK to support cross-platform scalibility, and was a great segue into the corporate environment as my first \"real world\" experience.";
        break;

      default: 
        console.log("Error: Incorrect experienceName props parameter");
    }
  }

  render() {
    return(
      <div id="experienceDescription" className="w3-animate-opacity">
        <div><img src={this.img_src} id={this.img_id} alt={this.imd_alt} className="experiencePic"></img></div>
        <div id="experienceDetails">
          <h3 id="experienceCompany">{this.experience_company}</h3>
          <div id="experienceRole">{this.experience_role}</div>
          <p id="experienceLocation">{this.experience_location}</p>
          <p id="experienceSummary">{this.experience_summary}</p>
        </div>
      </div>
    )
  }
}

export default ExperienceDescription;