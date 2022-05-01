import React from "react";
import { Grid, Paper } from "@mui/material";
import ProductList from "./ProductList";
import Rocket from "./rocket/Wallet";

const Orders = ({prodList}) => {
  return ( 
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexWrap: "wrap"
          }}
        >
      {prodList == undefined ? null : prodList.map((el,index)=><ProductList key={index} el={el} />)}
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
           
          }}
        >
          <Rocket prodList={prodList}/>
          
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          {/* <Orders /> */}
          flter orders 
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Orders;
