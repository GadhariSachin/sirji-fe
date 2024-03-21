"use client";

import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListChildComponentProps } from "react-window";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";

export default function PlannerListItem(props: ListChildComponentProps) {
  const { index, style } = props;

  const labelId = `checkbox-list-secondary-label-${index}`;

  const [checked, setChecked] = React.useState<boolean>(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton role={undefined} onClick={handleToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
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
