import React from 'react';
import './Bio.css';

function Bio() {
	return(
<div>
<ul className="bio-date">
	<li>
	    <h3 className="date-year">2000</h3>
	    <p className="bio-text">Born August 7 in Malaybalay City, Bukidnon.</p>
	</li>
	<li>
	    <h3 className="date-year">2017</h3>
	    <p className="bio-text">A DSLR Camera was entrusted to me. I got interested in it, and here I am now doing photography as my hobby/passion.</p>
	</li>
	<li>
		<h3 className="date-year">2019</h3>
	   	<p className="bio-text">Graduated High School at Bukidnon National High School with NCII Computer Systems Servicing.</p>
	</li>
	<li>
	   	<h3 className="date-year">2021</h3>
	    	<p className="bio-text">Started learning about Web Programming by my self.</p>
	</li>
</ul>
</div>
)
}

export default Bio;
