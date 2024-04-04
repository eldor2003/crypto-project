import {Box, Stack, Typography} from "@mui/material";
import ton from '/src/svg/mobile/payMethod/ton.svg'
import shit from '/src/svg/mobile/payMethod/shit.svg'
import wallet from '/src/svg/mobile/payMethod/wallet.svg'
import v from '/src/svg/mobile/payMethod/v.svg'

const PayMethod = () => {
  const isSmall = window.matchMedia("(max-width: 385px)").matches;
  const rows = [
    {
      icon: ton
    },
    {
      icon: shit
    },
    {
      icon: wallet
    },
    {
      icon: v
    }
  ];
  
  return (
    <Box
      sx={{
        width: '171px',
        height: '91px',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(100deg, #4d4a54, #14101d)',
        padding: '15px 10px',
        borderRadius: '7px',
        zIndex: 2,
        position: 'absolute',
        left: isSmall ? '170px' : '210px',
        bottom: '230px',
        transform: 'rotate(6deg)'
      }}
    >
      <Typography
        sx={{
          marginRight: 'auto',
          marginBottom: '15px',
          fontFamily: 'SemiBold',
          fontSize: '10px'
        }}
      >
        Pay Method
      </Typography>
      <Stack spacing={1} direction="row"
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        {
          rows.map(({icon}, index) => {
            return (
              <Box
                key={index}
                sx={{
                  borderRadius: '7px',
                  backgroundColor: 'white',
                  width: '31px',
                  height: '31px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box
                  component={'img'}
                  width={'19px'}
                  height={'19px'}
                  src={icon}
                  sx={{
                    margin: '0 auto'
                  }}
                />
              </Box>
            );
          })
        }
      </Stack>
      
    </Box>
  );
};

export default PayMethod;