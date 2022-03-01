import React from "react";
import { Box, Typography, makeStyles, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import BoxBlock from "./BoxBlock";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    color: "white",
    padding: "0 150px",
  },
  main: {
    // padding: "0 100px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  headerComponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 60,
  },
  header: {
    width: "65%",
  },
  imgBox: {
    width: "35%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  video: {
    backgroundColor: "white",
    width: "90%",
    height: 350,
    border: "1px solid white",
    borderRadius: "20px",
  },
  img: {
    backgroundColor: "white",
    width: "90%",
    height: 350,
    objectFit: "cover",
    border: "1px solid white",
    borderRadius: "25px",
  },

  cards: {
    width: "100%",
    marginTop: 40,
    // padding: "0 100px",
  },
  btn: {
    marginTop: 60,
    width: 250,
    height: 50,

    backgroundColor: "#ea5252",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#fa2c2c",
    },
  },
  btn2: {
    marginTop: 60,
    width: 600,
    height: 50,

    backgroundColor: "#ea5252",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#fa2c2c",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    textDecoration: "none",
    color: "inherit",
  },
  pageAlgo: {
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  images: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  algoImages: {
    marginTop: 20,
    marginBottom: 20,
    // border: "1px solid white",
    // borderRadius: "30px",
  },
  algImg: {
    width: "250px",
    height: 250,
    border: "1px solid white",
    borderRadius: "20px",
    // boxShadow: "5px 10px #f15550",
  },
  btnComponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
});

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.main}>
          <Grid container className={classes.headerComponent}>
            <Grid item container xs={12}>
              {/* Header content */}

              <Box className={classes.header}>
                <Typography variant="h2">
                  Page Replacement Algorithms
                </Typography>
                <Typography variant="h6" style={{ marginTop: 30 }}>
                  When a page fault occurs, the required page has to be brought
                  from the secondary memory. If all the frames of main memory
                  are already occupied, then a page has to be replaced. The page
                  replacement algorithm decides which memory page is to be
                  replaced.
                </Typography>

                <Button style={{ color: "white" }} className={classes.btn}>
                  <Link to="/home" className={classes.link}>
                    <Typography style={{ color: "white" }}>
                      Go To Simulator
                    </Typography>
                    <img
                      src="./images/arrow-forward.png"
                      alt="arrow-forward"
                      style={{ marginLeft: 10 }}
                    />
                  </Link>
                </Button>
              </Box>

              <Box className={classes.imgBox}>
                <img
                  src="./images/pageReplacement1.png"
                  alt="OS"
                  className={classes.img}
                />
                {/* <iframe
                  src="https://www.youtube.com/embed/1DklrGoAxDE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className={classes.video}
                ></iframe> */}
              </Box>
            </Grid>
          </Grid>

          {/* Box Block */}
          <Box className={classes.cards}>
            <Grid
              item
              container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <BoxBlock
                title="What is a page? "
                descr="For non-contiguous memory allocation, the Logical address Space is divided into fixed- size blocks, called pages."
              />
              <BoxBlock
                title="What is a frame? "
                descr="The Physical Address Space (Main Memory) is conceptually divided into a number of fixed-size blocks, called frames."
              />
              <BoxBlock
                title="What is paging? "
                descr="Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. The mapping from virtual to physical address is done by the memory management unit (MMU) which is a hardware device and this mapping is known as paging technique."
              />
              <BoxBlock
                title="What is page fault? "
                descr="Page fault - A page fault occurs when a page referenced by the CPU is not found in the main memory."
              />
            </Grid>
          </Box>

          <Box className={classes.pageAlgo}>
            <Grid container>
              <Box
                style={{
                  alignText: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginBottom: 20,
                }}
              >
                <Typography style={{ fontSize: 45, alignText: "center" }}>
                  The Page Replacement Algorithms
                </Typography>
              </Box>
              <Grid item container xs={12} className={classes.images}>
                <Grid item xs={3}>
                  <Box className={classes.algoImages}>
                    <img
                      src="./images/FCFS.png"
                      alt="FCFS"
                      className={classes.algImg}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className={classes.algoImages}>
                    <img
                      src="./images/OPR.png"
                      alt="OPR"
                      className={classes.algImg}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className={classes.algoImages}>
                    <img
                      src="./images/LRU.png"
                      alt="LRU"
                      className={classes.algImg}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className={classes.algoImages}>
                    <img
                      src="./images/MRU.png"
                      alt="MRU"
                      className={classes.algImg}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.btnComponent}>
            <Button className={classes.btn2}>
              <Link to="/algo" className={classes.link}>
                <Typography style={{ color: "white" }}>Learn More</Typography>
                <img
                  src="./images/arrow-forward.png"
                  alt="arrow-forward"
                  style={{ marginLeft: 10 }}
                />
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
