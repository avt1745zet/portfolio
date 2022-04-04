import React from "react";
import { Col, Container, ContainerProps, Row } from "react-bootstrap";

const Contact = (props: ContainerProps) => {
	const {...other} = props;
	return (
		<Container {...other}>
			<Row {...other} className="text-light">
				<Col sm={12}>
					<h2 className="text-center" >
                    Contact
					</h2>
					<p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non unde, quibusdam dolorem error magni numquam aliquid nam odit veniam esse? Velit ratione perspiciatis qui excepturi earum tempora, eius mollitia impedit!
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;