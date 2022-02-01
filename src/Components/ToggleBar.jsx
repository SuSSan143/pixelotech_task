import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("Order");

  const arr = ["Order", "Ongoing Orders", "Table View", "Pay later View"];

  const handleChange = (event, newAlignment) => {
    setAlignment((preValue) =>
      newAlignment === null ? preValue : newAlignment
    );
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      {arr.map((name, i) => {
        return (
          <ToggleButton
            key={i}
            sx={{
              px:'4px',
              fontFamily: "Poppins",
              fontStyle: "normal",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "30px",
              color: "#969DB6",
              backgroundColor: "#fff",
              "&.Mui-selected": {
                backgroundColor: "#06D6A0",
                color: "#FFFFFF",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#06D6A0",
              },
              "&.MuiToggleButtonGroup-grouped": {
                borderRadius: "5px !important",
              },
            }}
            value={name}
          >
            {name}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
