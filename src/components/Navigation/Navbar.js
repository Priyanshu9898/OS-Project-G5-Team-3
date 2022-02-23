import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#2d234a",
    height: "64px",
  },
  container: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },

  logo: {
    fontSize: 26,
    display: "flex",
    flexDirection: "row",
    width: 400,
  },
  mainPages: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  page: {
    marginRight: 25,
    fontSize: 18,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  logoLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "center",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.component}>
      <Toolbar className={classes.container}>
        <Box className={classes.logo}>
          <Link to="/home" className={classes.logoLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Typography class="ml-3 text-xl" style={{ fontSize: 24 }}>
              Page Replacement Algorithms
            </Typography>
          </Link>
        </Box>
        <Box className={classes.mainPages}>
          <Link to="/home" className={classes.link}>
            <Typography variant="h6" color="inherit" className={classes.page}>
              Home
            </Typography>
          </Link>
          <Link to="/blog" className={classes.link}>
            <Typography variant="h6" color="inherit" className={classes.page}>
              Blog
            </Typography>
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography variant="h6" color="inherit" className={classes.page}>
              About Us
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
