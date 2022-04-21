import React, { Fragment, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Overview from "./Overview";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import GlobeIcon from "bootstrap-icons/icons/globe.svg";

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
	const handleNavbarDropdownSelect = (e: string | null) => {
		if(e !== null){
			i18n.changeLanguage(e);
		}
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
				if(Math.abs(navTargetList[i].offsetTop - window.scrollY) <= navbarHeight * 2){
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
	const [t, i18n] = useTranslation();
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
								{t("navbar.skills")}
							</Nav.Link>
							<Nav.Link href="#experiences" active={currentSection==="experiences"}>
								{t("navbar.experiences")}
							</Nav.Link>
							<Nav.Link href="#projects" active={currentSection==="projects"}>
								{t("navbar.projects")}
							</Nav.Link>
							<Nav.Link href="#contact" active={currentSection==="contact"}>
								{t("navbar.contact")}
							</Nav.Link>
							<NavDropdown 
								title={
									<Fragment>
										<GlobeIcon width="1rem" height="1rem" style={{
											verticalAlign: "text-bottom"
										}}/>
										{t("navbar.language")}
									</Fragment> 
								} 
								menuVariant="dark" 
								onSelect={handleNavbarDropdownSelect}
							>
								<NavDropdown.Item eventKey={"zh-Hant"}>
									{t("navbar.languages.zh-Hant")}
								</NavDropdown.Item>
								<NavDropdown.Item eventKey={"en"}>
									{t("navbar.languages.en")}
								</NavDropdown.Item>
							</NavDropdown>
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