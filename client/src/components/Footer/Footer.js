import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './Footer.css';
import ModalPage from '../Modal/Modal';

export default function Footer() {
	return (
		<MDBFooter color="elegant-color-dark" className="page-footer font-small pt-4  ">
			<MDBContainer>
				<MDBContainer fluid className="text-center text-md-left ">
					<MDBRow>
						<MDBCol md="6">
							<h5 className="title">Gera's Automotive Detailing</h5>
							<p>Full Service Interior and Exterior Mobile Automotive Detailing Service.</p>
						</MDBCol>
						<MDBCol md="6">
							<ul className="Footer-UL-Style">
								{/* Admin login page link */}
								<ModalPage>{/* <li className="list-unstyled">
									<a href="/">Login</a>
								</li> */}</ModalPage>
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright: <a href="/"> Gera's Automotive Detailing </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
}
