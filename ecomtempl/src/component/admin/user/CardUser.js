import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const CardUsers=({r})=> {
  console.log(r)
  const convertDate=(olddate)=>{
    var dateConvert = new Date( parseInt(olddate) );
    return dateConvert.toString().slice(0, 24);
  }
  
  return (
      <div style={{padding:10}}>

{r.age} {r.gender}

    <Card sx={{ minWidth: 275 }}  >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {convertDate(r.date)}
                </Typography>
        <Typography variant="h5" component="div">
        {r.firstName} {r.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {r.email}
        </Typography>
        <Typography variant="body2">
          {r.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:'gray'}} startIcon={<EditIcon />}> modify</Button>
        <Button size="small" style={{color:"red"}}  value={r._id} startIcon={<DeleteForeverIcon />} > delate</Button>
        <Button size="small" > checking ...</Button>
      </CardActions>
    </Card>
    </div>
)
  }
  export default CardUsers