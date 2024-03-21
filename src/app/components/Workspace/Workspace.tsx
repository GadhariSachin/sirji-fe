"use client";

import React, { Suspense, useState } from "react";
import Paper from "@mui/material/Paper";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import CustomTabPanel from "./CustomTabPanel";
import CodeEditor from "./CodeEditor";
import { SAMPLE_CODE } from "../../utils/constants";

import Shell from "./Shell";
import Planner from "./Planner";
import Browser from "./Browser";

function Workspace() {
  const [file, setFile] = useState<string>(SAMPLE_CODE);
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, height: "calc(100% - 32px)" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Shell" {...tabProps(0)} />
            <Tab label="Browser" {...tabProps(1)} />
            <Tab label="Editor" {...tabProps(2)} />
            <Tab label="Planner" {...tabProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Suspense fallback={<>Loaading ....</>}>
            <Shell />
          </Suspense>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Browser />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <CodeEditor file={file} setFile={setFile} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Suspense fallback={<>Loaading ....</>}>
            <Planner />
          </Suspense>
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}

export default Workspace;

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
