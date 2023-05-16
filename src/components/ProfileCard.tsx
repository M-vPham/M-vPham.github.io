import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import profilePicture from "../img/profilePicture.png";
import resume from "../documents/resume.pdf";

function ProfileCard(): JSX.Element {
	return (
		<div className="profileCard">
			<img
				className="profilePicture"
				src={profilePicture}
				style={{
					width: 250,
					height: 250,
					padding: 2,
				}}
			/>
			<Typography
				component="h1"
				variant="h2"
				align="center"
				color="textPrimary"
			>
				Hi, I'm Michelle Pham
			</Typography>
			<Typography
				className="subtitle"
				component="h2"
				variant="h5"
				align="center"
				color="textPrimary"
				gutterBottom
			>
				Software Developer
			</Typography>
			<Typography
				className="desc"
				variant="body1"
				align="center"
				color="textPrimary"
			>
				I&apos;m a V4/5.10+ indoor climber. An avid boardgame and
				videogame enthusiast. <br />
				And I guess I code android and full-stack applications.
			</Typography>
			<Box display="flex" sx={{ mb: 2 }}>
				<Stack
					direction="row"
					spacing={1}
					className="chipStack"
					alignItems="center"
					justifySelf="center"
				>
					<GitHubIcon
						onClick={() =>
							window.open("https://github.com/M-vPham")
						}
					/>
					<LinkedInIcon
						onClick={() =>
							window.open("https://www.linkedin.com/in/mtvpham/")
						}
					/>
					<TextSnippetIcon onClick={() => window.open(resume)} />
				</Stack>
			</Box>
			<Box display="flex">
				<Stack
					direction="row"
					spacing={1}
					className="chipStack"
					alignItems="center"
					justifySelf="center"
				>
					<Chip variant="outlined" label="Kotlin" />
					<Chip variant="outlined" label="Java" />
					<Chip variant="outlined" label="React" />
					<Chip variant="outlined" label="GraphQL" />
					<Chip variant="outlined" label="MongoDB" />
				</Stack>
			</Box>
		</div>
	);
}

export default ProfileCard;
