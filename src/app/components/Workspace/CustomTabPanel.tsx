import React from "react";
import Box from "@mui/material/Box";

interface CustomTabPanelPropsInterface {
  children: React.ReactNode;
  value: number;
  index: number;
  other?: any;
}

export default function CustomTabPanel(props: CustomTabPanelPropsInterface) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
