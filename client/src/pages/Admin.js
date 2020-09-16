//* Admin Page for company owner to view scheduled appointments
//* Main Page for arriving at /admin or home
import React from 'react';

//! Import Components:
import Upcoming from '../components/Upcoming/Upcoming';
import PastAppointment from '../components/Pastappointment/PastAppointment';

export default function Admin() {	

		return (
			<div>
				<Upcoming />
				<PastAppointment />
			</div>
		);
}