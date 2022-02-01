import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import { SearchItemContext } from "../Context/Context";
import ItemTypes from "./ItemTypes";

const Order = () => {
  const [value, setValue] = React.useState("");

  return (
    <SearchItemContext.Provider value={{ value: value }}>
      <Typography
        sx={{ fontWeight: "bold", margin: "30px 0 10px" }}
        variant="h4"
        component="h4"
      >
        Order
      </Typography>
      <Box>
        <TextField
          sx={{
            background: "white",
          }}
          onChange={(event) => setValue(event.target.value)}
          value={value}
          variant="outlined"
          placeholder="Search for foods, drinks, etc."
          inputProps={{
            style: {
              height: "10px",
              width: "270px",
            },
            form: {
              autocomplete: "off",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#604BE8" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton onClick={() => setValue("")}>
                <CancelIcon sx={{ color: "#FF595E" }} />
              </IconButton>
            ),
          }}
        />
      </Box>
      <ItemTypes />
    </SearchItemContext.Provider>
  );
};

export default Order;
