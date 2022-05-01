import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../redux/actions';

export default function AddressForm() {
  const loading = useSelector(state=> state.user.loading)
 const userDet =  useSelector(state=>state.user.currentUser)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      {loading? null :<Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label={userDet.firstName}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label={userDet.lastName}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label={userDet.locaion.adress}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label={userDet.locaion.city}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label={userDet.locaion.region}
            fullWidth
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label={userDet.locaion.codezip}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label={userDet.locaion.country}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" disabled checked  />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid> }
      
    </React.Fragment>
  );
}
