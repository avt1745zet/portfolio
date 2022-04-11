import React, { ComponentProps, FC } from "react";
import { Col, Row } from "react-bootstrap";
import EmailIcon from "bootstrap-icons/icons/envelope.svg";
import LinkedinIcon from "bootstrap-icons/icons/linkedin.svg";
import GithubinIcon from "bootstrap-icons/icons/github.svg";

const Contact: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	return (
		<section {...other} className="text-light mt-5">
			<header>
				<h1 className="text-center text-uppercase" >
					Contact
				</h1>
			</header>
			<Row as="address" className="justify-content-between mb-0" style={{
				minHeight: "calc(100vh - (4.5rem + 70px))"
			}}>
				<Col sm={12} lg={4} className="my-auto text-center">
					<EmailIcon width="5rem" height="5rem"/>
					<br/>
					<strong>
							Email:
					</strong>
					<br/>
					<a href="mailto:avt1745zeo@gmail.com" className="text-break" target="_blank" rel="noreferrer">avt1745zeo@gmail.com</a>
					<br/>
					<p>
						If you want to email me, please do it.
					</p>
				</Col>
				<Col sm={12} lg={4} className="my-auto text-center">
					<LinkedinIcon width="5rem" height="5rem"/>
					<br/>
					<strong>
							LinkedIn:
					</strong>
					<br/>
					<a href="https://www.linkedin.com/in/shane-wang-8195631b5/" className="text-break" target="_blank" rel="noreferrer">
							https://www.linkedin.com/in/shane-wang-8195631b5/
					</a>
					<br/>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias eaque eveniet culpa nobis nemo quibusdam dicta exercitationem sunt quas.
					</p>
				</Col>
				<Col sm={12} lg={4} className="my-auto text-center" >
					<GithubinIcon width="5rem" height="5rem"/>
					<br/>
					<strong>
							Github:
					</strong>
					<br/>
					<a href="https://github.com/avt1745zet" className="text-break" target="_blank" rel="noreferrer">https://github.com/avt1745zet</a>
					<br/>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga earum consectetur ratione distinctio.
					</p>
				</Col>
			</Row>
		</section>
	);
};

export default Contact;