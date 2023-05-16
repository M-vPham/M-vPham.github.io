import React from "react";
import { MouseEventHandler, useRef } from "react";
import MenuBar from "./components/MenuBar";
import ProfileCard from "./components/ProfileCard";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./home.css";

function Home(): JSX.Element {
	const AboutRef = useRef<null | HTMLDivElement>(null);
	// const ExperienceRef = useRef<null | HTMLDivElement>(null);
	// const ProjectsRef = useRef<null | HTMLDivElement>(null);

	const onAboutClick: React.MouseEventHandler = () =>
		AboutRef.current?.scrollIntoView({
			behavior: "smooth",
		});

	return (
		<div className="app">
			<MenuBar onAbout={onAboutClick} />
			<div className="About">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<ProfileCard />
					</Grid>
					<Grid item xs={6}>
						<About />
					</Grid>
				</Grid>
			</div>
			<div ref={AboutRef} className="WorkExperience">
				<Typography
					variant="h4"
					color="textPrimary"
					sx={{ ml: 10 }}
					gutterBottom
				>
					Work Experiences
				</Typography>
				<WorkExperience />
			</div>
		</div>
	);
}

export default Home;
