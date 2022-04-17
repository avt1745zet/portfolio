import React, { ComponentProps, FC, Fragment, ReactElement } from "react";
import { Col, ProgressBar, Row, Stack } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import TypescriptLogo from "./../../assets/images/skillIcons/typescript-logo.svg";
import PixijsLogo from "./../../assets/images/skillIcons/pixijs-text.svg";
import UnityLogo from "./../../assets/images/skillIcons/unity-logo.svg";
import ReactLogo from "./../../assets/images/skillIcons/react-logo.svg";
import WebpackLogo from "./../../assets/images/skillIcons/webpack-logo.svg";
import HtmlLogo from "./../../assets/images/skillIcons/html5-logo.svg";
import CssLogo from "./../../assets/images/skillIcons/css3-logo.svg";
import HeartIcon from "bootstrap-icons/icons/heart.svg";
import BookIcon from "bootstrap-icons/icons/book.svg";
import PeopleIcon from "bootstrap-icons/icons/people.svg";

const Skills: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const [t] = useTranslation();
	const skillGroupData: Array<ISkillGroupData> = [
		{
			titleKey: "skills.gameDevSkills.title",
			descriptionKey: "skills.gameDevSkills.description",
			subSkills: [
				{
					nameKey:"skills.gameDevSkills.subSkills.0.name",
					descriptionKey: "skills.gameDevSkills.subSkills.0.description",
					icon: <TypescriptLogo width="5rem" height="5rem"/>,
					proficiency: 90
				},
				{
					nameKey: "skills.gameDevSkills.subSkills.1.name",
					descriptionKey: "skills.gameDevSkills.subSkills.1.description",
					icon: <PixijsLogo width="5rem" height="5rem"/>,
					proficiency: 85
				},
				{
					nameKey: "skills.gameDevSkills.subSkills.2.name",
					descriptionKey: "skills.gameDevSkills.subSkills.2.description",
					icon: <UnityLogo width="5rem" height="5rem"/>,
					proficiency: 70
				}
			]
		},
		{
			titleKey: "skills.webDevSkills.title",
			descriptionKey: "skills.webDevSkills.description",
			subSkills: [
				{
					nameKey: "skills.webDevSkills.subSkills.0.name",
					descriptionKey: "skills.webDevSkills.subSkills.0.description",
					icon: <ReactLogo width="5rem" height="5rem"/>,
					proficiency: 75
				},
				{
					nameKey: "skills.webDevSkills.subSkills.1.name",
					descriptionKey: "skills.webDevSkills.subSkills.1.description",
					icon: <WebpackLogo width="5rem" height="5rem"/>,
					proficiency: 75
				},
				{
					nameKey: "skills.webDevSkills.subSkills.2.name",
					descriptionKey: "skills.webDevSkills.subSkills.2.description",
					icon: <HtmlLogo width="5rem" height="5rem"/>,
					proficiency: 90
				},
				{
					nameKey: "skills.webDevSkills.subSkills.3.name",
					descriptionKey: "skills.webDevSkills.subSkills.3.description",
					icon: <CssLogo width="5rem" height="5rem"/>,
					proficiency: 70
				}
			]
		},
		{
			titleKey: "skills.generalSkills.title",
			descriptionKey: "skills.generalSkills.description",
			subSkills: [
				{
					nameKey: "skills.generalSkills.subSkills.0.name",
					descriptionKey: "skills.generalSkills.subSkills.0.description",
					icon: <HeartIcon width="5rem" height="5rem"/>,
					proficiency: 100
				},
				{
					nameKey: "skills.generalSkills.subSkills.1.name",
					descriptionKey: "skills.generalSkills.subSkills.1.description",
					icon: <PeopleIcon width="5rem" height="5rem"/>,
					proficiency: 100
				},
				{
					nameKey: "skills.generalSkills.subSkills.2.name",
					descriptionKey: "skills.generalSkills.subSkills.2.description",
					icon: <BookIcon width="5rem" height="5rem"/>,
					proficiency: 100
				}
			]
		}
	];
	return(
		<section {...other} className="text-light my-5">
			<header>
				<h1 className="text-center text-uppercase" >
					{t("skills.title")}
				</h1>
			</header>
			<SkillGroup groups={skillGroupData}/>
		</section>
	);
};

export default Skills;

const SkillGroup: FC<ISkillGroupProps> = (props: ISkillGroupProps) => {
	const {groups} = props;
	const [t] = useTranslation();
	return (
		<Fragment>
			{
				groups.map((groupData, index)=>(
					<Row 
						key={index} 
						className={`my-3 gy-3 ${index % 2 === 0? "flex-md-row": "flex-md-row-reverse"}`}
					>
						<Col md={6}>
							<Stack gap={3}>
								{
									groupData.subSkills.map((data, index)=>(
										<div key={index}>
											{data.icon}
											<div className="d-inline-block align-middle" style={{
												width: "calc(100% - 6rem)",
												marginLeft: "1rem"
											}}>
												<h5>{t(data.nameKey)}</h5>
												<p>{t(data.descriptionKey)}</p>
												<ProgressBar 
													label={data.proficiency} 
													visuallyHidden 
													striped 
													variant="info" 
													now={data.proficiency} 
													className="bg-dark"
													style={{
														height: "4px"
													}}
												/>
											</div>
										</div>
									))
								}
							</Stack>
						</Col>
						<Col md={6} className="my-md-auto">
							<h3>{t(groupData.titleKey)}</h3>
							<Trans i18nKey={groupData.descriptionKey} components={{p: <p/>}}/>
						</Col>
					</Row>
				))
			}
		</Fragment>
	);
};

interface ISkillGroupProps {
	groups: Array<ISkillGroupData>;
}

interface ISkillGroupData {
	subSkills: Array<ISkillData>;
	titleKey: string;
	descriptionKey: string;
}

interface ISkillData {
	nameKey: string;
	descriptionKey: string;
	icon: ReactElement;
	proficiency: number;
}