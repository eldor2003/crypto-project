import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/Home.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Mobile from "./mobile/index.jsx";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import backgroundImage from "./svg/background.svg";
<link rel='stylesheet' href='/src/styles/index.css' />;

function App() {
	const [isMobile, setMobile] = useState(false);
	const darkTheme = createTheme({
		palette: {
			mode: "dark",

			primary: {
				main: "#90caf9",
			},
			secondary: {
				main: "#f48fb1",
			},
			background: {
				default: `url(${backgroundImage})`,
			},
		},
	});

	useEffect(() => {
		setInterval(() => {
			setMobile(window.matchMedia("(max-width: 1054px)").matches);
		}, 1);
	});

	return (
		<Box
			sx={{
				overflowX: "hidden",
			}}
		>
			<ThemeProvider theme={darkTheme}>
				<Router>
					<Routes>
						<Route
							path='/'
							element={
								isMobile ? <Mobile sx={{ overflowX: "hidden" }} /> : <Home />
							}
						/>
						{/*<Route path="/about" element={<About />} />*/}
					</Routes>
				</Router>
				<CssBaseline />
			</ThemeProvider>
		</Box>
	);
}

export default App;
