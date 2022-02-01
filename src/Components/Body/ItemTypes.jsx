// @ts-nocheck
import { Grid, Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { FilteredItemContext } from "../Context/Context";
import ListItems from "./ListItems";
import { SearchItemContext } from "../Context/Context";

const ItemTypes = () => {
  const itemCtx = useContext(SearchItemContext);
  const [activeButton, setActiveButton] = useState("All");
  const [data, setData] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  useEffect(() => {
    fetch("https://619c95d468ebaa001753c95a.mockapi.io/api/v1/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    if (itemCtx.value !== "") {
      setDisableButton(true);
      setActiveButton("");
    } else {
      setDisableButton(false);
      setActiveButton("All");
    }
  }, [itemCtx.value]);
  const categoryArray = ["All", ...new Set(data.map((item) => item.category))];
  const searchData = data.filter(
    (item) =>
      item.name !== undefined &&
      item.name.toLowerCase().includes(itemCtx.value.toLowerCase())
  );
  const filteredData = data.filter((item) => item.category === activeButton);

  return (
    <FilteredItemContext.Provider
      value={{
        data:
          activeButton === "All"
            ? data
            : itemCtx.value !== ""
            ? searchData
            : filteredData,
      }}
    >
      <Grid container sx={{ width: "650px", marginTop: "20px" }}>
        {categoryArray.sort().map((item, i) => {
          return (
            <Grid item sx={{ textAlign: "center" }} xs={2} key={i}>
              <Button
                disabled={disableButton}
                sx={{
                  background: activeButton === item && "#604BE8",
                  color: activeButton === item ? "#fff" : "#969DB6",
                  textTransform: "none",
                  "&:hover": {
                    background: activeButton === item && "#f3f7ff",
                    color: activeButton === item ? "#604BE8" : "#969DB6",
                  },
                }}
                onClick={(e) => setActiveButton(e.target.value)}
                value={item}
              >
                {item}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <ListItems />
    </FilteredItemContext.Provider>
  );
};

export default ItemTypes;
