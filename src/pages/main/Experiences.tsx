import React, { ComponentProps, FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

const Experiences: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const [t] = useTranslation();
	const timelineItemData: Array<ITimelineItem> = new Array<ITimelineItem>(
		{
			titleKey: "experiences.timeline.events.0.title",
			descriptionKey: "experiences.timeline.events.0.description",
			timeIntervalNodes: [new Date(2022,2), "Current"]
		},
		{
			titleKey: "experiences.timeline.events.1.title",
			descriptionKey: "experiences.timeline.events.1.description",
			timeIntervalNodes: [new Date(2019,8), new Date(2022,2)]
		},
		{
			titleKey: "experiences.timeline.events.2.title",
			descriptionKey: "experiences.timeline.events.2.description",
			timeIntervalNodes: [new Date(2014,9), new Date(2018,6)]
		}
	);
	return (
		<section {...other} className="text-light my-5">
			<header>
				<h1 className="text-center text-uppercase">
					{t("experiences.title")}
				</h1>
			</header>
			<Row>
				<Col xs={12} lg={6}>
					<Timeline items={timelineItemData}/>
				</Col>
				<Col xs={12} lg={6} className="align-self-center">
					<Trans i18nKey="experiences.description" components={{p: <p/>}}/>
				</Col>
			</Row>
		</section>
	);
};

export default Experiences;

const Timeline: FC<ITimelineProps> = (props: ITimelineProps) => {
	const {items} = props;
	const [t] = useTranslation();
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
										textAlign: "start",
										marginLeft: "1rem"
									}: {
										textAlign: "end",
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
									<h5 style={{color: "black", marginBottom: 0, textAlign: "start"}}>
										{t(item.titleKey)}
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
								<p style={{textAlign: "start"}}>
									{t(item.descriptionKey)}
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
	titleKey: string;
	descriptionKey: string;
	timeIntervalNodes: Array<Date|string>;
}