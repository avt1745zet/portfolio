import React, { ComponentProps, FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import AvatarImage from "./../../assets/images/avatar.png";

const Overview: FC<ComponentProps<"section">> = (props: ComponentProps<"section">) => {
	const {...other} = props;
	const [t] = useTranslation();
	return (
		<section {...other} className="text-light mb-5">
			<Row className="justify-content-sm-center justify-content-md-start" 
				style={{
					paddingTop: "70px" /** Height of navbar */
				}}
			>
				{/** Avatar */}
				<Col md={4} lg={3}>
					<Image src={AvatarImage} roundedCircle className="mx-auto d-block"/>
					<p className="text-center text-decoration-underline" style={{
						marginTop: "-1rem"
					}}>
						<i>
							{t("overview.quickBio")}
						</i>
					</p>
				</Col>
				<Col md={8} lg={9} className="mt-auto">
					<p>
						<Trans i18nKey="overview.introduction" components={{big: <big className="fs-1"/>}}/>
					</p>
				</Col>
			</Row>
		</section>
	);
};

export default Overview;