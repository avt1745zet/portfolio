import React from "react";
import { Card, Col, Container, ContainerProps, Row } from "react-bootstrap";

const Projects = (props: ContainerProps) => {
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
		<Container {...other} className="text-light">
			<Container as="header">
				<h2 className="text-center" >
					Projects
				</h2>
			</Container>
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
		</Container>
	);
};

export default Projects;

interface IProjectInfo {
	name: string;
	description: string;
	imageSrc: string;
}