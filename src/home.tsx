import React from "react";
import MenuBar from "./components/MenuBar";
import ProfileCard from "./components/ProfileCard";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./home.css";

function Home(): JSX.Element {
	return (
		<div className="app">
			<MenuBar />
			<div id="About" className="About">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<ProfileCard />
					</Grid>
					<Grid item xs={6}>
						<About />
					</Grid>
				</Grid>
			</div>
			<div id="WorkExperience" className="WorkExperience">
				<Typography
					variant="h4"
					color="common.white"
					sx={{ ml: 10 }}
					gutterBottom
				>
					Work Experiences
				</Typography>
				<WorkExperience />
			</div>
			<div id="Projects" className="Projects">
				<Typography
					variant="h4"
					color="common.white"
					sx={{ ml: 10 }}
					gutterBottom
				>
					Projects
				</Typography>
				<Projects />
			</div>
		</div>
	);
}

export default Home;
