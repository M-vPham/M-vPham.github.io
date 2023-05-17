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
				Based in the GTA, my main focus is in Android development and a
				sprinkle of full-stack expertise. I've had the opportunity to
				code the front-end of an android product for a
				<b> Fortune 50 Company</b> and in the development of a
				<b> Future Fortune 50 Company</b> at home fitness device.
				I&apos;ve experienced building products at <b>start-ups</b> and
				transitioning into <b>ramp-ups</b> throughout my internships.
				<br />
				<br />
				Beyond coding, you can catch me climbing (and mostly falling) at
				my local bouldering gym (shoutout to Toprock Climbing) or
				toprope climbing out at Devil's Glen. While coding is the core
				of my career, I find immense joy in learning more math. From
				fractals to set theory, understanding the elegance of the world
				around me ignites my curiosity and fuels my passion for
				mathematics.
			</Typography>
		</div>
	);
}

export default About;
