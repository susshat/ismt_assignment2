import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Checkout() {
  const userName = JSON.parse(localStorage.getItem('user')).email;
  console.log(userName)
  const navigate = useNavigate();
  const handleNavigate = () => {
    localStorage.clear();
    navigate('/login');
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx>
            Welcome {userName} to Dashboard.
          </Typography>
          <Button onClick={handleNavigate} sx={{ my: { xs: 4, md: 4 }, p: { xs: 2, md: 3 } }}>Logout</Button>
        </Toolbar>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          You have been sucesfully logged in.<br/> 
▕╮╭┻┻╮╭┻┻╮╭▕╮╲<br/>
▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏<br/>
▕╭┻┻┻┛┗┻┻┛ ▕ ╰▏<br/>
▕╰━━━┓┈┈┈╭╮▕╭╮▏<br/>
▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏<br/>
▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏<br/>
        </Paper>
      </AppBar>

    </ThemeProvider>
  );
}