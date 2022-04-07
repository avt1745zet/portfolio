import React, { Fragment, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Overview from "./Overview";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const MainPage = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(false);
	const handleNavbarSelect = () => {
		setNavbarExpanded(false);
	};
	const handleNavbarBrandClick = () => {
		setNavbarExpanded(false);
	};
	const handleNavbarToggleClick = () => {
		setNavbarExpanded(!navbarExpanded);
	};
	useEffect(() => {
		const scrollEventListener = () => {
			setNavbarExpanded(false);
		};
		addEventListener("scroll", scrollEventListener);
		return () => {
			removeEventListener("scroll", scrollEventListener);
		};
	}, []);
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
			<Navbar 
				expanded={navbarExpanded} 
				onSelect={handleNavbarSelect} 
				fixed="top" 
				expand="md" 
				bg="black" 
				variant="dark"
			>
				<Container>
					<Navbar.Brand onClick={handleNavbarBrandClick} href="#overview">
						Portfolio
					</Navbar.Brand>
					<Navbar.Toggle onClick={handleNavbarToggleClick}/>
					<Navbar.Collapse className="justify-content-end">
						<Nav>
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