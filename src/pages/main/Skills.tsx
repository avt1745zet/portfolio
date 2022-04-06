import React from "react";
import { Col, Container, ContainerProps, Image, Row, Stack } from "react-bootstrap";
import SkillIcon from "./../../../res/avatar.png";

const Skills = (props: ContainerProps) => {
	const {...other} = props;
	return(
		<Container {...other} className="text-light">
			<Container as="header">
				<h2 className="text-center" >
					Skills
				</h2>
			</Container>
			<Row className="gy-3">
				<Col md={6}>
					<Stack gap={1}>
						<div className="d-flex align-items-center" style={{
							columnGap: "5px"
						}}>
							<Image src={SkillIcon} roundedCircle style={{
								width: "6rem",
								height: "6rem"
							}}/>
							<div>
								<h5>Typecript</h5>
								<p>I use Typecript to develop the HTML5 games.</p>
							</div>
						</div>
						<div className="d-flex align-items-center" style={{
							columnGap: "5px"
						}}>
							<Image src={SkillIcon} roundedCircle style={{
								width: "6rem",
								height: "6rem"
							}}/>
							<div>
								<h5>Pixi.js</h5>
								<p>I use Pixi.js to develop the HTML5 games.</p>
							</div>
						</div>
						<div className="d-flex align-items-center" style={{
							columnGap: "5px"
						}}>
							<Image src={SkillIcon} roundedCircle style={{
								width: "6rem",
								height: "6rem"
							}}/>
							<div>
								<h5>Tween.js</h5>
								<p>I use Tween.js to implement some smooth motion.</p>
							</div>
						</div>
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
					<Stack gap={1}>
						<div className="d-flex align-items-center" style={{
							columnGap: "5px"
						}}>
							<Image src={SkillIcon} roundedCircle style={{
								width: "6rem",
								height: "6rem"
							}}/>
							<div>
								<h5>React.js</h5>
								<p>I use React to develop the web.</p>
							</div>
						</div>
						<div className="d-flex align-items-center" style={{
							columnGap: "5px"
						}}>
							<Image src={SkillIcon} roundedCircle style={{
								width: "6rem",
								height: "6rem"
							}}/>
							<div>
								<h5>Webpack</h5>
								<p>I use Webpack to bundle the code.</p>
							</div>
						</div>
						<div className="d-flex align-items-center" style={{
							columnGap: "5px"
						}}>
							<Image src={SkillIcon} roundedCircle style={{
								width: "6rem",
								height: "6rem"
							}}/>
							<div>
								<h5>Pixi.js</h5>
								<p>I use pixi to develop the HTML5 games.</p>
							</div>
						</div>
					</Stack>
				</Col>
				<Col md={6} className="my-md-auto">
					<h3>Web Develop</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio totam in enim labore dicta velit facere molestias officiis, omnis quaerat delectus quod repellendus doloremque sapiente, beatae aperiam dolore maiores sint rem nesciunt id quasi ipsam atque. Animi, nihil explicabo velit inventore facilis quis ullam tenetur molestiae molestias nulla nemo libero similique. Quaerat adipisci in saepe accusamus hic aliquid quisquam quam.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Skills; 