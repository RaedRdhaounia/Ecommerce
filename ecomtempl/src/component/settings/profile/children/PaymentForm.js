import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, OutlinedInput } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { updatUser } from '../../../../redux/actions';


const names = [
  'Lorem ipsum1',
  'Lorem ipsum2',
  'Lorem ipsum3',
  'Lorem ipsum4',
  'Lorem ipsum5',
  'Lorem ipsum6',
];
function getStyles(name, catateg, theme) {
  return {
    fontWeight:
    catateg.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PaymentForm({user}) {
  
  const theme = useTheme();
  const [gender, setGender] = React.useState(!user.gender ? "None" : user.gender );
  const [about, setAbout] = React.useState(!user.about ? " " : user.about );
  const [age, setAge] = React.useState(!user.age ? 16 : user.age );
  const [categ, setCateg] = React.useState([]);
  const [newUser, setNewuser] = React.useState(user);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCateg(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setNewuser({...newUser, categ: categ })
  };
  const dispatch = useDispatch();

  const handleSave =()=>{
    dispatch(updatUser(newUser));
  } 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom textAlign="center">
       details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <p>gender</p>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={gender}
          fullWidth
          label="gender"
          onChange={(event)=>{setGender(event.target.value); 
            setNewuser({...newUser, gender: event.target.value })}}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"male"} >male</MenuItem>
          <MenuItem value={"female"}>female</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="age"
            type="number"
            InputProps={{ inputProps: { min: 16, max: 60 } }}
                        label="age"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(event)=>{setAge(event.target.value) ;
              setNewuser({...newUser, age: event.target.value })}}
            value={age}
          />
        </Grid>
        <Grid item xs={12} md={6}><form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form></Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="about"
            label="About you "
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={about}
            onChange={(event)=>{setAbout(event.target.value);
              setNewuser({...newUser, about: event.target.value })}}
          />
        </Grid>
        <Grid item xs={12} >
          <p>catégories</p>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          label="Age"
           multiple
          value={categ}
          onChange={handleChange}
          input={<OutlinedInput label="categorie" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, categ, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </Grid>
        
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="get Notification if you have a new offer simlar to update information"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={ handleSave} >
            {" "}
            save{" "}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
