import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { changepassword} from '../../../redux/actions';
import {useNavigate} from 'react-router-dom'
import KeyIcon from '@mui/icons-material/Key';



const theme = createTheme();

export default function Password() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user.currentUser);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const passwordCH = {
      oldpassword : data.get('currentPassword'), 
      password: data.get('newPassword'),
      password2 : data.get('password2'),
      id : user._id
    };
   dispatch(changepassword(passwordCH, navigate))
  };

  return (
    <ThemeProvider theme={theme}  >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <KeyIcon onClick={()=> navigate("/dashboard")} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="currentPassword"
              label="crrent password"
              name="currentPassword"
              
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="new password"
              type="password"
              id="newPassword"
              autoComplete="new-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password2"
              label="repeat your password"
              type="password"
              id="password2"
              autoComplete="new-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              change password
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}