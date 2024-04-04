import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowUpRight from "/src/svg/ArrayUpRight.svg";
import toMakertSvg from "/src/svg/toMarket.svg";

const LeftColumn = () => {
	return (
		<Grid item xs={12} md={6}>
			<Box>
				<Button
					className={"buttonDark"}
					sx={{
						display: "flex",
						alignItems: "center",
						width: "183px",
						height: "45px",
						// backgroundColor: 'black',
						borderRadius: "10px",
						marginBottom: "25px",
						padding: "10px, 30px",
						color: "#fff",
					}}
					// variant={'contained'}
				>
					<Typography variant={"h6"}>MOMENT 1.0</Typography>
				</Button>
				<Typography
					variant='h4'
					fontSize='50px'
					fontWeight='600'
					fontFamily='Poppins'
					sx={{
						textAlign: "left",
						backgroundImage: "linear-gradient(to right, #2AABEE, #574DCE)",
						color: "transparent",
						WebkitBackgroundClip: "text",
						backgroundClip: "text",
						// WebkitBackgroundClip: "text",
						// WebkitTextFillColor: "transparent"
					}}
				>
					A new era
				</Typography>
				<Typography
					gutterBottom
					variant='h4'
					sx={{
						fontFamily: "Poppins",
						textAlign: "left",
					}}
				>
					of liquidity cell trading
				</Typography>
			</Box>
			<Typography
				variant={"body1"}
				gutterBottom
				color='rgba(255, 255, 255, 0.4)'
				maxWidth={"70%"}
				sx={{
					textAlign: "left",
					marginBottom: "15px",
				}}
			>
				Affordable trading for everyone, use automated trading to increase your
				budget
			</Typography>
			{/*<Box sx={{float: 'left'}}>*/}
			{/*  <a><img src={toMakertSvg}/></a>*/}
			{/*</Box>*/}
			<Button
				size={"large"}
				className={"button"}
				sx={{
					height: "60px",
					width: "231px",
					float: "left",
					background: "linear-gradient(to right, #2c9fdb, #564ccf)",
					borderRadius: "5px",
					marginTop: "30px",
				}}
				endIcon={<img src={ArrowUpRight} />}
			>
				<Typography
					sx={{
						color: "white",
						marginRight: "10%",
					}}
				>
					To the market
				</Typography>
			</Button>
		</Grid>
	);
};

export default LeftColumn;
