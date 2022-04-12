import React, { ComponentProps, FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import EmailIcon from "bootstrap-icons/icons/envelope.svg";
import LinkedinIcon from "bootstrap-icons/icons/linkedin.svg";
import GithubinIcon from "bootstrap-icons/icons/github.svg";

const Contact: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const [t] = useTranslation();
	return (
		<section {...other} className="text-light mt-5">
			<header>
				<h1 className="text-center text-uppercase">
					{t("contact.title")}
				</h1>
			</header>
			<Row as="address" className="justify-content-between mb-0" style={{
				minHeight: "calc(100vh - (4.5rem + 70px))"
			}}>
				<Col sm={12} lg={4} className="my-auto text-center">
					<EmailIcon width="5rem" height="5rem"/>
					<br/>
					<strong>
						{t("contact.methods.0.name")}
					</strong>
					<br/>
					<a href="mailto:avt1745zeo@gmail.com" className="text-break" target="_blank" rel="noreferrer">avt1745zeo@gmail.com</a>
					<br/>
					<Trans i18nKey="contact.methods.0.description" components={{p: <p/>}}/>
				</Col>
				<Col sm={12} lg={4} className="my-auto text-center">
					<LinkedinIcon width="5rem" height="5rem"/>
					<br/>
					<strong>
						{t("contact.methods.1.name")}
					</strong>
					<br/>
					<a href="https://www.linkedin.com/in/shane-wang-8195631b5/" className="text-break" target="_blank" rel="noreferrer">
							https://www.linkedin.com/in/shane-wang-8195631b5/
					</a>
					<br/>
					<Trans i18nKey="contact.methods.1.description" components={{p: <p/>}}/>
				</Col>
				<Col sm={12} lg={4} className="my-auto text-center" >
					<GithubinIcon width="5rem" height="5rem"/>
					<br/>
					<strong>
						{t("contact.methods.2.name")}
					</strong>
					<br/>
					<a href="https://github.com/avt1745zet" className="text-break" target="_blank" rel="noreferrer">https://github.com/avt1745zet</a>
					<br/>
					<Trans i18nKey="contact.methods.2.description" components={{p: <p/>}}/>
				</Col>
			</Row>
		</section>
	);
};

export default Contact;