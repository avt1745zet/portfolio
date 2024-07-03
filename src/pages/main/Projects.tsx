import React, {ComponentProps, FC} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Trans, useTranslation} from "react-i18next";
import ColorGeneratorCover from "./../../assets/images/projectCovers/project-cover-color-generator.png";
import FindDifferentColorsCover from "./../../assets/images/projectCovers/project-cover-find-different-colors.png";
import HBR_PickSimulatorCover from "./../../assets/images/projectCovers/project-cover-hbr-pick-simulator.png";
import ProtfolioCover from "./../../assets/images/projectCovers/project-cover-portfolio.png";
import ReelToolsCover from "./../../assets/images/projectCovers/project-cover-reel-tools.png";
import UniversityGamePortfolioCover from "./../../assets/images/projectCovers/project-cover-university-game-portfolio.png";

const Projects: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const [t] = useTranslation();
	const projectInfoData: Array<IProjectInfo> = new Array<IProjectInfo>(
		{
			nameKey: "projects.projectList.5.name",
			type: ProjectType.WEB,
			descriptionKey: "projects.projectList.5.description",
			links: [{
				titleKey: "projects.projectList.5.links.0.title",
				url: "https://linmina1996.github.io/hbr-pick-simulator/"
			}],
			imageSrc: HBR_PickSimulatorCover
		},
		{
			nameKey: "projects.projectList.0.name",
			type: ProjectType.WEB,
			descriptionKey: "projects.projectList.0.description",
			links: [{
				titleKey: "projects.projectList.0.links.0.title",
				url: "https://github.com/avt1745zet/portfolio"
			}],
			imageSrc: ProtfolioCover
		},
		{
			nameKey: "projects.projectList.1.name",
			type: ProjectType.GAME,
			descriptionKey: "projects.projectList.1.description",
			links: [{
				titleKey: "projects.projectList.1.links.0.title",
				url: "https://avt1745zet.github.io/find-different-colors/"
			}, {
				titleKey: "projects.projectList.1.links.1.title",
				url: "https://github.com/avt1745zet/find-different-colors"
			}],
			imageSrc: FindDifferentColorsCover
		},
		{
			nameKey: "projects.projectList.2.name",
			type: ProjectType.TOOL,
			descriptionKey: "projects.projectList.2.description",
			links: [{
				titleKey: "projects.projectList.2.links.0.title",
				url: "https://avt1745zet.github.io/color-generator-online/"
			}, {
				titleKey: "projects.projectList.2.links.1.title",
				url: "https://github.com/avt1745zet/color-generator-online"
			}],
			imageSrc: ColorGeneratorCover
		},
		{
			nameKey: "projects.projectList.3.name",
			type: ProjectType.TOOL,
			descriptionKey: "projects.projectList.3.description",
			links: [{
				titleKey: "projects.projectList.3.links.0.title",
				url: "https://avt1745zet.github.io/reel-tools/"
			}, {
				titleKey: "projects.projectList.3.links.1.title",
				url: "https://github.com/avt1745zet/reel-tools"
			}],
			imageSrc: ReelToolsCover
		},
		{
			nameKey: "projects.projectList.4.name",
			type: ProjectType.WEB,
			descriptionKey: "projects.projectList.4.description",
			links: [{
				titleKey: "projects.projectList.4.links.0.title",
				url: "https://avt1745zet.github.io/university-game-portfolio/"
			}],
			imageSrc: UniversityGamePortfolioCover
		}
	);
	return (
		<section {...other} className="text-light my-5">
			<header>
				<h1 className="text-uppercase" >
					<Trans i18nKey="projects.title" components={{nowarptext: <span className="text-nowrap" />}} />
				</h1>
			</header>
			<Row className="mt-4 g-3">
				<Col sm={12}>
					<Trans i18nKey="projects.description" components={{p: <p />}} />
				</Col>
				{
					projectInfoData.map((data, index) => (
						<Col key={index} sm={12} md={6} lg={4}>
							<Card bg="dark" text="light">
								<Card.Img src={data.imageSrc} />
								<Card.Body>
									<Card.Title>{t(data.nameKey)}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">{t("projects.type") + t(`projects.projectType.${data.type}`)}</Card.Subtitle>
									<Trans i18nKey={data.descriptionKey} components={{p: <Card.Text />, nowarptext: <span className="text-nowrap" />}} />
									{
										data.links ? data.links.map((link, index) => <Card.Link key={index} href={link.url} target="_blank" className="text-info">{t(link.titleKey)}</Card.Link>) : []
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
	nameKey: string;
	type: ProjectType;
	descriptionKey: string;
	links?: Array<ILinkData>;
	imageSrc: string;
}

enum ProjectType {
	GAME,
	WEB,
	TOOL
}

interface ILinkData {
	titleKey: string;
	url: string;
}