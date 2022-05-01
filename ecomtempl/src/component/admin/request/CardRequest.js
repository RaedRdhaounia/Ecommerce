import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { checkRequest } from '../../../redux/actions';
import { useDispatch } from 'react-redux';


const CardRequest=({r,Adminid})=> {
 const dispatch = useDispatch()
  const convertDate=(olddate)=>{
    var dateConvert = new Date( parseInt(olddate) );
    return dateConvert.toString().slice(0, 24);
  }
  const handleCheck=(e)=>{
    console.log(Adminid)
    console.log(e.target.value)
    dispatch(checkRequest(Adminid, e.target.value)) 

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
      <CardActions>
        <Button size="small" style={{color:'gray'}} startIcon={<EditIcon />}> modify</Button>
        <Button size="small" style={{color:"red"}}  value={r._id} startIcon={<DeleteForeverIcon />} > delate</Button>
        <Button size="small" value={r._id} disabled={r.check?true: false} onClick={(e)=>{handleCheck(e)}}> checking ...</Button>
      </CardActions>
    </Card>
    </div>
)
  }
  export default CardRequest