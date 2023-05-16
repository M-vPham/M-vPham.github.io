import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function MenuBar(): JSX.Element {
	return (
		<div className="MenuBar">
			<AppBar position="sticky" color="transparent" elevation={0}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						style={{ flex: 2 }}
					>
						Michelle Thuy Van Pham
					</Typography>
					<div>
						<Link
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<Button id="nav-item" color="inherit">
								About
							</Button>
						</Link>
						<Link
							activeClass="active"
							to="WorkExperience"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<Button id="nav-item" color="inherit">
								Experience
							</Button>
						</Link>
						<Link
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<Button id="nav-item" color="inherit">
								Projects
							</Button>
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
export default MenuBar;
