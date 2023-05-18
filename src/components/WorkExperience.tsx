import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import withStyles from "@mui/material/styles/withStyles";

import "./css/WorkExperience.css";

function WorkExperience(): JSX.Element {
	return (
		<div>
			<Stack
				className="experienceContainer"
				spacing={3}
				sx={{
					minWidth: 250,
				}}
			>
				<Card
					className="experienceCard"
					sx={{
						":hover": {
							boxShadow: 15, // theme.shadows[20]
						},
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<CardContent>
								<Typography
									variant="body2"
									color="text.secondary"
									align="right"
								>
									May - Aug 2022
								</Typography>
							</CardContent>
						</Grid>
						<Grid item xs={10}>
							<CardContent>
								<Typography
									variant="body1"
									color="text.primary"
									style={{ fontSize: 18 }}
								>
									Thoughtworks Canada
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Software Engineer Co-op - Android
									Specialization
								</Typography>
								<Typography variant="body2" gutterBottom>
									Implemented QR account activation and login
									in <b>Kotlin/Java</b> and <b>Cloudinary</b>{" "}
									for an at-home interactive exercise product
									created by a <b>Fortune Future 50</b>{" "}
									company.
									<br /> Established filter features using{" "}
									<b>Kotlin/Java</b> for a major product
									application created by a{" "}
									<b>Fortune Future 50</b> company that
									allowed users to filter by localization.
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									useFlexGap
									flexWrap="wrap"
								>
									<Chip
										variant="filled"
										color="secondary"
										label="Kotlin"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="Java"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="MongoDB"
									/>
								</Stack>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
				{/* PointClickCare */}
				<Card
					className="experienceCard"
					sx={{
						":hover": {
							boxShadow: 15, // theme.shadows[20]
						},
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<CardContent>
								<Typography
									variant="body2"
									color="text.secondary"
									align="right"
								>
									Jan - Apr 2022
								</Typography>
							</CardContent>
						</Grid>
						<Grid item xs={10}>
							<CardContent>
								<Typography
									variant="body1"
									color="text.primary"
									style={{ fontSize: 18 }}
								>
									PointClickCare
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Full-stack Engineer Co-op
								</Typography>
								<Typography variant="body2" gutterBottom>
									Developed the rule feature in{" "}
									<b>Typescript</b> for templates on the
									flagship Content Authoring Management MVP
									restricting user selection of rules applied
									on the template and subsequent data elements
									selected.
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									useFlexGap
									flexWrap="wrap"
								>
									<Chip
										variant="filled"
										color="secondary"
										label="React"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="TypeScript"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="JavaScript"
									/>
								</Stack>
							</CardContent>
						</Grid>
					</Grid>
				</Card>

				{/* Connected */}
				<Card
					className="experienceCard"
					sx={{
						":hover": {
							boxShadow: 15, // theme.shadows[20]
						},
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<CardContent>
								<Typography
									variant="body2"
									color="text.secondary"
									align="right"
								>
									May - Aug 2021
								</Typography>
							</CardContent>
						</Grid>
						<Grid item xs={10}>
							<CardContent>
								<Typography
									variant="body1"
									color="text.primary"
									style={{ fontSize: 18 }}
								>
									Connected.io
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Software Engineer Co-op - Android
									Specialization
								</Typography>
								<Typography variant="body2" gutterBottom>
									Engineered the new Android UI in{" "}
									<b>Kotlin</b> for a mobile product of a
									<b> Fortune 50</b> social media company.
									<br />
									Refactored legacy code to achieve{" "}
									<b>MVVM architecture</b> including{" "}
									<b>dependency injection and LiveData</b>{" "}
									practices in Kotlin.
									<br />
									Presented and executed on design documents
									for client&apos;s Javascript website aimed
									towards increasing accessibility according
									to <b>WCAG 3.0</b> and improving user
									experience for customers.
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									useFlexGap
									flexWrap="wrap"
								>
									<Chip
										variant="filled"
										color="secondary"
										label="Kotlin"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="Java"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="JavaScript"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="WordPress"
									/>
								</Stack>
							</CardContent>
						</Grid>
					</Grid>
				</Card>

				{/* SE */}
				<Card
					className="experienceCard"
					sx={{
						":hover": {
							boxShadow: 15, // theme.shadows[20]
						},
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<CardContent>
								<Typography
									variant="body2"
									color="text.secondary"
									align="right"
								>
									May - Dec 2020
								</Typography>
							</CardContent>
						</Grid>
						<Grid item xs={10}>
							<CardContent>
								<Typography
									variant="body1"
									color="text.primary"
									style={{ fontSize: 18 }}
								>
									ServiceEcho
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									Software Engineer Co-op
								</Typography>
								<Typography variant="body2" gutterBottom>
									Developed a <b>REST API</b> in <b>Apex</b>{" "}
									to create and store Salesforce records both
									locally and in the client&apos;s third party
									database.
									<br />
									Implemented an email parser in <b>
										Apex
									</b>{" "}
									that created Salesforce records indicating
									when a customer requested an appointment
									with the client.
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									useFlexGap
									flexWrap="wrap"
								>
									<Chip
										variant="filled"
										color="secondary"
										label="Apex"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="Java"
									/>
									<Chip
										variant="filled"
										color="secondary"
										label="JavaScript"
									/>
								</Stack>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</Stack>
		</div>
	);
}

export default WorkExperience;
