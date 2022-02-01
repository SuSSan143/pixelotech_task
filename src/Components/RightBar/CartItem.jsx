import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CommentText from "../CommentText";
import SVG from "../SVG";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const CartItem = ({ item, countHandler, id }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);
  let totalPrice = item.price * count;

  useEffect(() => {
    countHandler(count, id);
  }, [count, id]);

  return (
    <Grid sx={{ my: "25px" }} container item xs={12}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
        item
        xs={4}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            // noWrap
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "17px",
              lineHeight: "22px",
              color: "#302D3D",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            {item.name}
          </Typography>
          <SVG />{" "}
        </Box>
        <CommentText pad={false}>Amount Rs. {item.price}</CommentText>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#604BE8",
          borderRadius: "5px",
          width: "107px",
        }}
        item
        xs={3}
      >
        <Link
          onClick={() => setCount(count - 1)}
          underline="none"
          sx={{ color: "white", cursor: "pointer" }}
        >
          <RemoveOutlinedIcon sx={{ fontSize: 15 }} />
        </Link>
        <Typography
          sx={{
            color: "white",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "19px",
            lineHeight: "21px",
          }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {count.toString()}
        </Typography>
        <Link
          onClick={() => setCount(count + 1)}
          underline="none"
          sx={{ color: "white", cursor: "pointer" }}
        >
          <AddOutlinedIcon sx={{ fontSize: 15 }} />
        </Link>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        item
        xs={3}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "21px",
            color: "#302D3D",
          }}
          variant="h6"
          gutterBottom
          component="div"
        >
          RS. {totalPrice}
        </Typography>
      </Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "space-evenly" }}
        item
        xs={2}
      >
        <IconButton aria-label="delete" size="small">
          <PercentOutlinedIcon sx={{ color: "#06D6A0" }} />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteOutlineOutlinedIcon sx={{ color: "#FF595E" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;
