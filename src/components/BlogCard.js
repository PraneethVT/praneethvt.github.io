import React from 'react';

class BlogCard extends React.Component {
	render() {
		return(
			<div class="container my-container w-50">
				<div class="row picrow my-row">
					<img id="folespic" alt="foles pic"></img>
				</div>
				<div class="row bodyrow">
					<div class="col">
						<div class="row my-row titlerow">
							<div class="col">
								<a href="nickfolesblog">The Accuracy of Nick Foles</a>
							</div>
							<div class="col">
							By Praneeth Thalla (03/08/2018)
							</div>
						</div>
						<div class="row my-row summaryrow">Nick Foles is a legend, here's why. He has the fastest arm in the NFL. He has the coolest hair. His name is Nick, which obviously is Greek Latin for "SUPERBOWL MVP". There is no one who can throw the football over the mountains like he can, and it shows in big one. Here is what happens to the text if I keep typing here. 
						</div>
						<div class="row my-row readmorerow">
							<a href="nickfolesblog">Read more</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogCard;
