import { LinearProgress, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProducts } from "../../redux/actions";
import MyProducts from "./mypoducts/MyProducts";

function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myProducts());
  }, []);
  const loading = useSelector((state) => state.product.loading);
  const myproduct = useSelector(
    (state) => state.product.myproducts.Allproducts
  );
  console.log(myproduct);
  return (
    <div>
      Products
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexWrap: "wrap",
          
        }}
        elevation ={6}
        style={{justifyContent:"space-around"}}
      >
        {loading ? (
          <LinearProgress color="inherit" />
        ) : (
          myproduct.map((p) => <MyProducts key={p._id} el={p} />)
        )}
      </Paper>
    </div>
  );
}

export default Products;
