import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../svg/logo.svg";
import PageStore from "../../store/PageStore.js";
import "./styles.css";
const Footer = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer_block'>
					<div className='footer_top'>
						<div className='footer_top_item'>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<img src={logo} />
								<Typography
									variant={"h6"}
									sx={{
										backgroundImage:
											"linear-gradient(90.09deg, #2AABEE 25.9%, #574DCE 94.34%)",
										WebkitBackgroundClip: "text",
										MozBackgroundClip: "text",
										backgroundClip: "text",
										WebkitTextFillColor: "transparent",
										MozTextFillColor: "transparent",
										textFillColor: "transparent",
										fontFamily: "Poppins",
										marginLeft: 1,
									}}
								>
									<span>{PageStore.title}</span>
								</Typography>
							</Box>
							<p className='footer_desc'>
								Trade liquidity cells for fun and earning
							</p>
						</div>
						<div className='footer_item'>
							<p className='footer_top_name'>Usefull Links</p>
							<div className='footer_nav'>
								<div className='nav_item'>
									<a href='#'>Home</a>
								</div>
								<div className='nav_item'>
									<a href='#'>Market</a>
								</div>
								<div className='nav_item'>
									<a href='#'>Trade</a>
								</div>
								<div className='nav_item'>
									<a href='#'>FAQ</a>
								</div>
								<div className='nav_item'>
									<a href='#'>Terms & Services</a>
								</div>
							</div>
						</div>
						<div className='footer_item'>
							<p className='footer_top_name'>Community</p>
							<div className='footer_nav'>
								<div className='nav_item'>
									<a href='#'>Help Center</a>
								</div>
								<div className='nav_item'>
									<a href='#'>Documentation</a>
								</div>
								<div className='nav_item'>
									<a href='#'>Blog</a>
								</div>
								<div className='nav_item'>
									<a href='#'>Newsletters</a>
								</div>
							</div>
						</div>
						<div className='footer_item'>
							<p className='footer_top_name'>Partner</p>
							<div className='footer_nav'>
								<div className='nav_item'>
									<a href='#'>Our Partner</a>
								</div>
								<div className='nav_item'>
									<a href='#'>Become a Partner</a>
								</div>
							</div>
						</div>
					</div>
					<div className='footer_bottom'>
						<div className='footer_bottom_left'>
							<p className='copyright'>Copyright </p>
							<img src='/src/svg/copyright.png' alt='' />
							<p className='gate'>2024 GATE All Rights Reserved.</p>
						</div>
						<div className='footer_bottom_right'>
							<div className='footer_socials'>
								<a href='#'>
									<img src='/src/svg/instagram.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/src/svg/facebook.svg' alt='' />
								</a>
								<a href='#'>
									<img src='/src/svg/twitter.svg' alt='' />
								</a>
								<a href='#'>
									<img src='/src/svg/linkedin.svg' alt='' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
