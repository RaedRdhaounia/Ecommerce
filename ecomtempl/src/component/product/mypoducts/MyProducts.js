import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

function MyProducts({ el }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 2 }} key={el._id}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Button size="small" style={{color:'gray'}} startIcon={<EditIcon />}> modify</Button>
        <Button size="small" style={{color:"red"}}  startIcon={<DeleteForeverIcon />} > delate</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MyProducts;
