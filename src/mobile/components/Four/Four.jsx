import {Box, Typography} from "@mui/material";
import YourCash from './YourCash.jsx';
import PayMethod from './PayMethod.jsx';
import Circles from '/src/svg/Circles.svg';
// import YourCashSvg from '/src/svg/YourCash.svg';
import dollar from '/src/svg/mobile/dollar.png';
import eth from '/src/svg/mobile/eth.png';

const Four = () => {
  
  const isSmall = window.matchMedia("(max-width: 375px)").matches;
  return (
    <Box
      sx={{
        marginTop: '20px'
      }}
    >
      <Typography
        gutterBottom
        sx={{
          fontSize: '35px',
          textAlign: 'left'
        }}
      >
        <span style={{color: 'white'}}>Unleash </span>
        <span style={{
          backgroundImage: 'linear-gradient(to right, #2AABEE, #574DCE)',
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text"
        }}>your expected profitability</span>
      </Typography>
      <Typography
        sx={{
          fontSize: '16px',
          textAlign: 'left',
          color: '#FFFFFF40',
        }}
      >
        Earn a stable income with us today.
      </Typography>
      <Box
        sx={{
          marginTop: '50px',
          // backgroundColor: 'black',
          position: 'relative',
          height: '300px'
        }}
      >
        <Box
          src={Circles}
          width={'250px'}
          height={'250px'}
          component={'img'}
          sx={{
            // position: 'absolute',
            left: 0
          }}
        />
        <YourCash />
        <PayMethod />
        <Box
          component={'img'}
          src={dollar}
          sx={{
            zIndex: 2,
            position: 'absolute',
            left: '20px',
            bottom: '230px',
            transform: 'rotate(6deg)'
          }}
        />
        <Box
          component={'img'}
          src={eth}
          sx={{
            zIndex: 2,
            position: 'absolute',
            left: isSmall ? '290px' : '300px',
            bottom: '30px',
            transform: 'rotate(6deg)'
          }}
        />
      </Box>
    </Box>
  );
};

export default Four;