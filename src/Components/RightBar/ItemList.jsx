// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BillingBar from "./BillingBar";
import { SelectItemContext } from "../Context/Context";
import CartItem from "./CartItem";

const ItemList = () => {
  const [itemSelected, setItemSelected] = useState([]);
  const [count, setCount] = useState([]);
  const selectedItemCtx = useContext(SelectItemContext);
  const headingArr = [
    { name: "Items", size: 4, center: false },
    { name: "Qty", size: 3, center: true },
    { name: "Price", size: 3, center: true },
  ];

  const value = selectedItemCtx.value;

  useEffect(() => {
    setItemSelected((preValue) => [...preValue, value]);
  }, [value]);

  const handleSetCount = (count, id) => {
    setCount((preValue) => [...preValue, { count: count, id: id }]);
  };

  const uniqueCount = Array.from(new Set(count.map((a) => a.count))).map(
    (id) => {
      return count.find((a) => a.count === id);
    }
  );

  console.log(uniqueCount);

  let itemSelectedSet = itemSelected.filter(
    (ele, ind) => ind === itemSelected.findIndex((elem) => elem.id === ele.id)
  );

  let newItemSelectedSet = itemSelectedSet.filter(
    (value) => Object.keys(value).length !== 0
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "33px 32px 0" }}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid container item xs={6}>
            {headingArr.map((item) => {
              return (
                <Grid key={item.name} item xs={item.size}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#434343",
                      textAlign: item.center && "center",
                    }}
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    {item.name}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              margin: "0 auto",
              width: "400px",
              display: itemSelectedSet.length > 1 ? "block" : "flex",
              alignItems: "center",
              height: "400px",
              overflowY: "scroll",
              "::-webkit-scrollbar": {
                width: "0",
              },
            }}
          >
            {itemSelectedSet.length > 1 ? (
              itemSelectedSet.map((item, i) => {
                return Object.keys(item).length ? (
                  <CartItem countHandler={handleSetCount} id={item.id} key={i} item={item} />
                ) : null;
              })
            ) : (
              <Typography sx={{ fontSize: "1.5rem" }}>
                Click on the items to show up here
              </Typography>
            )}
          </Box>
        </Grid>
      </Box>
      <BillingBar selectedItem={newItemSelectedSet} />
    </>
  );
};

export default ItemList;
