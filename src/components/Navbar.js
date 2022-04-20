import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Navbar = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>  
        <HomeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <i> Resul </i>
          </Typography>
          <Button color="inherit"> <AccountCircleRoundedIcon/> </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default Navbar;

