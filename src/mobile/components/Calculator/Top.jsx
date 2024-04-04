import {Box, Button, Typography} from "@mui/material";

const Top = () => {
  
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1; // нумерация месяцев начинается с 0
  const day = now.getDate();
  const date = `${day}.${month}.${year}`;
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}
    >
      <Button
        size={'small'}
        className={'button'}
        variant={'outlined'}
        sx={{
          display: 'flex',
          padding: "10px, 30px",
          border: '3px linear-gradient(to right, #2c9fdb, #564ccf)',
          borderRadius: '5px',
        }}
      >
        <Typography
          sx={{
            fontSize: '10px',
            color: 'white'
          }}
        >
          CALC
        </Typography>
      </Button>
      <Typography
        variant="body1"
        sx={{
          marginLeft: 'auto'
        }}
      >
        {date}
      </Typography>
    </Box>
  )
}

export default Top;