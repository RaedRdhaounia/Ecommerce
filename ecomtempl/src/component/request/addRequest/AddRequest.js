import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, sendRequest } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";


function AddRequest() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
  dispatch(getCurrentUser())  
  }, []);
  
  const load = useSelector(state=>state.user.loading)
  const user = useSelector(state=>state.user)
  
  const info = [
    {
      id: "email",
      label: "Email Address",
      name: "email",
      autoComplete: "email",
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      autoComplete: "password",
    },
    {
      id: "name",
      label: "User Name",
      name: "name",
      autoComplete: "name",
    },
    {
      id: "body",
      label: "Type your ssus",
      name: "body",
      autoComplete: "body",
    },
    {
      id: "username",
      label: "username",
      name: "username",
      autoComplete: "username",
    },
  ];
  let errs= useSelector((state) => state.request.errors);
  const [err, setErr] = React.useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    // data ={email: data.email, password: data.password}
    // dispatch action
    dispatch(
      sendRequest({userid: user.currentUser._id,
        
          email: data.get("email"),
          password: data.get("password"),
          name: data.get("name"),
          body: data.get("body"),
          username: data.get("username"),
        },  navigate
      )
    );
    setErr(errs)
  };
  const handleClose = () => {
    setErr(null);
  };
  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping request
        </Typography>
        {err==null? null : 
                <Alert
                  variant="filled"
                  severity= {err=="succes"?"success":"error"} 
                  onClick={() => {
                    handleClose();
                    setErr(null)
                  }}
                >
                {err=="succes"?"request sent with success":" check your information"} </Alert>
              }
        {load? <p>... loading</p>: <Grid container >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Grid 
             container
  direction="column"
  justifyContent="center"
  alignItems="center">
              {info.map((el) => (
                <TextField
                  key={el.id}
                  margin="normal"
                  required
                  fullWidth
                  id={el.id}
                  label={el.label}
                  name={el.name}
                  autoComplete={el.autoComplete}
                  autoFocus
                />
              ))}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {" "}
                save{" "}
              </Button>   
          </Box>
        </Grid>}
      </React.Fragment>
    </div>
  );
}

export default AddRequest;