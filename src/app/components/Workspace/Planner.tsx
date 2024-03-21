"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";

export default function Planner() {
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function rowItem(props: ListChildComponentProps) {
    const { index, style } = props;

    const labelId = `checkbox-list-secondary-label-${index}`;

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(index) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }

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
        {rowItem}
      </FixedSizeList>
    </Box>
  );
}
