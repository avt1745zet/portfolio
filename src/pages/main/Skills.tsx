import React from "react";
import { Col, Container, ContainerProps, Row } from "react-bootstrap";

const Skills = (props: ContainerProps) => {
	const {...other} = props;
	return(
		<Container {...other} className="text-light">
			<Container as="header">
				<h2 className="text-center" >
					Skills
				</h2>
			</Container>
			<Row>
				<Col sm={12}>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio totam in enim labore dicta velit facere molestias officiis, omnis quaerat delectus quod repellendus doloremque sapiente, beatae aperiam dolore maiores sint rem nesciunt id quasi ipsam atque. Animi, nihil explicabo velit inventore facilis quis ullam tenetur molestiae molestias nulla nemo libero similique. Quaerat adipisci in saepe accusamus hic aliquid quisquam quam.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Skills; 