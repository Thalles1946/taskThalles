import "./App.css";
import NestedList from "./Components/List";
import { AppBar, Box } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#03466b",
        }}
      >
        <AppBar position="static" sx={{ height: "20%", display: "flex" }}>
          <h1>Welcome to TaskMaster</h1>
        </AppBar>
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <NestedList />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
