
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n/config";
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
			<div className="min-vh-100 pb-4">
				<MainPage/>
			</div>
			{/** Footer */}
			<footer 
				style={{
					height: "2rem",
					marginTop: "-2rem"
				}}
			>
				<p className="text-light text-center">
					©2022 Shane Portfolio.
				</p>
			</footer>
		</Fragment>
	);
};

export default App;