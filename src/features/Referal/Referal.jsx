import {Box, Button, Stack, Typography} from "@mui/material";
import arrow from "/src/svg/ArrayUpRight.svg";

const Referal = () => {
  
  const rows = [
    {
      title: 'Referral level 1',
      subTitle: 'This level is given to everyone at registration',
      percent: '0.2',
      marginTop: '8%',
    },
    {
      title: 'Referral level 2',
      subTitle: 'Our partners and team receive',
      percent: '0.3',
      
      marginTop: '16%',
    },
    {
      title: 'Referral level 3',
      subTitle: 'Active users',
      darkBtn: true,
      percent: '0.5',
      transform: 'rotate(-6deg)',
      transformBtn: 'rotate(-1deg)',
      marginTop: '15%',
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
          fontSize: '48px',
          fontWeight: '500',
          margin: '0 auto',
          marginTop: '70px',
          marginBottom: '70px'
        }}
      >
        Referral program
      </Typography>
      <Stack
        spacing={5}
        direction={'row'}
        
        sx={{
          margin: '0 auto'
        }}
      >
        {
          rows.map(({
            title,
            subTitle,
            percent,
            transform,
            darkBtn,
            marginTop,
            transformBtn
          }, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: darkBtn ? '40px' : '25px',
                  borderRadius: '10px',
                  background: 'linear-gradient(150deg, #4d4a54, #14101d)',
                  minWidth: '385px',
                  height: '242px'
                }}
              >
                <Box
                  sx={{
                    
                    minWidth: '385px',
                    minHeight: '242px',
                    borderRadius: '10px',
                    padding: '25px 15px 10px',
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
                  <Box
                    justifyContent={'flex-end'}
                    alignItems={'flex-end'}
                  >
                    {/*<Button*/}
                    {/*  // size={'large'}*/}
                    {/*  className={'button'}*/}
                    {/*  endIcon={<img src={arrow} />}*/}
                    {/*  sx={{*/}
                    {/*    background: !darkBtn ? 'linear-gradient(to right, #2c9fdb, #564ccf)' : '#1E1E1E',*/}
                    {/*    borderRadius: '5px',*/}
                    {/*    width: '150px',*/}
                    {/*    height: '42px',*/}
                    {/*    // bottom: '0',*/}
                    {/*    justifyContent: 'center',*/}
                    {/*    // bottom: 0,*/}
                    {/*    // left: "0%",*/}
                    {/*    // marginLeft: -100,*/}
                    {/*  }}*/}
                    {/*>*/}
                    {/*  <Typography*/}
                    {/*    sx={{*/}
                    {/*      color: 'white',*/}
                    {/*      fontFamily: 'Regular',*/}
                    {/*      fontSize: '16px',*/}
                    {/*      marginRight: '10%'*/}
                    {/*    }}*/}
                    {/*  >*/}
                    {/*    Telegram*/}
                    {/*  </Typography>*/}
                    {/*</Button>*/}
                  </Box>
                  <Button
                    // size={'large'}
                    className={'button'}
                    endIcon={<img src={arrow} />}
                    sx={{
                      background: !darkBtn ? 'linear-gradient(to right, #2c9fdb, #564ccf)' : '#1E1E1E',
                      borderRadius: '5px',
                      width: '150px',
                      height: '42px',
                      // bottom: '0',
                      justifyContent: 'center',
                      // bottom: 0,
                      // left: "0%",
                      marginTop,
                      transform: transformBtn,
                      // marginRight: 0,
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
      </Stack>
      
    </Box>
  );
};

export default Referal;
