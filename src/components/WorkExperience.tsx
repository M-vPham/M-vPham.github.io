import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function WorkExperience(): JSX.Element {
	const companyNames = [
		"ServiceEcho",
		"Connected.io",
		"PointClickCare",
		"Thoughtworks CA",
	];
	return (
		<div>
			<Stack
				spacing={3}
				sx={{
					minWidth: 250,
					ml: 10,
					mr: 10,
					mb: 10,
				}}
			>
				<Card variant="outlined" style={{ backgroundColor: "beige" }}>
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
									in Kotlin/Java and Cloudinary for an at-home
									interactive exercise product created by a
									Fortune Future 50 company for a major Q3
									release.
									<br /> Established filter features using
									Kotlin/Java for a major product application
									created by a Fortune Future 50 company that
									allowed users to filter by localization.
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
								</Stack>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
				{/* PointClickCare */}
				<Card>
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
									Developed the rule feature in Typescript.js
									for templates on the flagship Content
									Authoring Management minimal viable product
									(MVP) restricting user selection of rules
									applied on the template and subsequent data
									elements selected.
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									className="chipStack"
									alignItems="center"
									justifySelf="center"
								>
									<Chip variant="outlined" label="React" />
									<Chip
										variant="outlined"
										label="TypeScript"
									/>
									<Chip
										variant="outlined"
										label="JavaScript"
									/>
								</Stack>
							</CardContent>
						</Grid>
					</Grid>
				</Card>

				{/* Connected */}
				<Card>
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
									Specialisation
								</Typography>
								<Typography variant="body2" gutterBottom>
									Engineered the new Android UI in Kotlin for
									a mobile product of a Fortune 500 social
									media company, ensuring a seamless release
									in retailers across the US.
									<br />
									Refactored legacy code to achieve MVVM
									architecture including dependency injection
									and LiveData practices in Kotlin.
									<br />
									Presented and executed on design documents
									for client’s Javascript website aimed
									towards increasing accessibility according
									to WCAG 3.0 and improving user experience
									for customers.
								</Typography>
								<Chip variant="outlined" label="Kotlin" />
								<Chip variant="outlined" label="Java" />
								<Chip variant="outlined" label="JavaScript" />
								<Chip variant="outlined" label="WordPress" />
							</CardContent>
						</Grid>
					</Grid>
				</Card>

				{/* SE */}
				<Card>
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
									Developed a REST API in Java/Apex to create
									and store Salesforce records both locally
									and in the client’s third party database
									resulting in a contract renewal with a key
									client.
									<br />
									Implemented an email parser in Java/Apex
									that created Salesforce records that
									indicated when a customer requested an
									appointment with the client, ensuring a
									contract renewal with an international key
									client.
								</Typography>
								<Chip variant="outlined" label="Apex" />
								<Chip variant="outlined" label="Java" />
								<Chip variant="outlined" label="JavaScript" />
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</Stack>
		</div>
	);
}

export default WorkExperience;
