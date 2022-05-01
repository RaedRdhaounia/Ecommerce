import React from "react";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BasicTabs from "./Tab";
import "./style.css";

const Rocket = () => {
  return (
    <div>
      <Badge color="primary"  className="badg">
        <BasicTabs />
        <AddShoppingCartIcon style={{color:"#9c27b0"}}  className="icon" />
      </Badge>
    </div>
  );
};

export default Rocket;
