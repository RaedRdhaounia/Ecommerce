import * as React from 'react';
import Box from '@mui/material/Box';
import Linkk from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Linkk
            variant="h6"
            underline="none"
            color="inherit"
            href="#"
            sx={{ fontSize: 24 }}
          >
            Ecommerce Title
          </Linkk>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Linkk
              color="inherit"
              variant="h6"
              underline="none"
            href='/login'
              sx={rightLink}
            >
              {'Sign In'}
            </Linkk>
            <Linkk
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Linkk>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
