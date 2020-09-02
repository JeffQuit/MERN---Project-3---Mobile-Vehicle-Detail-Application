//* Main Page for arriving at / or home
import React from 'react';

//! Import Components:
import Introtile from '../components/Introtile/Introtile';
import Pricing from '../components/Pricing/Pricing';
import About from '../components/About/About';
import Reviews from '../components/Reviews/Reviews';
import Socialmedia from '../components/Socialmedia/Socialmedia';
import Contact from '../components/Contact/Contact';

export default function Main() {
	return (
		<div>
			<Introtile />
			<Pricing />
			<About />
			<Reviews />
			<Socialmedia />
			<Contact />
		</div>
	);
}
