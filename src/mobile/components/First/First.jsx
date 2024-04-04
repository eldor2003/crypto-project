import {Box, Button, Stack, Typography} from "@mui/material";
import toMakertSvg from "../../../svg/toMarket.svg";

const First = () => {
  return (
    <Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: '60px'
      }}>
        <Typography
          // gutterBottom
          sx={{
            fontSize: "35px",
            maxWidth: "80%",
            fontFamily: "SemiBold",
            margin: '0 auto',
            textAlign: 'center'
          }}>
          <span style={{ color: 'white' }}>Trade liquidity cells for </span>
          <span style={{ backgroundImage: 'linear-gradient(to right, #2AABEE, #574DCE)', color: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text"}}>fun and earning</span>
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Typography
            gutterBottom
            sx={{
              fontFamily: "Regular",
              fontSize: '16px',
              lineHeight: '140%',
              color: '#FFFFFF40',
              marginBottom: '30px',
           }}>
            Stay ahead of other traders <br/>
            and cryptocurrency enthusiasts
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              size={'large'}
              className={'button'}
              sx={{
                background: 'linear-gradient(to right, #2c9fdb, #564ccf)',
                borderRadius: '5px'
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: 'Regular'
                }}
              >
                To the market
              </Typography>
          </Button>
            {/*<img width="121px" height="45px" src={toMakertSvg}/>*/}
            <Button
              href={"https://t.me/thegatetest_bot"}
              size={'small'}
              className={'button'}
              variant={'outlined'}
              sx={{
                border: '3px linear-gradient(to right, #2c9fdb, #564ccf)',
                borderRadius: '5px',
                width: '88px',
                height: '45px'
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: 'Poppins'
                }}
              >
                Join
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default First;