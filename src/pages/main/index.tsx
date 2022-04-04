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
			<style type="text/css">
				{/** Prevent navbar cover the section content */}
				{`
		 			section:target::before {
						display: block; 
						content: " "; 
						margin-top: -70px; 
						height: 70px; 
						visibility: hidden; 
						pointer-events: none;
		  			}
		  		`}
			</style>
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
			<Container as="main">
				<Overview as="section" id="overview"/>
				<Skills as="section" id="skills"/>
				<Experiences as="section" id="experiences"/>
				<Projects as="section" id="projects"/>
				<Contact as="section" id="contact"/>
			</Container>
		</Fragment>
	);
};

export default MainPage;