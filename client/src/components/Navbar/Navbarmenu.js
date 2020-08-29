import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbarmenu.css';

export default function Navbarmenu() {
	return (
		<div>
			<Navbar expand="lg" className="Navbar-CSS">
				<Container className="Navbar-CSS">
					<Navbar.Brand href="#home" id="Navbar-Logo">
						LOGO HERE
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">About</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
							<Nav.Link href="#link">Contact</Nav.Link>
						</Nav>
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								Signed in as: <a href="#login">NAME HERE </a>
							</Navbar.Text>
							<Navbar.Text>&nbsp; | </Navbar.Text>
							<NavDropdown title="Menu" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">One Pager</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Partner Filter</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Add New Partner</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Profile</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.5">App Support</NavDropdown.Item>
							</NavDropdown>
						</Navbar.Collapse>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
