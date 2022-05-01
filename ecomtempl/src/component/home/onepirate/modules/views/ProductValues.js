import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <AddShoppingCartIcon/>
              <Box
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Lorem ipsum dolor sit
              </Typography>
              <Typography variant="h5">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                }

                {
                  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <BedroomBabyIcon/>
              <Box
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Lorem ipsum dolor sit
              </Typography>
              <Typography variant="h5">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                }

                {'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <DeliveryDiningIcon/>
              <Box
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Lorem ipsum dolor sit
              </Typography>
              <Typography variant="h5">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
                {'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
