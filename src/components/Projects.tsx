import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import fossil from "../img/helixSprite.png";
import fridge from "../img/fridge.png";
import grid from "../img/grid.png";

function Projects(): JSX.Element {
	return (
		<div className="projectContainer">
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<div className="card">
						<Card
							variant="outlined"
							sx={{
								":hover": {
									boxShadow: 15,
								},
								minHeight: 350,
							}}
						>
							<img
								className="cardImg"
								src={fossil}
								style={{
									width: 100,
									height: 100,
								}}
							/>
							<CardContent>
								<Typography
									variant="body1"
									color="text.primary"
									style={{ fontSize: 18 }}
								>
									Fossil Finder
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Android Application - Ongoing
								</Typography>
								<Typography variant="body2" gutterBottom>
									An android application that identifies the
									fossil or type of rock in question using
									camera and AI learning capabilities.
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									alignItems="center"
									justifySelf="center"
								>
									<Chip variant="outlined" label="Kotlin" />
									<Chip variant="outlined" label="Java" />
									<Chip variant="outlined" label="MongoDB" />
									<Chip
										variant="outlined"
										label="TensorFlow"
									/>
								</Stack>
							</CardContent>
						</Card>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div className="card">
						<Card
							sx={{
								":hover": {
									boxShadow: 15, // theme.shadows[20]
								},
								minHeight: 350,
							}}
						>
							<img
								className="cardImg"
								src={fridge}
								style={{
									width: 100,
									height: 100,
								}}
							/>
							<CardContent>
								<Typography
									variant="body1"
									color="text.primary"
									style={{ fontSize: 18 }}
								>
									Mom's Fridge
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Web Application - Complete
								</Typography>
								<Typography variant="body2" gutterBottom>
									Filtered my mother’s recipes by available
									ingredients inputted by utilising fuzzy
									search.
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									useFlexGap
									flexWrap="wrap"
								>
									<Chip variant="outlined" label="React" />
									<Chip variant="outlined" label="Express" />
									<Chip variant="outlined" label="MongoDB" />
									<Chip variant="outlined" label="GraphQL" />
									<Chip variant="outlined" label="Node" />
									<Chip
										variant="outlined"
										label="Semantic-UI"
									/>
								</Stack>
							</CardContent>
						</Card>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div className="card">
						<Card
							variant="outlined"
							sx={{
								":hover": {
									boxShadow: 15, // theme.shadows[20]
								},
								minHeight: 350,
							}}
						>
							<img
								className="cardImg"
								src={grid}
								style={{
									width: 100,
									height: 100,
								}}
							/>
							<CardContent>
								<Typography
									variant="body1"
									color="text.primary"
									style={{ fontSize: 18 }}
								>
									Grid World
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Python Terminal Application - Complete
								</Typography>
								<Typography variant="body2" gutterBottom>
									{" "}
									A 10x10 grid world with a randomize start
									and end point that will compare between
									reinforcement learning algorithms (SARSA,
									Q-Learning, and MonteCarlo).
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									alignItems="center"
									justifySelf="center"
								>
									<Chip variant="outlined" label="Python" />
									<Chip variant="outlined" label="Numpy" />
								</Stack>
							</CardContent>
						</Card>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Projects;
