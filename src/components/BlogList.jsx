import React from 'react';
import BlogCard from './BlogCard.jsx'
import {Link} from 'react-router-dom';

class BlogList extends React.Component {
	render() {
		return(
			<div>
				<BlogCard/>
				<BlogCard/>
				<div id="blogbuttoncontainer">
					<Link to="/"><button id="blogbutton">Home</button></Link>
				</div>
			</div>
		)
	}
}

export default BlogList;
