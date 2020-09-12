import React from 'react';
import { MDBContainer, MDBAlert } from 'mdbreact';

const BookingServiceAlert = () => {
	return (
		<MDBContainer>
			<MDBAlert color="success">
				<h4 className="alert-heading">New Service Has Been Requested!</h4>
				<p>Thank you for submitting a new wash or cleaning service. You will receive a follow-up email soon with information about this request. After this, you will be contacted by one of our team members to provide you with a quote and finalize the booking.</p>
			</MDBAlert>
		</MDBContainer>
	);
};

export default BookingServiceAlert;
