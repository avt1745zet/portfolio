import React, { ComponentProps, FC } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Projects: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const projectInfoData: Array<IProjectInfo> = new Array<IProjectInfo>(
		{
			name: "Portfolio",
			type: ProjectType.WEB,
			descriptions: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga", "Amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga."],
			links: [{
				title: "Repo link",
				url: "https://github.com/avt1745zet?tab=repositories"
			}],
			imageSrc: "http://placehold.jp/640x360.png"
		},
		{
			name: "Project name 2",
			type: ProjectType.GAME,
			descriptions: ["Amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga."],
			imageSrc: "http://placehold.jp/640x360.png"
		},
		{
			name: "Project name 3",
			type: ProjectType.TOOL,
			descriptions: ["Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur."],
			imageSrc: "http://placehold.jp/640x360.png"
		},
		{
			name: "Project name 4",
			type: ProjectType.GAME,
			descriptions: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, esse placeat officia rem ipsum officiis at culpa iusto vero fuga."],
			imageSrc: "http://placehold.jp/640x360.png"
		}
	);
	const getTypeText = (type: ProjectType) => {
		let result: string;
		switch (type) {
		case ProjectType.GAME:
			result = "Game";
			break;
		case ProjectType.WEB:
			result = "Web";
			break;
		case ProjectType.TOOL:
			result = "Tool";
			break;
		default:
			result = "uncategorized";
			break;
		}
		return result;
	};
	return (
		<section {...other} className="text-light my-5">
			<header>
				<h2 className="text-center" >
					Projects
				</h2>
			</header>
			<Row className="g-3">
				<Col sm={12}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo rerum quae iusto eaque vero non eos placeat.</p>
				</Col>
				{
					projectInfoData.map((data, index)=> (
						<Col key={index} sm={12} md={6} lg={4}>
							<Card bg="dark" text="light">
								<Card.Img src={data.imageSrc}/>
								<Card.Body>
									<Card.Title>{data.name}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">{`Type: ${getTypeText(data.type)}`}</Card.Subtitle>
									{
										data.descriptions.map((description, index) => <Card.Text key={index}>{description}</Card.Text>)
									}
									{
										data.links? data.links.map((link, index) => <Card.Link key={index} href={link.url} target="_blank">{link.title}</Card.Link>): []
									}
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
	type: ProjectType;
	descriptions: Array<string>;
	links?: Array<ILinkData>;
	imageSrc: string;
}

enum ProjectType {
	GAME,
	WEB,
	TOOL
}

interface ILinkData {
	title: string;
	url: string;
}