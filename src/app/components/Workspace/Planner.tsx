import * as React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList } from "react-window";
import PlannerListItem from "./PlannerListItem";

export default function Planner() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 800,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={780}
        width={"100%"}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {PlannerListItem}
      </FixedSizeList>
    </Box>
  );
}
