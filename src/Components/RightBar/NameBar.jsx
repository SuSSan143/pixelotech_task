import { Box, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import * as React from "react";
import CommentText from "../CommentText";
import ToggleOption from "./ToggleOption";
import { SelectCustomerNameContext } from "../Context/Context";

const NameBar = () => {
  const [enable, setEnable] = React.useState(false);
  const [value, setValue] = React.useState('');
  return (
    <SelectCustomerNameContext.Provider value={value}>
      <Box
        sx={{
          mx: "32px",
        }}
      >
        <TextField
        onChange={(e) => setValue(e.target.value)}
        value={value}
          placeholder="Name"
          sx={{
            mx: "8px",
            // background: "#F3F7FF",
            [`& fieldset`]: {
              borderRadius: "5px",
            },
          }}
          InputProps={{
            style: {
              width: "332px",
              height: "40px",
            },
          }}
          inputProps={{
            readOnly: enable,
            style: {
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#302D3D",
            },
          }}
        />
        <IconButton
          sx={{
            mx: "8px",
            background: "#F3F7FF",
            borderRadius: "5px",
          }}
          onClick={() => {
            setEnable((preValue) => !preValue);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{
            mx: "8px",
            background: "#F3F7FF",
            borderRadius: "5px",
          }}
        >
          <PersonAddIcon />
        </IconButton>
      </Box>
      <CommentText pad={true}>Balance Due: Rs. 000.00</CommentText>
      <ToggleOption />
    </SelectCustomerNameContext.Provider>
  );
};

export default NameBar;
