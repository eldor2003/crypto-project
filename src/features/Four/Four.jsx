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
        // marginTop: '20px',
        marginLeft: 15
      }}
    >
      <Box
        sx={{
          // marginTop: '50px',
          // backgroundColor: 'black',
          position: 'relative',
          height: '300px'
        }}
      >
        <Box
          src={Circles}
          width={'381px'}
          height={'381px'}
          component={'img'}
          sx={{
            // position: 'absolute',
            // left: 0
          }}
        />
        <YourCash />
        <PayMethod />
        <Box
          component={'img'}
          src={dollar}
          height={'77px'}
          width={'77px'}
          sx={{
            zIndex: 2,
            position: 'absolute',
            left: '-20%',
            bottom: '180px',
            transform: 'rotate(6deg)'
          }}
        />
        <Box
          component={'img'}
          src={eth}
          height={'77px'}
          width={'77px'}
          sx={{
            zIndex: 2,
            position: 'absolute',
            left: isSmall ? '290px' : '95%',
            bottom: '-20%',
            transform: 'rotate(6deg)'
          }}
        />
      </Box>
    </Box>
  );
};

export default Four;