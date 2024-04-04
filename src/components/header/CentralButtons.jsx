import { Button, Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageStore from "../../store/PageStore";
import "./styles.css";
const CentralButtons = () => {
	const navigate = useNavigate();
	const { centralHeaderButtons } = PageStore;
	return (
		<Box mr={6} sx={{ display: "flex", flexDirection: "row", gap: "50px" }}>
			{centralHeaderButtons.map((page, index) => (
				<Button
					className='header_nav'
					size='large'
					key={index}
					sx={{
						color: "#f5f5f5",
						fontFamily: "Poppins Regular",
						fontSize: "16px",
						fontWeight: 400,
					}}
				>
					<Typography fontFamily='Poppins'>{page}</Typography>
				</Button>
			))}
		</Box>
	);
};

export default CentralButtons;
