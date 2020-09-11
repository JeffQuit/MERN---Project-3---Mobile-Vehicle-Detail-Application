import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import './BookServiceModal.css';
import BookingServiceForm from '../BookingServiceForm/BookingServiceForm';

class BookServiceModal extends Component {
	state = {
		modal4: false,
	};

	toggle = (nr) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber],
		});
	};

	render() {
		return (
			<MDBContainer>
				<MDBBtn outline color="danger" onClick={this.toggle(4)}>
					Book Package
				</MDBBtn>
				<MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="xl">
					<MDBModalHeader toggle={this.toggle(4)}>Book Package: {this.props.packageName}</MDBModalHeader>
					<MDBModalBody>
						<BookingServiceForm serviceRequested={this.props.packageName} />
					</MDBModalBody>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default BookServiceModal;
