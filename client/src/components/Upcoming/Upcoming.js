//This page will display the compenent for the all of the upcoming appointments. 
import React from 'react';
import { MDBContainer } from 'mdbreact';
import TablePage from "../Table/Table.js"
import './Upcoming.css';
// import API from "../utils/API.js"

//Use a card and add a table of all the upcoming appointments. 
// Create a button to change the state of completed to false. 
//Find a way to import data from the mongoDB and display only the appointments that are upcoming. 

export default function Upcoming() {


	return (
		<div className="Upcoming-Full-Container ">
		<MDBContainer>
			<div className="Upcoming-Title Upcoming-Section " id="upcoming">
				<MDBContainer>
				<p className="h4 text-center py-4">Upcoming</p>
				{/*  CONDITIONAL RENDERING  IF the completed is false display them in the upcoming appointments*/}
					<TablePage/>
					{/* For every data entry there must be a button added */}

				</MDBContainer> 
			</div>
		</MDBContainer>
	</div>
    );
    }