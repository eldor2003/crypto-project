import {Box, TextField, Typography} from "@mui/material";
const Laps = ({laps, handleLapsChange}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1A1E2B',
        padding: '8px',
        borderRadius: '5px',
        marginTop: '10px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            color: '#899BC7',
            marginRight: 'auto',
            fontSize: '14px',
            fontFamily: 'SemiBold'
          }}
        >
          Number of laps
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxHeight: '50px'
          }}
        >
          <TextField
            type={'number'}
            variant="standard"
            // size="large"
            sx={{
              marginRight: 'auto',
              minWidth: '200px'
            }}
            placeholder={'MAX 100'}
            value={laps.toString()}
            max={100}
            onChange={handleLapsChange}
            // sx={{ mb: 3, width: "300px" }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[1-9]*",
              disableUnderline: true
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Laps;

