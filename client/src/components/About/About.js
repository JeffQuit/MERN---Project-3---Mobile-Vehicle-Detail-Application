import React from 'react';
import { MDBContainer, MDBMedia } from 'mdbreact';
import './About.css';

export default function About() {
	return (
		<div className="About-Full-Container">
			<MDBContainer>
				<MDBMedia>
					<MDBMedia body>
						<MDBMedia heading>Media object</MDBMedia>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</MDBMedia>
					<MDBMedia right className="ml-3" href="#">
						<MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="Generic placeholder image" />
					</MDBMedia>
				</MDBMedia>
			</MDBContainer>
		</div>
	);
}
