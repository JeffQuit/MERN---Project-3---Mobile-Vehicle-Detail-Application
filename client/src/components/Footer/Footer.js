import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './Footer.css';
import ModalPage from '../Modal/Modal';

export default function Footer() {
	return (
		<MDBFooter color="blue" className="page-footer font-small pt-4  ">
			<MDBContainer>
				<MDBContainer fluid className="text-center text-md-left ">
					<MDBRow>
						<MDBCol md="6">
							<h5 className="title">Footer Content</h5>
							<p>Here you can use rows and columns here to organize your footer content.</p>
						</MDBCol>
						<MDBCol md="6">
							<ul className="Footer-UL-Style">
								{/* Admin login page link */}
								<ModalPage>
								{/* <li className="list-unstyled">
									<a href="/">Login</a>
								</li> */}
								</ModalPage>
								
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
}
