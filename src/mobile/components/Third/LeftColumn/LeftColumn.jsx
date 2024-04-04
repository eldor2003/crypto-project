import {Box, Button, Grid, Typography} from "@mui/material";
import ArrowUpRight from '/src/svg/ArrayUpRight.svg';
import toMakertSvg from '/src/svg/toMarket.svg'

const LeftColumn = () => {
  return (
    <Grid item xs={12} md={6}>
      <Button
        className={'buttonDark'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '159px',
          height: '40px',
          borderRadius: '10px',
          marginBottom: '25px',
          padding: "10px, 30px",
          color: "#fff"
        }}
        // variant={'contained'}
      >
        <Typography
          sx={{
            fontSize: '16px'
          }}
        >
          MOMENT 1.0
        </Typography>
      </Button>
      <Box
        sx={{
          maxWidth: '70%'
        }}
      >
        <Typography
          // variant="h4"
          fontSize="50px"
          fontFamily="Poppins"
          color='#2DA3EB'
          sx={{
            color: "#2DA3EB",
            textAlign: 'left',
            fontSize: '35px'
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent"
          }}
        >
          A new era
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            textAlign: 'left',
            fontSize: '35px'
          }}
        >
          of  liquidity cell trading
        </Typography>
      </Box>
      <Typography
        variant={'body1'}
        gutterBottom
        sx={{
          textAlign: 'left',
          marginBottom: '15px',
          fontSize: '16px',
          color: '#FFFFFF40',
        }}
      >
        Affordable trading for everyone, use automated trading to increase your budget
      </Typography>
      <Box
        sx={{
          float: 'left'
        }}
      >
        {/*<a><img width={'230px'} height={'60px'} src={toMakertSvg}/></a>*/}
      </Box>
    </Grid>
  )
}

export default LeftColumn;