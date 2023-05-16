import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function MenuBar(props: { onAbout: React.MouseEventHandler }): JSX.Element {
	return (
		<div className="MenuBar">
			<AppBar
				position="sticky"
				color="transparent"
				elevation={0}
				style={{ paddingBottom: 10 }}
			>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						style={{ flex: 1 }}
					>
						Michelle Thuy Van Pham
					</Typography>
					<div>
						<Button onClick={props.onAbout} color="inherit">
							About
						</Button>
						<Button color="inherit">Experience</Button>
						<Button color="inherit">Projects</Button>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
export default MenuBar;
