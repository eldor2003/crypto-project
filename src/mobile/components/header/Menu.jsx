import React, { useState } from "react";
import {Button, Menu, MenuItem, Grow, Box, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const DropdownMenu = ({handleClick, anchorEl}) => {
  
  return (
    <Box
      // sx={{
      //   marginLeft: 'auto',
      //   marginRight: 0
      // }}
    >
      <IconButton
        sx={{
          marginLeft: 'auto'
        }}
        variant="contained"
        color="primary"
        // onClick={handleClick}
        // endIcon={anchorEl ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      >
        {!anchorEl ? <MenuIcon /> : <CloseIcon />}
      </IconButton>
     </Box>
  );
};

export default DropdownMenu;