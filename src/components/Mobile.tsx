import React, { useEffect, useState } from "react";

import ProfileCard from "./ProfileCard";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Typography from "@mui/material/Typography";

import "../home.css";

function Mobile(): JSX.Element {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 500;
	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
	}, []);

	return (
		<div className="desktop">
			<ProfileCard />
			<About />
			<Typography
				id="WorkExperience"
				className="WorkExperience"
				variant="h4"
				color="common.white"
				sx={{ ml: 5 }}
				gutterBottom
			>
				Work Experiences
			</Typography>
			<WorkExperience />

			<Typography
				id="Projects"
				className="Projects"
				variant="h4"
				color="common.white"
				sx={{ ml: 5 }}
				gutterBottom
			>
				Projects
			</Typography>
			<Projects />
		</div>
	);
}

export default Mobile;
