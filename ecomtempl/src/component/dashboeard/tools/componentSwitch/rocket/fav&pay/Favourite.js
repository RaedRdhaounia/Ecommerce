import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Avatar, CardHeader, IconButton } from "@mui/material";

const Favourite = ({fs}) => {
  return (
    <CardHeader
      avatar={
        <Avatar alt="poduct favourite" src={fs.picproduct} />
      }
      action={
        <IconButton aria-label="settings">
          ${fs.price}
          <CheckCircleIcon color="success" />
        </IconButton>
      }
      title={fs.productName}
      subheader={fs.productCatégorie}
    />
  );
};
export default Favourite
