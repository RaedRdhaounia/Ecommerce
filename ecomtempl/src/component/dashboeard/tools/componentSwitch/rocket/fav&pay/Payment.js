import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Avatar, CardHeader, IconButton } from "@mui/material";

const Payment = ({ps}) => {
  return (
    <CardHeader
      avatar={
        <Avatar alt="poduct favourite" src={ps.picproduct} />
      }
      action={
        <IconButton aria-label="settings">
          ${ps.price}
          <CheckCircleIcon color="success" />
        </IconButton>
      }
      title={ps.productName}
      subheader={ps.productCatégorie}
    />
  );
};
export default Payment
