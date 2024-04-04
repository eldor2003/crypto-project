import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from "./Logo.jsx";
import CentralButtons from "./CentralButtons.jsx";
import RightButtons from "./RightButtons.jsx";
// import euIcon from '../../svg/EU.svg';

const Header = () => {
	return (
		<AppBar
			elevation={0}
			sx={{
				backgroundColor: "inherit",
				position: "relative",
				display: "flex",
			}}
		>
			<Container
				className={"header"}
				sx={{
					borderRadius: "5px",
					backgroundColor: "rgba(26, 29, 37, 0.51)",
					marginTop: 3,
				}}
			>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Logo />
					<CentralButtons />
					<RightButtons />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
