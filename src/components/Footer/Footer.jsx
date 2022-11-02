import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { height } from '@mui/system';
import { green, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import './Footer.css'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
  <div className='footer'>
  <div className='reds'>
		<a href="https://facebook.com"><img className='redes' src="images/fb.png" alt="" /></a>
		<a href="https://instagram.com"><img  className='redes' src="images/instagram.png" alt="" /></a>
		<a href="https://messenger.com"><img  className='redes' src="images/messenger.png" alt="" /></a>
		<a href="https://whatsapp.com"><img  className='redes' src="images/whatsapp.png" alt="" /></a>
	</div>
  </div>
  );
}
