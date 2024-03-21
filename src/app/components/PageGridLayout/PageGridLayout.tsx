import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sidebar from "../Sidebar/Sidebar";
import ChatTerminal from "../ChatTerminal/ChatTerminal";
import Workspace from "../Workspace/Workspace";

export default function PageGridLayout() {
  return (
    <Box sx={{ flexGrow: 1, background: "#ececec" }}>
      <Grid container style={{ height: "100vh", outline: "1px solid" }}>
        <Grid item xs={2} p={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={5} p={2}>
          <ChatTerminal />
        </Grid>
        <Grid item xs={5} p={2}>
          <Workspace />
        </Grid>
      </Grid>
    </Box>
  );
}
