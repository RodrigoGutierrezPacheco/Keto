import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { height } from '@mui/system';
import MessageIcon from '@mui/icons-material/Message';
import { green, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

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
  <ThemeProvider theme={theme}>
    <p>Footer</p>
		</ThemeProvider>
  );
}
