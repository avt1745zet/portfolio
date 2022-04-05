import React from "react";
import { Col, Container, ContainerProps, Image, Row } from "react-bootstrap";
import AvatarImage from "./../../../res/avatar.png";

const Overview = (props: ContainerProps) => {
	const {...other} = props;
	return (
		<Container {...other} className="text-light">
			<Row className="justify-content-sm-center justify-content-md-start" 
				style={{
					paddingTop: "70px" /** Height of navbar */
				}}
			>
				{/** Avatar */}
				<Col md={4} lg={3}>
					<Image src={AvatarImage} roundedCircle className="mx-auto d-block"/>
					<p className="text-center text-decoration-underline" style={{
						marginTop: "-1rem"
					}}>
						<i>
							Be a clean coder.
						</i>
					</p>
				</Col>
				<Col md={8} lg={9} className="mt-auto">
					<p>
						<big className="fs-1">Hi, I am Shane</big>, ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate quos quasi suscipit odit quia omnis labore consequatur, rem dolorum praesentium mollitia velit minima dolores nulla fuga vel maiores deserunt.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Overview;