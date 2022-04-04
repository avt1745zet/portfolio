import React, { HTMLAttributes } from "react";
import { Col, Row } from "react-bootstrap";

const Experiences = (props: HTMLAttributes<HTMLElement>) => {
	const {...other} = props;
	return (
		<Row {...other} className="text-light">
			<Col xs={12}>
				<h2 className="text-center" >
                    Experiences
				</h2>
				<p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias vero incidunt maiores natus adipisci fugiat consectetur, quam exercitationem illum iste iusto? Repudiandae, vitae est, aliquam placeat libero quisquam aspernatur delectus dolore corrupti blanditiis dicta debitis amet mollitia voluptates perspiciatis! Est enim aliquam esse cum magnam asperiores velit nesciunt ut.
				</p>
			</Col>
			<Col xs={12}>
				<p>
                Adipisicing elit. Incidunt cupiditate quos quasi suscipit odit quia omnis labore consequatur, rem dolorum praesentium mollitia velit minima dolores nulla fuga vel maiores deserunt.
				</p>
			</Col>
			<Col xs={12}>
				<p>
                Quia omnis labore consequatur, rem dolorum praesentium mollitia velit minima dolores nulla fuga vel maiores deserunt.
				</p>
			</Col>
			<Col xs={12}>
				<p>
                Ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt doloribus, voluptas officiis cumque ipsum animi ipsa facilis, totam non similique rem necessitatibus nisi cum, tempore delectus praesentium aspernatur quae adipisci eum deleniti deserunt sit voluptatibus. Ab unde odit quaerat ullam debitis, numquam voluptate consequuntur eum aliquam sint minus quisquam natus? Molestias tempore minus explicabo eius omnis, aliquid possimus optio.
				</p>
			</Col>
		</Row>
	);
};

export default Experiences;