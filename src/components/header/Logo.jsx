import logo from "../../svg/logo.svg";
import {Box, Typography} from "@mui/material";
import PageStore from "../../store/PageStore.js";

const Logo = () => (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
        <img src={logo}/>
        <Typography
            variant={'h6'}
            sx={{
              backgroundImage: 'linear-gradient(90.09deg, #2AABEE 25.9%, #574DCE 94.34%)',
              WebkitBackgroundClip: 'text',
              MozBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              MozTextFillColor: 'transparent',
              textFillColor: 'transparent',
              fontFamily: 'Poppins',
              marginLeft: 1
            }}
        >
            <span>{PageStore.title}</span>
        </Typography>
    </Box>
);

export default Logo;
