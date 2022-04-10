import React, { Fragment, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Overview from "./Overview";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const MainPage = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(false);
	const [currentSection, setCurrentSection] = useState("");
	const handleNavbarSelect = () => {
		setNavbarExpanded(false);
	};
	const handleNavbarBrandClick = () => {
		setNavbarExpanded(false);
	};
	const handleNavbarToggleClick = () => {
		setNavbarExpanded(!navbarExpanded);
	};
	const navbarHeight = 70;
	useEffect(() => {
		const scrollEventListener = () => {
			setNavbarExpanded(false);
			const navTargetList: Array<{id: string, offsetTop: number}> = [
				{id: "overview", offsetTop: document.getElementById("overview")?.offsetTop || 0},
				{id: "skills", offsetTop: document.getElementById("skills")?.offsetTop || 0},
				{id: "experiences", offsetTop: document.getElementById("experiences")?.offsetTop || 0},
				{id: "projects", offsetTop: document.getElementById("projects")?.offsetTop || 0},
				{id: "contact", offsetTop: document.getElementById("contact")?.offsetTop || 0}
			];
			for( let i = 0; i < navTargetList.length; i++){
				if(Math.abs(navTargetList[i].offsetTop - window.scrollY) <= navbarHeight){
					setCurrentSection(navTargetList[i].id);
					break;
				}
			}
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
						margin-top: ${-navbarHeight}px; 
						height: ${navbarHeight}px; 
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
							<Nav.Link href="#skills" active={currentSection==="skills"}>
								Skills
							</Nav.Link>
							<Nav.Link href="#experiences" active={currentSection==="experiences"}>
								Experiences
							</Nav.Link>
							<Nav.Link href="#projects" active={currentSection==="projects"}>
								Projects
							</Nav.Link>
							<Nav.Link href="#contact" active={currentSection==="contact"}>
								Contacts
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container as="main">
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