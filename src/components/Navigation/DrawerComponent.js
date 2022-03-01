import React, { useState } from "react";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  IconButton,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComponent = () => {
  const pages = ["Home", "Simulator", "Blog", "About", "Contact"];
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
