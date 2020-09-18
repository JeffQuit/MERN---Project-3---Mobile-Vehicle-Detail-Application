//This page will display the compenent for the all of the past appointments.
import React from 'react';
import { MDBContainer } from 'mdbreact';

import './PastAppointment.css';
import TablePage from '../Table/pastTable.js';
// import axios from "axios"

//Find a way to import data from the mongoDB and display only the dates that have completed as true

export default function PastAppointment({ setAuthorize }) {
	// const [authorize, setAuthorize ] = useContext(UserContext)

	//   function logout() {
	//     axios.get('/api/admin/logout')
	//       .then(function (data) {
	// 		setAuthorize(false)
	// 		redirect();
	//       }.bind(this)).catch(function (err) {
	//         console.log(err);
	//       });
	//   }
	//redirect function for logging into the admin page.
	//   let history = useHistory();

	//   function redirect() {
	//     if (authorize) {
	//       // console.log(`redirect trying to hit`)
	//     return (
	//       history.push('/admin/login')
	//     )} else {
	//       alert(`Must be authenticated`)
	//   }};

	return (
		<div className="PastAppointment-Full-Container ">
			<MDBContainer>
				<div className="PastAppointment-Title PastAppointment-Section " id="pastappointment">
					<MDBContainer>
						<p className="h4 text-center py-4">Past Appointments</p>
						<TablePage />
					</MDBContainer>
				</div>
			</MDBContainer>
			<div className="text-center py-4 mt-3">{/* <MDBBtn className="btn btn-outline-black" type="submit" onClick={logout}>Logout</MDBBtn> */}</div>
		</div>
	);
}
