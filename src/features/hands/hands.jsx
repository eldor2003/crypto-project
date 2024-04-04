import { Box } from "@mui/material";
import ball from "/src/svg/ball.svg";
import leftArm from "/src/svg/leftArm1.svg";
import rightArm from "/src/svg/rightArm1.svg";
import React from "react";

class Hands extends React.Component {
	componentDidMount() {
		const ballEl = document.querySelector("#ball"); //*[@id="root"]/div/div/div[2]/div[1]
		const leftArmEl = document.querySelector("#leftArm");
		const rightArmEl = document.querySelector("#rightArm");

		ballEl &&
			ballEl.addEventListener("mouseenter", () => {
				ballEl.style.transform = "translate(0, 0) rotate(-30deg) scale(1.33)";
				leftArmEl.style.transform =
					"translate(60px, -30px) rotate(3deg) scale(1.05)";
				rightArmEl.style.transform = "translate(-190px, 20px) rotate(-2deg)";
			});

		ballEl &&
			ballEl.addEventListener("mouseleave", () => {
				ballEl.style.transform = "translate(0)";
				leftArmEl.style.transform = "translate(0)";
				rightArmEl.style.transform = "translate(0)";
			});
	}
	render() {
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					// alignItems: 'center',
					gap: "30%",
					margin: "250px",
				}}
			>
				<Box
					sx={{
						// zIndex: 10,
						display: "flex",
						justifyContent: "end",
						alignItems: "end",
						padding: 0,
						position: "absolute",
						top: "680px",
						left: "-110px",
						// marginBottom: 50
					}}
					id={"leftArm"}
					component={"img"}
					src={leftArm}
				/>
				<Box
					sx={{
						zIndex: 9,
						display: "flex",
						justifyContent: "end",
						alignItems: "end",
						padding: 0,
						position: "absolute",
						top: "680px",
						// left: '50%'

						// marginBottom: 50
					}}
					id={"ball"}
					component={"img"}
					src={ball}
				/>
				<Box
					id={"rightArm"}
					sx={{
						zIndex: 8,
						display: "flex",
						justifyContent: "end",
						alignItems: "end",
						padding: 0,
						overflow: "auto",
						position: "absolute",
						top: "110px",
						left: "75%",

						// marginBottom: 50
					}}
					component={"img"}
					src={rightArm}
				/>
			</Box>
		);
	}
}

export default Hands;
