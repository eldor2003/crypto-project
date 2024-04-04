import { Box, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import First from "./First/First.jsx";
import VideoBlock from "./VideoBlock/VideoBlock.jsx";
import Third from "./Third/Third.jsx";
import Four from "./Four/Four.jsx";
import Hands from "./hands/hands.jsx";
import Header from "../components/header/Header.jsx";
import Calculator from "./Calculator/Calculator.jsx";
import Referal from "./Referal/Referal.jsx";
import Logos from "./Logos/Logos.jsx";
import Faq from "./Faq/Faq.jsx";
import Footer from "../components/header/Footer.jsx";
import "../App.css";
const Home = () => {
	return (
		<>
			<Header />
			<Container
				maxWidth={"xl"}
				sx={{
					marginTop: "100px",
				}}
			>
				<First />
				<Hands />
				<VideoBlock />
				<Third />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						maxWidth: "40%",
						marginTop: "60px",
					}}
				>
					<Typography
						gutterBottom
						sx={{
							fontSize: "35px",
							textAlign: "left",
							fontFamily: "Poppins",
						}}
					>
						<span
							style={{
								color: "white",
								fontWeight: "600",
							}}
						>
							Unleash{" "}
						</span>
						<span
							style={{
								fontWeight: "600",
								backgroundImage: "linear-gradient(to right, #2AABEE, #574DCE)",
								color: "transparent",
								WebkitBackgroundClip: "text",
								backgroundClip: "text",
							}}
						>
							your expected profitability
						</span>
					</Typography>
					<Typography
						sx={{
							fontSize: "16px",
							textAlign: "left",
							color: "#FFFFFF40",
						}}
					>
						Earn a stable income with us today.
					</Typography>
				</Box>
				<Box
					// spacing={22} direction="row"
					sx={{
						display: "flex",
						// margin: '0 auto'
					}}
				>
					<Calculator />
					<Four />
				</Box>

				<Referal />
				<Logos />
				<Faq />
			</Container>
			<Footer />
		</>
	);
};

export default Home;
