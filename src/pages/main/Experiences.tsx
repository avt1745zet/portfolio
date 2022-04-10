import React, { ComponentProps, FC } from "react";
import { Col, Row } from "react-bootstrap";

const Experiences: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const timelineItemData: Array<ITimelineItem> = new Array<ITimelineItem>(
		{
			title: "A no job guy.",
			description: "🥲",
			timeIntervalNodes: [new Date(2022,2), "Current"]
		},
		{
			title: "The Dojo Software Solutions Inc.",
			description: "My first job, I learn so many things.",
			timeIntervalNodes: [new Date(2019,8), new Date(2022,2)]
		},
		{
			title: "National Formosa University",
			description: "My education, I learn so many things.",
			timeIntervalNodes: [new Date(2014,9), new Date(2018,6)]
		}
	);
	return (
		<section {...other} className="text-light">
			<header>
				<h2 className="text-center">
					Experiences
				</h2>
			</header>
			<Row>
				<Col xs={12} lg={6}>
					<Timeline items={timelineItemData}/>
				</Col>
				<Col xs={12} lg={6}>
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
		</section>
	);
};

export default Experiences;

const Timeline: FC<ITimelineProps> = (props: ITimelineProps) => {
	const {items} = props;
	return (
		<div style={{
			position: "relative"
		}}>
			{/** Vertical line on center */}
			<div 
				style={{
					position: "absolute",
					width: "2px",
					backgroundColor: "white",
					top: "-1rem",
					bottom: 0,
					left: "calc(50% - 1px)"
				}}
			/>
			{
				items.map((item, index) => {
					const isEvenNumber = (num: number) => {
						return num % 2 === 0;
					};
					return (
						<div 
							key={index}
							style={{
								position: "relative",
								marginBlock: "1rem",
								...isEvenNumber(index)? {
									marginLeft: "50%"
								}: {
									marginRight: "50%"
								}
							}}
						>
							{/** Block with title and description */}
							<div 
								style={{
									padding: "0.5rem",
									...isEvenNumber(index)? {
										marginLeft: "1rem"
									}: {
										marginRight: "1rem"
									}
								}}
							>
								{/** Title block */}
								<div 
									style={{
										position: "relative",
										display: "inline-block",
										borderStyle: "solid",
										borderWidth: "0px",
										backgroundColor: "white",
										padding: "0.3rem",
										...isEvenNumber(index)? {
											borderRadius: "0 10px 10px 10px",
										}: {
											borderRadius: "10px 0 10px 10px",
										}
									}}
								>
									{/** Time interval */}
									<i 
										style={{
											position: "absolute",
											top: "-1rem",
											fontSize: "small",
											...isEvenNumber(index)? {
												left: 0,
											}: {
												right: 0,
											}
										}}
									>
										{
											item.timeIntervalNodes.map(node => {
												return (node instanceof Date)? `${node.getFullYear()}/${node.getMonth()}`: node; 
											}).join(" - ")
										}
									</i>
									{/** Title */}
									<h5 style={{color: "black", marginBottom: 0}}>
										{item.title}
									</h5>
									{/** Triangle in corner  */}
									<div 
										style={{
											position: "absolute",
											top: 0,
											borderStyle: "solid",
											...isEvenNumber(index)? {
												left: "-10px",
												borderColor: "transparent white transparent transparent",
												borderWidth: "0 10px 10px 0",
											}: {
												right: "-10px",
												borderColor: "transparent transparent transparent white",
												borderWidth: "0 0 10px 10px",
											}
										}}
									/>
								</div>
								{/** Description */}
								<p>
									{item.description}
								</p>
							</div>
							{/** Circle on vertical line */}
							<div 
								style={{
									position: "absolute",
									backgroundColor: "black",
									top: 0,
									borderRadius: "50%",
									borderStyle: "solid",
									borderColor: "white",
									borderWidth: "4px",
									width: "1.5rem",
									height: "1.5rem",
									...isEvenNumber(index)? {
										left: "-0.75rem",
									}: {
										right: "-0.75rem",
									}
								}}
							/>
						</div>
					);
				})
			}
		</div>
	);
};

interface ITimelineProps {
	items: Array<ITimelineItem>;
}

interface ITimelineItem {
	title: string;
	description: string;
	timeIntervalNodes: Array<Date|string>;
}