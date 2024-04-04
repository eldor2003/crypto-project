import {Box, TextField, Typography} from "@mui/material";
import ton from "./svg/tonCalc.svg";
import React from "react";

const Amount = ({amount, setAmount, handleAmountChange, cellCost}) => {
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1A1E2B',
        padding: '8px',
        borderRadius: '5px'
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
          Enter the amount
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
            size="small"
            sx={{
              marginRight: 'auto',
              minWidth: '200px'
            }}
            placeholder={`MIN ${cellCost}`}
            value={amount}
            onChange={handleAmountChange}
            // sx={{ mb: 3, width: "300px" }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              disableUnderline: true
            }}
          />
        </Box>
      </Box>
      <Box
        component={'img'}
        src={ton}
        sx={{
          marginLeft: 'auto',
        }}
      />
    </Box>
  );
}

export default Amount;