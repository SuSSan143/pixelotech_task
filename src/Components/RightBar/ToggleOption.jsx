import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/system";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ItemList from "./ItemList";

const StyledToggleButton = styled(ToggleButton)({
  "&.MuiToggleButtonGroup-grouped": {
    borderRadius: "5px !important",
  },
});

const ToggleOption = () => {
  const [alignment, setAlignment] = React.useState("Dine In");

  const arr = ["Dine In", "To Go", "Delivery"];

  const handleChange = (event, newAlignment) => {
    setAlignment((preValue) =>
      newAlignment === null ? preValue : newAlignment
    );
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        {arr.map((name) => {
          return (
            <StyledToggleButton
              key={name}
              sx={{
                margin:
                  name === "Dine In" ? "8px 18px 33px 32px" : "8px 18px 33px ",
                // mx: '20px',
                border: "none",
                fontFamily: "Poppins",
                fontStyle: "normal",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#969DB6",
                "&.Mui-selected": {
                  backgroundColor: "#06D6A0",
                  color: "#FFFFFF",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#06D6A0",
                },
              }}
              value={name}
            >
              {name}
            </StyledToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <ItemList />
    </>
  );
};

export default ToggleOption;
