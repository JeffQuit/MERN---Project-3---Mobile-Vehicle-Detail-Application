import React, { Fragment } from 'react';
import { MDBContainer, MDBBtn } from 'mdbreact';

import './Introtile.css';

export default function Introtile() {
	return (
		<div className="Introtile-Full-Container">
			<div className="Introtile-IMG-Container">
				<img src="./Assets/Images/IntroTileBKG72DPIlong2.jpg" alt="BkgImgVehicle" className="Introtile-CarBKG" />
			</div>
			<MDBContainer className="Introtile-MDB-Container text-left">
				<h2 className="Introtile-Headertext">Header Text Here</h2>
				<h6 className="Introtile-SubHeadertext">SubHeader Text Here</h6>

				<Fragment>
					<MDBBtn href="#pricing" id="Introtile-Book-BTN" className="text-left" color="danger-color-dark">
						View Detailing Packages
					</MDBBtn>
				</Fragment>
			</MDBContainer>
		</div>
	);
}
