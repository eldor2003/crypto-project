import {Box, Button, Grid, Typography} from "@mui/material";
import LeftColumn from "./LeftColumn/LeftColumn.jsx";
import RightColumn from "./RightColumn/RightColumn.jsx";

const Third = () => {
  const handleClick = () => console.log('sdad')
  return (
    <>
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    display: 'flex',*/}
      {/*    flexDirection: 'column'*/}
      {/*  }}*/}
      {/*>*/}
        
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: '10px',
            justifyContent: 'center'
          }}
        >
          <LeftColumn />
          <RightColumn />
        </Grid>
      {/*</Box>*/}
    </>
  );
}

export default Third;