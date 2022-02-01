import React, {useContext, useState} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import {SelectTableNumberContext, SelectCustomerNameContext} from '../Context/Context'

const BillingBar = ({selectedItem}) => {
  const [count, setCount] = useState(0)
  const tableNumberCtx = useContext(SelectTableNumberContext)
  const customerNameCtx = useContext(SelectCustomerNameContext)


  // const productArr = selectedItem.map(item => item.id)

  const postOrder = () => {
    setCount(count+1)
    fetch("https://619c95d468ebaa001753c95a.mockapi.io/api/v1/cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        createdAt: new Date(),
        products: [
          {
            id: 5,
            qty: 1,
          },
          {
            id: 5,
            qty: 1,
          },
          {
            id: 8,
            qty: 1,
          },
        ],
        tableNo: typeof tableNumberCtx === 'number' && tableNumberCtx,
        customerName: customerNameCtx,
        notes: "notes 1",
        id: count,
      }),
    });
  };

  return (
    <Box sx={{ p: "55px 50px 30px", background: "#e7e4fc", mt: "50px" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid item xs={6}>
          <Typography variant="body1" gutterBottom>
            Sub Total
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} item xs={6}>
          <Typography variant="body1" gutterBottom>
            RS. 000.00
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" gutterBottom>
            Discount
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} item xs={6}>
          <Typography variant="body1" gutterBottom>
            Rs. 000.00
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{ my: "30px" }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid item xs={6}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            variant="body1"
            gutterBottom
          >
            Total Payment
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} item xs={6}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            variant="body1"
            gutterBottom
          >
            RS. 000.00
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          sx={{
            background: "white",
            color: "#969DB6",
            fontSize: "20px",
            lineHeight: "30px",
            fontFamily: "Poppins",
            borderRadius: "10px",
          }}
          size="large"
          onClick={postOrder}
        >
          Save
        </Button>
        <Button
          sx={{
            background: "white",
            color: "#969DB6",
            fontSize: "20px",
            lineHeight: "30px",
            fontFamily: "Poppins",
            borderRadius: "10px",
          }}
          size="large"
        >
          Pay
        </Button>
        <Button
          sx={{
            background: "white",
            color: "#969DB6",
            fontSize: "20px",
            lineHeight: "30px",
            fontFamily: "Poppins",
            borderRadius: "10px",
          }}
          size="large"
        >
          Pay Later
        </Button>
      </Box>
    </Box>
  );
};

export default BillingBar;
