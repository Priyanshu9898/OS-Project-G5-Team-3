import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";

// Components
import MainComponent from "./MainComponent";
import Navbar from "../Navigation/Navbar";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#1a202c",
    padding: "0 200px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
  },
  description: {
    marginBottom: 15,
    color: "rgb(156 163 175)",
  },
  btnInfo: {
    display: "flex",
    marginTop: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    color: "#f15550",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#f15550",
    color: "white",
  },
});

const Home = () => {
  const classes = useStyles();

  const handleInfoButton = () => {
    console.log("Info button clicked");
  };

  return (
    <>
      {/* Navbar here */}
      <Navbar />

      <Box className={classes.container}>
        {/* Header  */}
        <Box className={classes.header}>
          <Typography variant="h2">Page Replacement Algorithm</Typography>
        </Box>
        <hr />
        {/* Discription Starts from here(Optional) */}
        <Box className={classes.description}>
          <Typography variant="h6">
            The page replacement algorithm decides which memory page is to be
            replaced. The process of replacement is sometimes called swap out or
            write to disk. Page replacement is done when the requested page is
            not found in the main memory (page fault).
          </Typography>
          <Box className={classes.btnInfo}>
            <Typography className={classes.info}>
              Want to learn more?? Click Button below
            </Typography>
            <Link to="/blog">
              <Button
                variant="contained"
                // className={classes.btn}
                color="primary"
                onClick={handleInfoButton}
              >
                Know More
              </Button>
            </Link>
          </Box>
        </Box>
        <hr />

        {/* Main Component */}
        <MainComponent />
      </Box>
    </>
  );
};

export default Home;
