import {Box, Button, Typography} from "@mui/material";
import arrow from "../../../svg/ArrayUpRight.svg";

const Bottom = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px'
      }}
    >
      <Button
        // size={'large'}
        className={'button'}
        sx={{
          background: 'linear-gradient(to right, #2c9fdb, #564ccf)',
          borderRadius: '5px',
          marginRight: 'auto',
          marginLeft: '0',
          width: '105px',
          height: '31px'
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Regular',
            fontSize: '16px'
          }}
        >
          Go market
        </Typography>
      </Button>
      <Typography
        sx={{
          marginLeft: 'auto',
          marginRight: '0',
          fontFamily: 'Regular',
          fontSize: '9.5px'
        }}
      >
        MIN. $1000 MAX. $3000
      </Typography>
    </Box>
  );
};

export default Bottom;