import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MenuBar from "./components/MenuBar";
import ProfileCard from "./components/ProfileCard";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./home.css";

function Home(): JSX.Element {
	const componentVariant = {
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		hidden: { opacity: 0, y: 80 },
	};

	const profileControls = useAnimation();
	const experienceControls = useAnimation();
	const projectControls = useAnimation();
	const [profileRef, profileInView] = useInView();
	const [experienceRef, experienceInView] = useInView();
	const [projectRef, projectInView] = useInView();

	useEffect(() => {
		if (profileInView) {
			profileControls.start("visible");
		}
	}, [profileControls, profileInView]);

	useEffect(() => {
		if (experienceInView) {
			experienceControls.start("visible");
		}
	}, [experienceControls, experienceInView]);

	useEffect(() => {
		if (projectInView) {
			projectControls.start("visible");
		}
	}, [projectControls, projectInView]);

	return (
		<div className="app">
			<MenuBar />
			<motion.div
				className="About"
				ref={profileRef}
				animate={profileControls}
				initial="hidden"
				variants={componentVariant}
			>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<ProfileCard />
					</Grid>
					<Grid item xs={6}>
						<About />
					</Grid>
				</Grid>
			</motion.div>
			<motion.div
				id="WorkExperience"
				className="WorkExperience"
				ref={experienceRef}
				animate={experienceControls}
				initial="hidden"
				variants={componentVariant}
			>
				<Typography
					variant="h4"
					color="common.white"
					sx={{ ml: 10 }}
					gutterBottom
				>
					Work Experiences
				</Typography>
				<WorkExperience />
			</motion.div>
			<motion.div
				id="Projects"
				className="Projects"
				ref={projectRef}
				animate={projectControls}
				initial="hidden"
				variants={componentVariant}
			>
				<Typography
					variant="h4"
					color="common.white"
					sx={{ ml: 10 }}
					gutterBottom
				>
					Projects
				</Typography>
				<Projects />
			</motion.div>
		</div>
	);
}

export default Home;
