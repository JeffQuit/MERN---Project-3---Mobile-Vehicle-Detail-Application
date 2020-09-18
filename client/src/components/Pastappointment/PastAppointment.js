//This page will display the compenent for the all of the past appointments. 
import React from "react";
import { MDBContainer, MDBBtn } from 'mdbreact';
import './PastAppointment.css';
import TablePage from "../Table/pastTable.js"
import axios from "axios"
//Find a way to import data from the mongoDB and display only the dates that have completed as true

export default function PastAppointment({ setAuthorize }) {
	  
    // const [authorize, setAuthorize ] = useContext(UserContext)
		  
  function logout() {
    axios.get('/api/admin/logout')
      .then(function (data) {
		setAuthorize(false)
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }

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
			<div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-black" type="submit" onClick={logout}>Logout</MDBBtn>
			</div>
		</div>
    );
    }