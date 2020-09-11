//This page will display the compenent for the all of the past appointments. 
import React, { useState, useEffect } from "react";
import { MDBContainer, MDBBtn } from 'mdbreact';
import './PastAppointment.css';
import TablePage from "../Table/Table.js"


//Find a way to import data from the mongoDB and display only the dates that have completed as true

export default function PastAppointment() {
	  

	return (
		<div className="PastAppointment-Full-Container ">
			<MDBContainer>
				<div className="PastAppointment-Title PastAppointment-Section " id="pastappointment">
					<MDBContainer>
					<p className="h4 text-center py-4">Previous</p>
						{/* CONDITIONAL RENDERING IF the completed status is true display here. */}
						<TablePage />
						
					</MDBContainer>
				</div>
			</MDBContainer>
			<div className="text-center py-4 mt-3">
                            <MDBBtn 
                            className="btn btn-outline-black" 
                            type="submit"
                          
                            >
								Logout
							</MDBBtn>
							</div>
		</div>
    );
    }