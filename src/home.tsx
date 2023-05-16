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
