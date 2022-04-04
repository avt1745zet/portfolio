import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Overview from "./Overview";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const MainPage = () => {
	return (
		<Fragment>
			{/** Navbar */}
			<Navbar fixed="top" expand="md" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						Portfolio
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav>
							<Nav.Link href="#overview">
								Overview
							</Nav.Link>
							<Nav.Link href="#skills">
								Skills
							</Nav.Link>
							<Nav.Link href="#experiences">
								Experiences
							</Nav.Link>
							<Nav.Link href="#projects">
								Projects
							</Nav.Link>
							<Nav.Link href="#contact">
								Contacts
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container 
				as="main" 
			>
				<Overview id="overview"/>
				<Skills id="skills"/>
				<Experiences id="experiences"/>
				<Projects id="projects"/>
				<Contact id="contact"/>
			</Container>
		</Fragment>
	);
};

export default MainPage;