import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { favourite, payment } from "../../../../redux/actions";


export default function ProductList({ el, key }) {
  const dispatch = useDispatch()

const user = useSelector((state) => state.user.currentUser);
const userid = user._id  
const productid = el._id
const favproducts = user.favProd 
console.log(favproducts)
const check=(list, prodId)=>{
  const valid = list.filter(fav=> fav == prodId)
  return valid
}
const handleColor =(e) =>{
   dispatch(favourite(userid, productid))
  let valid = check(favproducts, productid)
  if(valid.length == 0){
e.target.style.color = "green"
  }
  else{
    e.target.style.color = "red"
  }
}

const handleAdd =(e) =>{
    
   dispatch(payment(userid, productid))
   let valid = check(favproducts, productid)
   if(valid.length == 0){
 e.target.style.color = "blue"
   }
   else{
     e.target.style.color = "gray"
   }
}
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }} key={key}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={el.productName}
        subheader={el.date.slice(0, 19)}
      />
      <CardMedia
        component="img"
        height="194"
        image={el.picproduct}
        alt="picture product"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={(e)=>handleColor(e)} >
         <FavoriteIcon style={{color:"red"}} />
        </IconButton>
        <IconButton aria-label="share" onClick={()=>handleAdd()}>
          <AddShoppingCartIcon  />
        </IconButton>
      </CardActions>
    </Card>
  );
}
