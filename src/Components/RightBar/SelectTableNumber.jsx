// @ts-nocheck
import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import * as React from "react";
import NameBar from "./NameBar";
import { SelectTableNumberContext } from "../Context/Context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const SelectTableNumber = () => {
  const [personName, setPersonName] = React.useState([]);

  const names = Array(20)
    .fill()
    .map((_, index) => index + 1);

  return (
    <SelectTableNumberContext.Provider value={personName}>
      <FormControl sx={{ m: 1, width: 465, mt: 3 }}>
        <Select
          sx={{
            backgroundColor: "#604BE8",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "30px",
            color: "#FFFFFF",
            padding: "6px 0 6px 17px",
            width: "465px",
            mx: "32px",
          }}
          displayEmpty
          value={personName}
          onChange={(event) => setPersonName(event.target.value)}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            Table No.
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <NameBar />
    </SelectTableNumberContext.Provider>
  );
};

export default SelectTableNumber;
