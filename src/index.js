import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './components/Landing.jsx'
import RecentProjects from './components/RecentProjects.jsx';
import Experience from './components/Experience.jsx';
import AboutMe from './components/AboutMe.jsx';
import BlogList from './components/BlogList.jsx';
import './css/index.css'

class ThallaIO extends React.Component {
	render() {
		return(
			<div id="container">
				<Landing/>
				<RecentProjects/>
				<Experience/>
				<AboutMe/>
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

