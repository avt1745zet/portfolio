import React from "react";
import { Col, Container, ContainerProps, Row } from "react-bootstrap";
import EmailIcon from "bootstrap-icons/icons/envelope.svg";
import LinkedinIcon from "bootstrap-icons/icons/linkedin.svg";
import GithubinIcon from "bootstrap-icons/icons/github.svg";

const Contact = (props: ContainerProps) => {
	const {...other} = props;
	return (
		<Container {...other} className="text-light">
			<Container as="header">
				<h2 className="text-center" >
					Contact
				</h2>
			</Container>
			<Row className="justify-content-between">
				<Col sm={12} lg={5}>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non unde, quibusdam dolorem error magni numquam aliquid nam odit veniam esse? Velit ratione perspiciatis qui excepturi earum tempora, eius mollitia impedit!
					</p>
				</Col>
				<Col sm={12} lg={5}>
					<address>
						<EmailIcon className="me-1" width="1rem" height="1rem"/> 
						<strong>
							Email:
						</strong>
						<br/>
						<a href="mailto:avt1745zeo@gmail.com" className="text-break" target="_blank"  rel="noreferrer">avt1745zeo@gmail.com</a>
						<br/>
						<LinkedinIcon className="me-1" width="1rem" height="1rem"/>
						<strong>
							LinkedIn:
						</strong>
						<br/>
						<a href="https://www.linkedin.com/in/shane-wang-8195631b5/" className="text-break" target="_blank" rel="noreferrer">
							https://www.linkedin.com/in/shane-wang-8195631b5/
						</a>
						<br/>
						<GithubinIcon className="me-1" width="1rem" height="1rem"/>
						<strong>
							Github:
						</strong>
						<br/>
						<a href="https://github.com/avt1745zet" className="text-break" target="_blank" rel="noreferrer">https://github.com/avt1745zet</a>
					</address>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;