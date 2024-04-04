import {Box, TextField, Typography} from "@mui/material";
import ton from "./svg/tonCalc.svg";
import React from "react";

const Result = ({result}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1A1E2B',
        padding: '8px',
        borderRadius: '5px',
        marginTop: '15px'
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
          RESULT
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxHeight: '50px'
          }}
        >
          <TextField
            disabled={true}
            contentEditable={false}
            type={'number'}
            variant="standard"
            size="small"
            sx={{
              marginRight: 'auto',
              minWidth: '230%'
            }}
            placeholder={'XXXXXXXXXX'}
            value={result}
            // sx={{ mb: 3, width: "300px" }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              disableUnderline: true
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Result;