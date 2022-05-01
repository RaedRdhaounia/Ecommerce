import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';


export default function Review() {
  const user = useSelector((state) => state.user.currentUser);
  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: `${user.firstName} ${user.lastName}` },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
  ];
  const addresses = [`${user.locaion.adress}`, `${user.locaion.region}`, `${user.locaion.city}`, `${user.locaion.codezip}`, `${user.locaion.country}`];
  const products = user.payProds;
  const [tot, setTot] = React.useState(true);
  const [total, setTotal] = React.useState(0);

  const totalPrice = () =>{
    const tot1 = 0
    products.map(el => tot1 + el.price)
    setTotal(tot1)
    return tot1
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product._id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.productName} secondary={product.productCatégorie} />
            <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Totale price" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          <Button onClick={()=>{ totalPrice();setTot(false)}}>{tot?"Total price":total} </Button>
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{user.firstName} {user.lastName}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
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
