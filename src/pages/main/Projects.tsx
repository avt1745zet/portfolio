import React, { ComponentProps, FC } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Projects: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const projectInfoData: Array<IProjectInfo> = new Array<IProjectInfo>(
		{
			name: "Project name 1",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga, Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga.",
			imageSrc: "http://placehold.jp/640x360.png"
		},
		{
			name: "Project name 2",
			description: "Amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga.",
			imageSrc: "http://placehold.jp/640x360.png"
		},
		{
			name: "Project name 3",
			description: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur.",
			imageSrc: "http://placehold.jp/640x360.png"
		},
		{
			name: "Project name 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga.",
			imageSrc: "http://placehold.jp/640x360.png"
		}
	);
	return (
		<section {...other} className="text-light my-5">
			<header>
				<h2 className="text-center" >
					Projects
				</h2>
			</header>
			<Row className="g-3">
				{
					projectInfoData.map((data, index)=> (
						<Col key={index} sm={12} md={6} lg={4}>
							<Card bg="dark">
								<Card.Img src={data.imageSrc}/>
								<Card.Body>
									<Card.Title>{data.name}</Card.Title>
									<Card.Text>{data.description}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))
				}
			</Row>
		</section>
	);
};

export default Projects;

interface IProjectInfo {
	name: string;
	description: string;
	imageSrc: string;
}