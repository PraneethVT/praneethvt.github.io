import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './components/main/Landing.jsx'
import RecentProjects from './components/main/RecentProjects.jsx';
import Experience from './components/main/Experience.jsx';
import MoreAboutMe from './components/main/MoreAboutMe.jsx';
import './index.css'

class ThallaIO extends React.Component {
	render() {
		return(
			<div id="container">
				<Landing/>
				{/* <RecentProjects/> */}
				<Experience/>
				<MoreAboutMe/>
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
			</div>
		);
	}
}

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
, document.getElementById('root'));

