import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { updatUser } from "../../../../redux/actions";
import { useDispatch } from "react-redux";


export default function AddressForm({ user }) {
  const [userfirstname, setUserfirstname] = React.useState(user.firstName );
  const [userLastName, setUserLastName] = React.useState(user.lastName);
  const [userCity, setUserCity] = React.useState(!user.locaion ? " " : user.locaion.city );
  const [userRegion, setUserRegion] = React.useState(!user.locaion ? " " : user.locaion.region);
  const [userCounty, setUserContry] = React.useState( !user.locaion ? " " :user.locaion.country );
  const [userAdress, setUserAdress] = React.useState(!user.locaion ? " " :user.locaion.adress );
  const [userPic, setUserPic] = React.useState(!user.pic ? " " : user.pic );
  const [userZip, setUserZip] = React.useState(!user.locaion ? " " :user.locaion.codezip);
  const [newUser, setNewUser] = React.useState(user);
  const handeChange = (target) => {
    switch (target.id) {
      case "city":
        setUserCity(target.value);
        break;
      case "firstName":
        setUserfirstname(target.value);
        break;
      case "lastName":
        setUserLastName(target.value);
        break;
      case "address1":
        setUserAdress(target.value);
        break;
      case "zip":
        setUserZip(target.value);
        break;
      case "country":
        setUserContry(target.value);
        break;
      case "state":
        setUserRegion(target.value);
        break;
      case "picture":
        setUserPic(target.value);
        break;

      default:
        break;
    }
    setNewUser({
      ...newUser,
      lastName: userLastName,
      firstName: userfirstname,
      locaion: {
        country: userCounty,
        codezip: userZip,
        adress: userAdress,
        city: userCity,
        region: userRegion,
      },
      pic : userPic
    });
  };
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(updatUser(newUser));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={userfirstname}
            onChange={(e) => handeChange(e.target)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={userLastName}
            onChange={(e) => handeChange(e.target)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={userAdress}
            onChange={(e) => handeChange(e.target)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="picture"
            name="pictre"
            label="url picture"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e) => handeChange(e.target)}
            value={userPic}
          />
         
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={userCity}
            onChange={(e) => handeChange(e.target)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={userRegion}
            onChange={(e) => handeChange(e.target)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={userZip}
            onChange={(e) => handeChange(e.target)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={userCounty}
            onChange={(e) => handeChange(e.target)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={() => handleSave()}>
            {" "}
            save{" "}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
