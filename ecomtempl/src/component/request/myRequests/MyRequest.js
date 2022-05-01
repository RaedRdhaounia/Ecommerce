import { Grid } from '@mui/material'
import React from 'react'
import CardRequest from './CardRequest'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MyRequest({myRequest, id }) {
  return (
    <div style={{display :"flex", flexWrap: "wrap"}}>
     {myRequest.length ==0? "add a new request":<Grid  container spacing={2}>{ myRequest.map(r=>
     
     <Grid item xs={4}  key={r._id}>
       <CardRequest  r={r} id={id} />
     </Grid>
     
     
     
     ) }</Grid> } 
       
    </div>
  )
}

export default MyRequest