import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact';
import './About.css';

export default function About() {
	return (
		<div className="About-Full-Container" id="about">
			<MDBContainer className="mt-5 text-center">
				<MDBRow>
					<MDBCol>
						<MDBJumbotron>
							<MDBCardBody>
								<MDBCardTitle className="h2">About us</MDBCardTitle>
								<img src="/Assets/Images/FinalLogo1.png" alt="Logo" className="LogoImage-About" />
								<p className="blue-text my-4 font-weight-bold">Family owned and operrated. EST 2020</p>
								<MDBCardText>
									Gera’s automotive detailing services began business in early 2020 by co owners/ operators Gerardo Yanez & Stephanie Ibarria. Gera’s passion for detailing first started as a hobby of his, along side his best friend Victor Gutierrez. When things got tough or life
									was too stressful, there was nothing like the satisfaction of a smooth finish on Gera’s E30. Naturally the hobby turned into business all thanks to family and friends.
								</MDBCardText>
							</MDBCardBody>
						</MDBJumbotron>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
}
