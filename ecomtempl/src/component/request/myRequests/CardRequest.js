import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { delateMyRequest } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CardRequest=({r, id})=> {
  let navigate = useNavigate();
  const dispatch =useDispatch()
  const convertDate=(olddate)=>{
    var dateConvert = new Date( parseInt(olddate) );
    return dateConvert.toString().slice(0, 24);
  }
  const handleDelate=(e)=>{
    
   dispatch(delateMyRequest(e.target.value,navigate)) 
   e.preventDefault()
  }
  return (
      <div style={{padding:10}}>
    <Card sx={{ minWidth: 275 }}  >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {convertDate(r.date)}
                </Typography>
        <Typography variant="h5" component="div">
        {r.username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {r.email}
        </Typography>
        <Typography variant="body2">
          {r.body}
        </Typography>
      </CardContent>
      {!r.check? <CardActions>
        <Button size="small" style={{color:'gray'}} > modify</Button>
        <Button size="small" style={{color:"red"}}  value={r._id} onClick={(e)=>handleDelate(e)}> delate</Button>
        <Button size="small"> checking ...</Button>
      </CardActions>:
      <CardActions>
        <Button size="small" style={{color:'gray'}}disabled > modify</Button>
        <Button size="small" style={{color:"red"}}  value={r._id} onClick={(e)=>handleDelate(e)} disabled> delate</Button>
        <Button size="small" disabled > checked</Button>
      </CardActions>}
      
    </Card>
    </div>
)
  }
  export default CardRequest