import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar, Typography
} from '@mui/material'
import Logo from './Logo.jsx';
import EU from '/src/svg/EU.svg';
import DropdownMenu from './Menu.jsx';
import {useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuBtns from "./MenuBtns.jsx";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  console.log(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <AppBar
            elevation={0}
            sx={{
              borderRadius: '5px',
              position: 'relative',
              marginBottom: '20px',
              marginTop: '30px',
              // paddingTop: '20px',
              paddingLeft: '2%',
              paddingRight: '2%'
            }}
        >
            <Container className={'header'} >
                <Toolbar
                  sx={{
                    paddingRight: 0,
                    paddingLeft: 0,
                    // display: 'flex'
                  }}
                >
                  {
                    anchorEl ? (
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          paddingTop: '2.5%',
                          width: '100%',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row'
                          }}
                        >
                          <Logo withoutText={false} />
                          <Box
                            sx={{
                              marginLeft: 'auto',
                            }}
                          >
                            <DropdownMenu
                              anchorEl={anchorEl}
                              handleClick={anchorEl ? handleClose : handleClick}
                            />
                          </Box>
                        </Box>
                        
                        <MenuBtns />
                      </Box>
                    ) : (
                      <>
                        <Logo withoutText={false} />
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: 'auto',
                            marginRight: 0
                          }}
                        >
                          <Box
                            component={'img'}
                            width={'64px'}
                            height={'24px'}
                            src={EU}
                          />
                          <DropdownMenu handleClick={anchorEl ? handleClose : handleClick} />
                        </Box>
                      </>
                    )
                  }
                  
                </Toolbar>
            </Container>
            
            {/*{*/}
            {/*  anchorEl &&*/}
            {/*  (*/}
            {/*    <Box*/}
            {/*      className={'header'}*/}
            {/*      sx={{*/}
            {/*          marginLeft: 'auto'*/}
            {/*      }}*/}
            {/*    >*/}
            {/*        <Button*/}
            {/*          startIcon={<HomeIcon />}*/}
            {/*          variant={'text'}*/}
            {/*        >*/}
            {/*            Home*/}
            {/*        </Button>*/}
            {/*    </Box>*/}
            {/*  )*/}
            {/*}*/}
        </AppBar>
    );
}


export default Header