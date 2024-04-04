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
        // marginTop: '50px',
        height: '280px',
        width: '335px',
        padding: '15px',
        borderRadius: '11px',
        background: 'linear-gradient(100deg, #4d4a54, #14101d)',
        zIndex: 1,
        position: 'absolute',
        left: '-15%',
        bottom: '-45%',
        transform: 'rotate(-5deg)'
      }}
    >
      <Typography
        sx={{
          fontWeight: '600',
          marginBottom: '15px',
          fontFamily: 'SemiBold',
          fontSize: '22px',
          textAlign: 'left'
        }}
      >
        Your cash
      </Typography>
      <Box
        sx={{
          marginTop: '7%'
        }}
      >
        {
          rows.map(({icon, text, profit, balance}, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}
              >
                <Box
                  height={'40px'}
                  width={'40px'}
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
                      fontSize: '16px'
                    }}
                  >
                    {balance}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontSize: '12px'
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    marginLeft: 'auto',
                    fontSize: '14px',
                    lineHeight:'157%',
                    fontWeight: '400',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      marginRight: '5px'
                    }}
                    height={'15px'}
                    width={'15px'}
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
    </Box>
  );
};

export default YourCash;