import {Box, Button, Stack, Typography, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import rightArm from '/src/svg/rightArm.svg'
import toMakertSvg from '/src/svg/toMarket.svg'

const First = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // minHeight: '80vh',
        // padding: theme.spacing(4),
        // backgroundColor: 'blue',
        // backgroundColor: theme.palette.background.paper,
        // borderRadius: theme.shape.borderRadius,
        // boxShadow: theme.shadows[5],
      }}
    >
      <Box sx={{display: "flex", flexDirection: "row", gap: "50%"}}>
        <Box sx={{display: "flex", flexDirection: "column", width: "170%"}}>
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center"}}>
            <Typography variant="h2" gutterBottom sx={{fontSize: "64px", maxWidth: "50%", fontFamily: "Poppins"}}>
              <span style={{ color: 'white' }}>Trade liquidity cells for </span>
              <span style={{ backgroundImage: 'linear-gradient(to right, #2AABEE, #574DCE)', color: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text"}}>fun and earning</span>
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography
              gutterBottom
              sx={{
                fontFamily: "Mulish",
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.4)",
                marginBottom: '40px'
              }}
            >
                Stay ahead of other traders <br/>
                and cryptocurrency enthusiasts
            </Typography>
            <Stack spacing={6} direction="row">
              {/*<Button*/}
              {/*  size={'large'}*/}
              {/*  className={'button'}*/}
              {/*  sx={{*/}
              {/*    background: 'linear-gradient(to right, #2c9fdb, #564ccf)',*/}
              {/*  }}*/}
              {/*>*/}
              {/*  To the market*/}
              {/*</Button>*/}
              <Button
                size={'large'}
                className={'button'}
                sx={{
                  width: '141px',
                  height: '45px',
                  background: 'linear-gradient(to right, #2c9fdb, #564ccf)',
                  borderRadius: '5px'
                }}
              >
                <Typography
                  fontFamily={'Poppins'}
                  fontSize={16}
                  fontWeight={400}
                  color={'white'}
                  sx={{
                    // color: 'white',
                    
                    // fontFamily: 'Poppins',
                    // fontSize: '16px',
                  }}
                >
                  To the market
                </Typography>
              </Button>
              <Box>
                <Button
                  href="https://t.me/thegatetest_bot"
                  variant={'outlined'}
                  sx={{
                    width: '88px',
                    height: '45px',
                    // border: '10px solid',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderImageSlice: '1',
                    borderRadius: '6px',
                    // background: 'linear-gradient(to right, #2c9fdb, #574dce) border-box',
                    // backdropFilter: "blur(74.5999984741211px)"б
                    ":-webkit-mask-composite": 'xor',
                    ':-webkit-mask': 'linear-gradient(#fff 0 0) padding-box linear-gradient(#fff 0 0)'
                  }}
                  // size={'large'}
                  className={'button'}
                >
                  <Box
                    sx={{
                      background: 'inherit'
                    }}
                  >
                    <Typography
                      fontFamily={'Poppins'}
                      fontSize={16}
                      fontWeight={400}
                      color={'white'}
                      sx={{
                        // color: 'white',
                        
                        // fontFamily: 'Poppins',
                        // fontSize: '16px',
                      }}
                    >
                      Join
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default First;