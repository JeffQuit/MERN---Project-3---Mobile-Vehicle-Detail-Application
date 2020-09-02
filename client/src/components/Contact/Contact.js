import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBInput } from 'mdbreact';
import './Contact.css';

export default function Contact() {
	return (
		<div className="Contact-Full-Container ">
			<MDBContainer>
				<div className="Contact-Title Contact-Section " id="contact">
					<MDBContainer>
						<MDBRow className="d-flex justify-content-center">
							<MDBCol md="6">
								<MDBCard>
									<MDBCardBody>
										<form>
											<p className="h4 text-center py-4">Contact</p>
											<MDBInput label="Full Name" outline />
											<MDBInput label="Email" outline />
											<MDBInput label="Phone Number" outline />
											<MDBInput label="Vehicle Make/Model" outline />
											<MDBInput label="Subject" outline />
											<MDBInput type="textarea" label="Write Message Here" outline />

											<div className="text-center py-4 mt-3">
												<MDBBtn className="btn btn-outline-purple" type="submit">
													Send
													<MDBIcon far icon="paper-plane" className="ml-2" />
												</MDBBtn>
											</div>
										</form>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</div>
			</MDBContainer>
		</div>
	);
}
