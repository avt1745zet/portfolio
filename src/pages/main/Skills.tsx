import React, { HTMLAttributes } from "react";
import { Col, Row } from "react-bootstrap";

const Skills = (props: HTMLAttributes<HTMLElement>) => {
	const {...other} = props;
	return(
		<Row {...other} className="text-light">
			<Col sm={12}>
				<h2 className="text-center" >
                    Skills
				</h2>
				<p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio totam in enim labore dicta velit facere molestias officiis, omnis quaerat delectus quod repellendus doloremque sapiente, beatae aperiam dolore maiores sint rem nesciunt id quasi ipsam atque. Animi, nihil explicabo velit inventore facilis quis ullam tenetur molestiae molestias nulla nemo libero similique. Quaerat adipisci in saepe accusamus hic aliquid quisquam quam.
				</p>
			</Col>
		</Row>
	);
};

export default Skills; 