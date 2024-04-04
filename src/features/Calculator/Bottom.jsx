import { Box, Button, Typography } from "@mui/material";
import arrow from "/src/svg/ArrayUpRight.svg";

const Bottom = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				marginTop: "30px",
				marginBottom: "10px",
			}}
		>
			<Button
				// size={'large'}
				className={"button"}
				sx={{
					background: "linear-gradient(to right, #2c9fdb, #564ccf)",
					borderRadius: "5px",
					marginRight: "auto",
					marginLeft: "0",
					width: "127px",
					height: "45px",
				}}
			>
				<Typography
					sx={{
						color: "white",
						fontSize: "16px",
					}}
				>
					Go market
				</Typography>
			</Button>
			<Typography
				sx={{
					marginLeft: "auto",
					marginRight: "0",
					fontWeight: "400",
					fontSize: "16px",
					color: "#899BC7",
				}}
			>
				MIN. $1000 MAX. $3000
			</Typography>
		</Box>
	);
};

export default Bottom;
