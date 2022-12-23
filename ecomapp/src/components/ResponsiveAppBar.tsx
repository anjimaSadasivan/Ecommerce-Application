import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Button, Divider, MenuList } from '@mui/material';
import {blueGrey} from '@mui/material/colors'



// const settings = ['My Profile', 'Wishlist', 'Cart',  'Logout'];

const  ResponsiveAppBar = ()=> {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  

  //Icon DropDown
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Login Button
  

  

  return (

   
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: '', md: 'flex' } , }}>
            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem onClick={handleCloseUserMenu}>
                  <MenuList>
                  <Typography><Button>My Profile</Button></Typography>
                  <Typography><Button>Wishlist</Button></Typography>
                  <Typography><Button>Cart</Button><Divider /></Typography>
                  <Typography><Button>Login</Button></Typography>
                <Typography><Button>Logout</Button></Typography>
                </MenuList>
                </MenuItem>
                
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
