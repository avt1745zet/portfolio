import React, { HTMLAttributes } from "react";
import { Col, Row } from "react-bootstrap";

const Projects = (props: HTMLAttributes<HTMLElement>) => {
	const {...other} = props;
	return (
		<Row {...other} className="text-light">
			<Col sm={12}>
				<h2 className="text-center" >
                    Projects
				</h2>
				<p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non unde, quibusdam dolorem error magni numquam aliquid nam odit veniam esse? Velit ratione perspiciatis qui excepturi earum tempora, eius mollitia impedit!
				</p>
			</Col>
		</Row>
	);
};

export default Projects;