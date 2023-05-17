import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
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
				color="common.white"
			>
				Hi, I'm Michelle Pham
			</Typography>
			<Typography
				className="subtitle"
				component="h2"
				variant="h5"
				align="center"
				color="common.white"
				gutterBottom
			>
				Software Developer
			</Typography>
			<Typography
				className="desc"
				variant="body1"
				align="center"
				color="common.white"
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
					<Tooltip title="Github" arrow>
						<GitHubIcon
							color="secondary"
							onClick={() =>
								window.open("https://github.com/M-vPham")
							}
						/>
					</Tooltip>
					<Tooltip title="Linkedin" arrow>
						<LinkedInIcon
							color="secondary"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/mtvpham/"
								)
							}
						/>
					</Tooltip>

					<Tooltip title="Resume" arrow>
						<TextSnippetIcon
							color="secondary"
							onClick={() => window.open(resume)}
						/>
					</Tooltip>
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
					<Chip variant="filled" label="Kotlin" color="secondary" />
					<Chip variant="filled" label="Java" color="secondary" />
					<Chip variant="filled" label="React" color="secondary" />
					<Chip variant="filled" label="GraphQL" color="secondary" />
					<Chip variant="filled" label="MongoDB" color="secondary" />
				</Stack>
			</Box>
		</div>
	);
}

export default ProfileCard;
