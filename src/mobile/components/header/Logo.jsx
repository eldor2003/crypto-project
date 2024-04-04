import logo from '/src/svg/logo.svg'
import {Box, Typography} from "@mui/material";
import PageStore from "../../../store/PageStore.js";

const Logo = ({withoutText}) => (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '0px',
      // paddingRight: '10px'
      // position: 'absolute',
      // left: 0
    }}>
        <Box
          component={'img'}
          src={logo}
          height={'35px'}
          width={'35px'}
        />
      {
        !withoutText && (
          <Typography
            sx={{
              backgroundImage: 'linear-gradient(90.09deg, #2AABEE 25.9%, #574DCE 94.34%)',
              WebkitBackgroundClip: 'text',
              MozBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              MozTextFillColor: 'transparent',
              textFillColor: 'transparent',
              fontFamily: 'Poppins',
              fontSize: '14px',
              marginLeft: 1
            }}
          >
            <span>{PageStore.title}</span>
          </Typography>
        )
      }
    </Box>
);

export default Logo;
