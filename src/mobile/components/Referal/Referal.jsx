import {Box, Button, Typography} from "@mui/material";
import arrow from "../../../svg/ArrayUpRight.svg";

const Referal = () => {
  
  const rows = [
    {
      title: 'Referral level 1',
      subTitle: 'This level is given to everyone at registration',
      percent: '0.2'
    },
    {
      title: 'Referral level 2',
      subTitle: 'Our partners and team receive',
      percent: '0.3'
    },
    {
      title: 'Referral level 3',
      subTitle: 'Active users',
      darkBtn: true,
      percent: '0.5',
      transform: 'rotate(-6deg)'
    }
  ]
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
      }}
    >
      <Typography
        sx={{
          marginRight: 'auto',
          fontFamily: 'Poppins Medium',
          fontSize: '35px',
          fontWeight: '600'
        }}
      >
        Referral program
      </Typography>
      {
        rows.map(({title, subTitle, percent, transform, darkBtn}, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: darkBtn ? '40px' : '25px',
                borderRadius: '10px',
                background: 'linear-gradient(150deg, #4d4a54, #14101d)',
              }}
            >
              <Box
                sx={{
                  borderRadius: '10px',
                  padding: '25px 15px',
                  textAlign: 'left',
                  background: darkBtn && 'linear-gradient(to right, #2c9fdb, #564ccf)',
                  transform
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}
                >
                  <Typography
                    sx={{
                      marginRight: 'auto',
                      fontFamily: 'Medium Mulish',
                      fontSize: '24px'
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontFamily: 'Medium Mulish',
                      lineHeight: '140%',
                      fontSize: '24px'
                      // color: 'linear-gradient(to right, #2AABEE, #574DCE)',
                    }}
                  >
                    <span
                      style={{
                        backgroundImage: !darkBtn && 'linear-gradient(to right, #2AABEE, #574DCE)',
                        color: !darkBtn ? "transparent" : 'white',
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        fontWeight: '600'
                    }}
                    >
                      {`${percent}%`}
                    </span>
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    maxWidth: '80%',
                    textAlign: 'left',
                    fontFamily: 'Regular',
                    lineHeight: '140%',
                    fontSize: '18px',
                    color: darkBtn ? 'white' : '#FFFFFF40',
                    marginBottom: '30px'
                  }}
                >
                  {subTitle}
                </Typography>
                <Button
                  // size={'large'}
                  className={'button'}
                  endIcon={<img src={arrow} />}
                  sx={{
                    background: !darkBtn ? 'linear-gradient(to right, #2c9fdb, #564ccf)' : '#1E1E1E',
                    borderRadius: '5px',
                    width: '150px',
                    height: '42px',
                    marginBottom: '20px'
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontFamily: 'Regular',
                      fontSize: '16px',
                      marginRight: '10%'
                    }}
                  >
                    Telegram
                  </Typography>
                </Button>
              </Box>
            </Box>
          );
        })
      }
    </Box>
  );
};

export default Referal;
