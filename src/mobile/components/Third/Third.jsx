import {Box, Button, Grid, Typography} from "@mui/material";
import LeftColumn from "./LeftColumn/LeftColumn.jsx";
import RightColumn from "./RightColumn/RightColumn.jsx";
import arrow from '/src/svg/ArrayUpRight.svg';
import ToTheMarketBtn from '/src/svg/toMarket.svg'

const Third = () => {
  const handleClick = () => console.log('sdad')
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '30px',
        justifyContent: 'center'
      }}
    >
      <LeftColumn />
      <RightColumn />
      <Button
        // size={'large'}
        endIcon={<img src={arrow} />}
        className={'button'}
        sx={{
          background: 'linear-gradient(to right, #2c9fdb, #564ccf)',
          borderRadius: '5px',
          marginRight: 'auto',
          marginLeft: '10%',
          width: '231px',
          height: '60px'
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Regular',
            fontSize: '18px'
          }}
        >
          To the market
        </Typography>
      </Button>
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    marginRight: 'auto',*/}
      {/*    marginLeft: '10%',*/}
      {/*    marginTop: '20px'*/}
      {/*  }}*/}
      {/*  component={'img'}*/}
      {/*  src={ToTheMarketBtn}*/}
      {/*/>*/}
    </Grid>
  );
}

export default Third;