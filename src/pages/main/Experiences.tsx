import React, {ComponentProps, FC} from "react";
import {Col, Row} from "react-bootstrap";
import {Trans, useTranslation} from "react-i18next";

const Experiences: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const [t] = useTranslation();
	const timelineItemData: Array<ITimelineItem> = new Array<ITimelineItem>(
		{
			titleKey: "experiences.timeline.events.0.title",
			descriptionKey: "experiences.timeline.events.0.description",
			timeIntervalNodes: [new Date(2014, 9), new Date(2018, 6)]
		},
		{
			titleKey: "experiences.timeline.events.1.title",
			descriptionKey: "experiences.timeline.events.1.description",
			timeIntervalNodes: [new Date(2019, 8), new Date(2022, 2)]
		},
		{
			titleKey: "experiences.timeline.events.2.title",
			descriptionKey: "experiences.timeline.events.2.description",
			timeIntervalNodes: [new Date(2022, 5), new Date(2024, 8)]
		},
		{
			titleKey: "experiences.timeline.events.3.title",
			descriptionKey: "experiences.timeline.events.3.description",
			timeIntervalNodes: [new Date(2024, 9), t("experiences.timeline.today")]
		}
	);
	return (
		<section {...other} className="text-light my-5">
			<header>
				<h1 className="text-uppercase">
					{t("experiences.title")}
				</h1>
			</header>
			<Row className="mt-4">
				<Col xs={12}>
					<Timeline items={timelineItemData.reverse()} />
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
					left: "-1px"
				}}
			/>
			{
				items.map((item, index) => {
					return (
						<div
							key={index}
							style={{
								position: "relative",
								marginBlock: "1rem"
							}}
						>
							{/** Block with title and description */}
							<div
								style={{
									padding: "0.5rem",
									textAlign: "start",
									marginLeft: "1rem"
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
										borderRadius: "0 10px 10px 10px",
									}}
								>
									{/** Time interval */}
									<i
										style={{
											position: "absolute",
											top: "-1.2rem",
											fontSize: "small",
											whiteSpace: "nowrap",
											left: 0,
										}}
									>
										{
											item.timeIntervalNodes.map(node => {
												return (node instanceof Date) ? `${node.getFullYear()}/${node.getMonth()}` : node;
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
											left: "-9px",
											borderColor: "transparent white transparent transparent",
											borderWidth: "0 10px 10px 0",
										}}
									/>
								</div>
								{/** Description */}
								<Trans i18nKey={item.descriptionKey} components={{p: <p style={{marginTop: "0.2rem"}} />, ul: <ul />, li: <li />}} />
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
									left: "-0.75rem",
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
	timeIntervalNodes: Array<Date | string>;
}