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
							<Nav.Link>
								Overview
							</Nav.Link>
							<Nav.Link>
								Skills
							</Nav.Link>
							<Nav.Link>
								Experiences
							</Nav.Link>
							<Nav.Link>
								Projects
							</Nav.Link>
							<Nav.Link>
								Contacts
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container 
				as="main" 
				style={{
					paddingTop: "70px" /** Height of navbar */
				}}
			>
				<Overview/>
				<Skills/>
				<Experiences/>
				<Projects/>
				<Contact/>
			</Container>
		</Fragment>
	);
};

export default MainPage;