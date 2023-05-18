import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

import "./home.css";

function Home(): JSX.Element {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 500;

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
	}, []);

	return width < breakpoint ? <Mobile /> : <Desktop />;
}

export default Home;
