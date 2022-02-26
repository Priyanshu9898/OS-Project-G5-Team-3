import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#1a202c",
    padding: "0 150px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainHeader: {
    marginTop: 75,
    color: "white",
  },
  headerTxt: {
    marginTop: 20,
    color: "white",
  },
  description: {
    color: "rgb(156 163 175)",
    marginTop: 30,
  },
  algo: {
    color: "rgb(156 163 175)",
  },
  btnBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#f15550",
    color: "white",
    width: 250,
    marginTop: 50,
    borderRadius: 10,
    height: 40,
    fontSize: 18,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#ee312b",
    },
  },
  arrow: {
    marhginLeft: 10,
    width: 25,
  },
});

const Landing = () => {
  const classes = useStyles();
  const myLists = [
    "Priyanshu Malaviya",
    "Dev Dalia",
    "Neh Patel",
    "Vishwa Gajjar",
    "Shubh Kapadia",
  ];
  const listItems = myLists.map((myList) => <li>{myList}</li>);

  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.container}>
          <Typography variant="h2" className={classes.mainHeader}>
            OS Project: G5 Team3
          </Typography>
          <Typography variant="h3" className={classes.headerTxt}>
            Page Replacement Algorithm
          </Typography>
          <Typography variant="h6" className={classes.description}>
            The page replacement algorithm decides which memory page is to be
            replaced. The process of replacement is sometimes called swap out or
            write to disk. Page replacement is done when the requested page is
            not found in the main memory (page fault).
          </Typography>
          {/* <img src="./images/os2.jpg" alt="OS" /> */}
          <Typography variant="h6" style={{ color: "white", marginTop: 40 }}>
            Team Members:
          </Typography>
          {myLists.map((myList, index) => {
            return (
              <Typography variant="h6" className={classes.algo}>
                {index + 1}. {myList}
              </Typography>
            );
          })}

          <Box className={classes.btnBox}>
            <Link to="/home">
              <Button className={classes.btn}>
                <Typography style={{ marginRight: 10 }}>Main Page</Typography>
                <img
                  src="./images/arrow-forward.png"
                  alt="arrow"
                  className={classes.arrow}
                />
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
