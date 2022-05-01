import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review({user}) {
  const location = user.locaion
  const payments = [
    { name: 'country', detail: `${location.country}` },
    { name: 'city', detail: `${location.city}` },
    { name: 'region', detail: `${location.region}` },
    { name: 'codezip', detail: `${location.codezip}` },
    { name: 'adress', detail: `${location.adress}` }
  ];
  const products = [
    {
      name: 'First Name',
      price: `${user.firstName}`,
    },
    {
      name: 'Last Name',
      price: `${user.lastName}`,
    },
    {
      name: 'email',
      price: `${user.email}`,
    },
    {
      name: 'gender',
      price: `${user.gender}`,
    },
    { name: 'age', price: `${user.age}` },
  ];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        USER DETAILS
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="categorie" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
           {user.categ.map((el, key)=><p key ={key} style={{display:"inline", paddingRight:3}}>{el}</p>)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            About you
          </Typography>
          <Typography gutterBottom> <br/></Typography>
          <Typography gutterBottom>{user.about}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Location
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
