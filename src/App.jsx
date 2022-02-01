// @ts-nocheck
import ToggleBar from "./Components/ToggleBar";
import LeftMiniBar from "./Components/LeftMiniBar";
import { Box, Grid } from "@mui/material";
import Order from "./Components/Body/Order";
import Divider from "@mui/material/Divider";
import SelectTableNumber from "./Components/RightBar/SelectTableNumber";
import { SelectItemContext } from "./Components/Context/Context";
import {useState} from 'react'



function App() {
  const [selectedItem, setSelectedItem] = useState({})
  const selectItemContext = {
    value: selectedItem,
    fun: (data) => {setSelectedItem(data)}
  }

  return (
    <SelectItemContext.Provider value={selectItemContext}>
      <LeftMiniBar />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ background: "#f3f7ff" }}
      >
        <Box sx={{ margin: "35px auto 0" }}>
          <ToggleBar />
          <Order />
          <Divider />
        </Box>
        <Box sx={{ background: "white" }}>
        <SelectTableNumber />
        </Box>
      </Grid>
    </SelectItemContext.Provider>
  );
}

export default App;
