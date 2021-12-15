import React from 'react';
import './Works.css';
import logo from './me-with-cam.jpg';

function Works(){
	return(
		<div>
			<section className="works">
				<h1>My Works</h1>
			</section>
			<section className="insta-about">
				<div>
					<p className="photography-text">
					I have been doing photography for the last couple of years. It has become my passion. I strive to do better than yesterday. Photography is poetry in an image. I have a few masterpieces of my own. It is on my instagram @ 	 
					<a href="https://www.instagram.com/reianoliver/" rel="noreferrer" target="_blank" className="my-insta">reianoliver</a>
					. Drop me a follow!
					</p>
					<img src={logo} className="me-with-cam" alt="me-with-camera" />
				</div>
			</section>
		</div>
	)
}

export default Works;
