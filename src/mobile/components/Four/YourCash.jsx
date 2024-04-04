import {Box, Typography} from "@mui/material";
import ton from '/src/svg/mobile/youCash/ton.svg';
import usdt from '/src/svg/mobile/youCash/usdt.svg';
import rat from '/src/svg/mobile/youCash/rat.svg';
import upArrow from '/src/svg/mobile/youCash/upArraw.svg';

const YourCash = () => {
  const rows = [
    {
      icon: ton,
      balance: '1.000032',
      text: 'TON',
      profit: '850,93'
    },
    {
      icon: usdt,
      balance: 2616.024,
      text: 'USDT',
      profit: '578,14'
    },
    {
      icon: rat,
      balance: 26.0432,
      text: 'TRX',
      profit: '191.63'
    }
  ]
  return (
    <Box
      sx={{
        height: '170px',
        width: '230px',
        padding: '15px',
        borderRadius: '6px',
        background: 'linear-gradient(100deg, #4d4a54, #14101d)',
        zIndex: 1,
        position: 'absolute',
        left: '30px',
        bottom: '10px',
        transform: 'rotate(-5deg)'
      }}
    >
      <Typography
        sx={{
          fontWeight: '900',
          marginBottom: '15px',
          fontFamily: 'SemiBold',
          fontSize: '15px',
          textAlign: 'left'
        }}
      >
        Your cash
      </Typography>
      {
        rows.map(({icon, text, profit, balance}, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <Box
                component={'img'}
                src={icon}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '10px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '10px'
                  }}
                >
                  {balance}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '8px'
                  }}
                >
                  {text}
                </Typography>
              </Box>
              <Typography
                sx={{
                  marginLeft: 'auto',
                  fontSize: '9px'
                }}
              >
                <Box
                  sx={{
                    marginRight: '5px'
                  }}
                  component={'img'}
                  src={upArrow}
                />
                {`-$${profit}`}
              </Typography>
            </Box>
          )
        })
      }
    </Box>
  );
};

export default YourCash;