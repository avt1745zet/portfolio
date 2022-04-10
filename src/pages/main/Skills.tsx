import React, { ComponentProps, FC, ReactElement } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import TypescriptLogo from "./../../../res/skillIcons/typescript-logo.svg";
import PixijsLogo from "./../../../res/skillIcons/pixijs-text.svg";
import UnityLogo from "./../../../res/skillIcons/unity-logo.svg";
import ReactLogo from "./../../../res/skillIcons/react-logo.svg";
import WebpackLogo from "./../../../res/skillIcons/webpack-logo.svg";
import HtmlLogo from "./../../../res/skillIcons/html5-logo.svg";
import CssLogo from "./../../../res/skillIcons/css3-logo.svg";

const Skills: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const gameDevSkillData: Array<ISkillInfo> = new Array<ISkillInfo>(
		{
			name: "Typecript",
			description: "I use Typecript to develop the HTML5 games.",
			icon: <TypescriptLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			name: "Pixi.js",
			description: "I use Pixi.js to develop the HTML5 games.",
			icon: <PixijsLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			name: "Unity",
			description: "I use Unity to develop some 3D game.",
			icon: <UnityLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		}
	);
	const webDevSkillData: Array<ISkillInfo> = new Array<ISkillInfo>(
		{
			name: "React.js",
			description: "I use React to develop the web.",
			icon: <ReactLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			name: "Webpack",
			description: "I use Webpack to bundle the code.",
			icon: <WebpackLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			name: "HTML",
			description: "I use html to built website.",
			icon: <HtmlLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		},
		{
			name: "CSS",
			description: "I use css to decorate website.",
			icon: <CssLogo className="flex-shrink-0" width="5rem" height="5rem"/>
		}
	);
	return(
		<section {...other} className="text-light">
			<header>
				<h2 className="text-center" >
					Skills
				</h2>
			</header>
			<Row className="gy-3">
				<Col md={6}>
					<Stack gap={3}>
						{
							gameDevSkillData.map((data, index)=>(
								<div key={index} className="d-flex align-items-center gap-3">
									{data.icon}
									<div>
										<h5>{data.name}</h5>
										<p>{data.description}</p>
									</div>
								</div>
							))
						}
					</Stack>
				</Col>
				<Col md={6} className="my-md-auto">
					<h3>Game Develop</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio totam in enim labore dicta velit facere molestias officiis, omnis quaerat delectus quod repellendus doloremque sapiente, beatae aperiam dolore maiores sint rem nesciunt id quasi ipsam atque. Animi, nihil explicabo velit inventore facilis quis ullam tenetur molestiae molestias nulla nemo libero similique. Quaerat adipisci in saepe accusamus hic aliquid quisquam quam.
					</p>
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
										<h5>{data.name}</h5>
										<p>{data.description}</p>
									</div>
								</div>
							))
						}
					</Stack>
				</Col>
				<Col md={6} className="my-md-auto">
					<h3>Web Develop</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio totam in enim labore dicta velit facere molestias officiis, omnis quaerat delectus quod repellendus doloremque sapiente, beatae aperiam dolore maiores sint rem nesciunt id quasi ipsam atque. Animi, nihil explicabo velit inventore facilis quis ullam tenetur molestiae molestias nulla nemo libero similique. Quaerat adipisci in saepe accusamus hic aliquid quisquam quam.
					</p>
				</Col>
			</Row>
		</section>
	);
};

export default Skills;

interface ISkillInfo {
	name: string;
	description: string;
	icon: ReactElement;
}