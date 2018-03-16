import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from './components/Landing.js'
import RecentProjects from './components/RecentProjects.js';
import Experience from './components/Experience.js'
import BlogList from './components/BlogList.js';
import './PersonalPage.css';


class ThallaIO extends React.Component {
	render() {
		return(
			<div id="container">
				<Landing/>
				<RecentProjects/>
				<hr id="randomline"></hr>
				<Experience/>
				<div id="blogbuttoncontainer">
					<Link to="/blog"><button id="blogbutton">Blog</button></Link>
				</div>
				<p id="bottomnote">Powered by Caffeine 2017</p>
			</div>
		);
	}
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

class App extends React.Component {
	render() {
		return(
			<div>
				<Route component={ScrollToTop}/>
				<Route exact path="/" component={ThallaIO}/>
				<Route exact path="/blog" component={BlogList}/>
			</div>
		);
	}
}

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
, document.getElementById('root'));

