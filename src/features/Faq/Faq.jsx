import {
	Box,
	Collapse,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";
// import {makeStyles} from '@mui/styles'
import React from "react";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

import ArrawUpRight from "/src/svg/ArrayUpRight.svg";
import ArrawDownRight from "/src/svg/arrowDownRight.svg";

const Faq = () => {
	// const classes = useStyles();
	const [open0, setOpen0] = React.useState(false);
	const [open1, setOpen1] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);
	const [open3, setOpen3] = React.useState(false);
	const [open4, setOpen4] = React.useState(false);

	const handleClick0 = () => {
		setOpen0(!open0);
	};

	const handleClick1 = () => {
		setOpen1(!open1);
	};
	const handleClick2 = () => {
		setOpen2(!open2);
	};
	const handleClick3 = () => {
		setOpen3(!open3);
	};
	const handleClick4 = () => {
		setOpen4(!open4);
	};

	const rows = [
		{
			title: "01. Lorem ipsum dolor sit amet consectetur adipiscing elit",
			text: "SAMDklasnm asdj lashdj ajshdjash djkasha",
			handleClick: handleClick0,
			open: open0,
			fontFamily: "Mulish",
		},
		{
			title: "02. Lorem ipsum dolor sit amet consectetur adipiscing elit",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			handleClick: handleClick1,
			open: open1,
			fontFamily: "Mulish",
		},
		{
			title: "03. Lorem ipsum dolor sit amet consectetur adipiscing elit",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			handleClick: handleClick2,
			open: open2,
			fontFamily: "Mulish",
		},
		{
			title: "04. Lorem ipsum dolor sit amet consectetur adipiscing elit",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			handleClick: handleClick3,
			open: open3,
			fontFamily: "Mulish",
		},
	];

	return (
		<Box
			sx={{
				maxWidth: "960px",
				display: "flex",
				flexDirection: "column",
				fontFamily: "Mulish",
				margin: "80px auto 100px auto",
				// alignItems: 'center'
			}}
		>
			<Typography
				fontSize={"48px"}
				fontFamily={"Poppins"}
				fontWeight={500}
				lineHeight={"115%"}
				sx={{
					fontFamily: "Mulish",
					marginBottom: "20px",
				}}
			>
				Frequently Asked Questions
			</Typography>
			<List
				sx={{
					margin: "0 auto",
					minWidth: "100%",
					fontFamily: "Mulish",
				}}
				component='nav'
				// aria-labelledby="nested-list-subheader"
				// className={classes.root}
			>
				{rows.map(({ title, text, handleClick, open }) => {
					return (
						<>
							<ListItem
								sx={{
									border: "1px solid #3b3950",
									borderRadius: "15px",
									borderBottomLeftRadius: open && 0,
									borderBottomRightRadius: open && 0,
									marginTop: "25px",
									fontFamily: "Mulish",
									background: "linear-gradient(to right,  #18171c, #0e0e13)",
									borderBottom: open && "none",
								}}
								onClick={handleClick}
							>
								<ListItemText primary={title} />
								<Box
									component={"img"}
									src={open ? ArrawUpRight : ArrawDownRight}
								/>
							</ListItem>
							<Collapse in={open} timeout='auto' unmountOnExit>
								<Box
									sx={{
										background: "linear-gradient(to right,  #18171c, #0e0e13)",
										border: "1px solid #3b3950",
										borderTop: open && "none",
										borderRadius: "15px",
										borderTopLeftRadius: open && 0,
										borderTopRightRadius: open && 0,
										fontFamily: "Mulish",
									}}
								>
									<Typography
										fontWeight={400}
										lineHeight={"140%"}
										sx={{
											textAlign: "left",
											marginLeft: "16px",
											marginRight: "16px",
											marginBottom: "10px",
											fontFamily: "Mulish",
											lineHeight: "140%",
											fontSize: "18px",
											color: "rgba(255, 255, 255, 0.4);",
										}}
									>
										{text}
									</Typography>
								</Box>
							</Collapse>
						</>
					);
				})}
			</List>
		</Box>
	);
};

export default Faq;
