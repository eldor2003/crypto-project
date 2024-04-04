import { Button, ButtonGroup, Stack } from "@mui/material";
import PageStore from "../../store/PageStore";
import { useNavigate } from "react-router-dom";
import euIcon from "../../svg/EU.svg";
import "./styles.css";
import langImg from "../../svg/EU.svg";
const RightButtons = () => {
	const { rightHeaderButtons } = PageStore;
	const navigate = useNavigate();

	return (
		<div className='rightButtons'>
			<a href='#' className='language'>
				<img src={langImg} alt='lang_img' />
			</a>
			<div className='right_buttons'>
				<button className='login'>Join</button>
				<button className='market'>Market</button>
			</div>
		</div>
	);
};

export default RightButtons;
