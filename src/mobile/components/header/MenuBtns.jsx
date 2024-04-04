import {Box, Button, Typography} from "@mui/material";
import HomeIcon from '/src/svg/mobile/menu/home.svg';
import WalletIcon from '/src/svg/mobile/menu/wallet.svg';
import FaqIcon from '/src/svg/mobile/menu/faq.svg';
import DollarIcon from '/src/svg/mobile/menu/dollar.svg';
// import React from "react";

const MenuBtns = () => {
  
  const rows = [
    {
      icon: HomeIcon,
      title: 'Home'
    },
    {
      icon: WalletIcon,
      title: 'Market'
    },
    {
      icon: DollarIcon,
      title: 'Trade'
    },
    {
      icon: FaqIcon,
      title: 'FAQ'
    }
  ]
  return (
    <Box
      // className={'header'}
      sx={{
        marginTop: '20px',
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {
        rows.map(({icon, title}, index) => {
          console.log(icon)
          return (
            <Button
              sx={{
                marginBottom: '10px'
              }}
              key={index}
              startIcon={<img src={icon}/>}
              variant={'text'}
            >
              <Typography>
                {title}
              </Typography>
            </Button>
          )
        })
      }
    </Box>
  )
}

export default MenuBtns;