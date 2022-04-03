
import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Overview from "./pages/Overview";

const App = () => {
	return( 
		<Fragment>
			<style type="text/css">
				{`
		 			body {
					background-color: black;
		  			}
		  		`}
			</style>
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
								自我介紹
							</Nav.Link>
							<Nav.Link>
								能力分析
							</Nav.Link>
							<Nav.Link>
								作品集
							</Nav.Link>
							<Nav.Link>
								聯絡方式
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/** Main */}
			<Container 
				as="main" 
				className="min-vh-100"
				style={{
					paddingTop: "70px",
					paddingBottom: "2rem"
				}}
			>
				<Overview/>
			</Container>
			{/** Footer */}
			<footer 
				style={{
					width: "100%",
					height: "2rem",
					marginTop: "-2rem"
				}}
			>
				<p className="text-light" style={{textAlign: "center"}}>
					©2022 Shane Portfolio.
				</p>
			</footer>
		</Fragment>
	);
};

export default App;