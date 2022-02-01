import { Grid } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Card from "../Card";
import { FilteredItemContext, SelectItemContext } from "../Context/Context";

const ListItems = ({ searchData }) => {
  const itemCtx = useContext(FilteredItemContext);
  const selectedItemCtx = useContext(SelectItemContext)

  const handleClick = (id) => {
    selectedItemCtx.fun(id)
  }

  return (
    <Grid
      sx={{
        overflowY: "scroll",
        overflowX: "hidden",
        height: "500px",
        width: "800px",
        margin: "20px 0",
        "::-webkit-scrollbar": {
          width: "0",
        },
      }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {itemCtx.data.map((item, i) => {
        return (
          <Grid key={i} sx={{ padding: "10px 15px" }} item xs={6} sm={4}>
            <Card
              id={i}
              name={item.name}
              price={item.price}
              src={item.photo}
              type={item.category}
              click={handleClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListItems;
