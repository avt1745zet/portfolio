
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/main";

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
			{/** Page */}
			<Container fluid className="min-vh-100 pb-4">
				<MainPage/>
			</Container>
			{/** Footer */}
			<Container 
				as="footer"
				style={{
					height: "2rem",
					marginTop: "-2rem"
				}}
			>
				<p className="text-light text-center">
					©2022 Shane Portfolio.
				</p>
			</Container>
		</Fragment>
	);
};

export default App;