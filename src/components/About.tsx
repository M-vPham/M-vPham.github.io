import React from "react";
import Typography from "@mui/material/Typography";

function About(): JSX.Element {
	return (
		<div className="About">
			<Typography
				variant="h6"
				align="left"
				color="common.white"
				gutterBottom
			>
				Based in the GTA, my main focus is in Android and full-stack
				development. I&apos;ve worked at different sized firms ranging
				from product development at <b>start-ups</b>, to meeting client
				demands at <b>ramp-ups</b>, and finally mainting products at{" "}
				<b>large corporations</b>. I&apos;ve been fortunate to be a
				front-end engineer of an android product for a
				<b> Fortune 50 Company</b> and participate in the development of{" "}
				an at home fitness product of a<b> Future Fortune 50 Company</b>
				.
				<br />
				<br />
				Beyond coding, you can catch me climbing (and mostly falling) at
				my local bouldering gym (shoutout to Toprock Climbing). While
				coding is the core of my career, I find immense joy in learning
				math. From fractals to graph theory, understanding the elegance
				of the world around me in numbers and patterns fuels my passion
				for mathematics.
			</Typography>
		</div>
	);
}

export default About;
