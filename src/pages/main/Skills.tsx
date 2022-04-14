import React, { ComponentProps, FC, ReactElement } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import TypescriptLogo from "./../../assets/images/skillIcons/typescript-logo.svg";
import PixijsLogo from "./../../assets/images/skillIcons/pixijs-text.svg";
import UnityLogo from "./../../assets/images/skillIcons/unity-logo.svg";
import ReactLogo from "./../../assets/images/skillIcons/react-logo.svg";
import WebpackLogo from "./../../assets/images/skillIcons/webpack-logo.svg";
import HtmlLogo from "./../../assets/images/skillIcons/html5-logo.svg";
import CssLogo from "./../../assets/images/skillIcons/css3-logo.svg";

const Skills: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const [t] = useTranslation();
	const gameDevSkillData: Array<ISkillInfo> = new Array<ISkillInfo>(
		{
			nameKey:"skills.gameDevSkills.typescript.name",
			descriptionKey: "skills.gameDevSkills.typescript.description",
			icon: <TypescriptLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			nameKey: "skills.gameDevSkills.pixijs.name",
			descriptionKey: "skills.gameDevSkills.pixijs.description",
			icon: <PixijsLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			nameKey: "skills.gameDevSkills.unity.name",
			descriptionKey: "skills.gameDevSkills.unity.description",
			icon: <UnityLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		}
	);
	const webDevSkillData: Array<ISkillInfo> = new Array<ISkillInfo>(
		{
			nameKey: "skills.webDevSkills.reactjs.name",
			descriptionKey: "skills.webDevSkills.reactjs.description",
			icon: <ReactLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			nameKey: "skills.webDevSkills.webpack.name",
			descriptionKey: "skills.webDevSkills.webpack.description",
			icon: <WebpackLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			nameKey: "skills.webDevSkills.html.name",
			descriptionKey: "skills.webDevSkills.html.description",
			icon: <HtmlLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			nameKey: "skills.webDevSkills.css.name",
			descriptionKey: "skills.webDevSkills.css.description",
			icon: <CssLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		}
	);
	return(
		<section {...other} className="text-light my-5">
			<header>
				<h1 className="text-center text-uppercase" >
					{t("skills.title")}
				</h1>
			</header>
			<Row className="gy-3">
				<Col md={6}>
					<Stack gap={3}>
						{
							gameDevSkillData.map((data, index)=>(
								<div key={index} className="d-flex align-items-center gap-3">
									{data.icon}
									<div>
										<h5>{t(data.nameKey)}</h5>
										<p>{t(data.descriptionKey)}</p>
									</div>
								</div>
							))
						}
					</Stack>
				</Col>
				<Col md={6} className="my-md-auto">
					<h3>{t("skills.gameDevSkills.title")}</h3>
					<Trans i18nKey="skills.gameDevSkills.description" components={{p: <p/>}}/>
				</Col>
			</Row>
			<Row className="gy-3 flex-md-row-reverse">
				<Col md={6}>
					<Stack gap={3}>
						{
							webDevSkillData.map((data, index)=>(
								<div key={index} className="d-flex align-items-center gap-3">
									{data.icon}
									<div>
										<h5>{t(data.nameKey)}</h5>
										<p>{t(data.descriptionKey)}</p>
									</div>
								</div>
							))
						}
					</Stack>
				</Col>
				<Col md={6} className="my-md-auto">
					<h3>{t("skills.webDevSkills.title")}</h3>
					<Trans i18nKey="skills.webDevSkills.description" components={{p: <p/>}}/>
				</Col>
			</Row>
		</section>
	);
};

export default Skills;

interface ISkillInfo {
	nameKey: string;
	descriptionKey: string;
	icon: ReactElement;
}