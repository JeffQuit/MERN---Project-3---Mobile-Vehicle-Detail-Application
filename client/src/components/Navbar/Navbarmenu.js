import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
	state = {
		isOpen: false,
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<Router>
				<MDBNavbar color="elegant-color-dark" dark expand="md" className="sticky-top">
					<MDBContainer>
						<MDBNavbarBrand>
							<strong className="white-text">Gerra's Auto Detailing Service</strong>
						</MDBNavbarBrand>
						<MDBNavbarToggler onClick={this.toggleCollapse} />
						<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
							<MDBNavbarNav right>
								<MDBNavItem active>
									<MDBNavLink to="#!">Home</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="#!">Features</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="#!">Pricing</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBDropdown>
										<MDBDropdownToggle nav caret>
											<span className="mr-2">Dropdown</span>
										</MDBDropdownToggle>
										<MDBDropdownMenu>
											<MDBDropdownItem href="#!">Action</MDBDropdownItem>
											<MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
											<MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
											<MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
										</MDBDropdownMenu>
									</MDBDropdown>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBContainer>
				</MDBNavbar>
			</Router>
		);
	}
}

export default NavbarPage;
