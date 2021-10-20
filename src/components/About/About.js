import React from 'react';

const About = ({ name }) => {
	return (
		<section className="about" id="about">
			<h3>
				Hi! I'm {name} <i className="animated hover-rotate em em-raised_hand_with_fingers_splayed" />
			</h3>
			<div className="details">
				<div className="item text-muted">
					<p>
						I'm a web developer from India <i className="animated hover-bounce em-svg em-heart f-12" />
						I'm also a content blogger. I create awesome stuff on the web. I am currently working on my startup 
		                                <a href="https://twitter.com/visualwayorg"> Visualway</a>.
					</p>
					<p>
						Some of my previous works:
						<a rel="noopener noreferrer" target="_BLANK" href="https://markdownez.vercel.app">
							 MarkdownEz
						</a>
						,
						<a rel="noopener noreferrer" target="_BLANK" href="https://pixellate.netlify.app">
							 Pixellate
						</a>
						,
						<a rel="noopener noreferrer" target="_BLANK" href="https://webmockup.vercel.app/">
							 WebMockup
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export { About };
