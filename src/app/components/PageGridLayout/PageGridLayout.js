"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ChatTerminal } from "../ChatTerminal";
import { Workspace } from "../Workspace";
import { Sidebar } from "../Sidebar";

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
