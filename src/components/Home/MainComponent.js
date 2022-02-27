import React, { useState, useEffect } from "react";

import { Box, Typography, Button, makeStyles } from "@material-ui/core";

// Components
import FIFO from "../Algorithms/FIFO";

const useStyles = makeStyles({
  inputBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
  },

  lable: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    height: 30,
    borderRadius: 5,
    padding: "0 10px",
    color: "black",
  },

  btns: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  btn: {
    marginRight: 30,
  },
  errorMsg: {
    color: "#ff3030",
  },
});

const MainComponent = () => {
  const classes = useStyles();

  const [frame, setFrame] = useState(0);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [seq, setSeq] = useState([]);
  const [result, setResult] = useState([]);

  const frameHanadler = (e) => {
    setFrame(e.target.value);
  };

  const pageHanadler = (e) => {
    setPage(e.target.value);
  };

  const seqHandler = (e) => {
    setSeq(e.target.value);
  };

  const Fifo = () => {
    if (frame < 0 || page < 0) {
      setError("Frames and Pages can not be Negative");
      setLoading(true);
    } else if (frame === 0 || page === 0 || seq.length === 0) {
      setError("Please fill all the fields");
      setLoading(true);
    } else {
      try {
        setError(null);
        setLoading(false);
        let seqArr = seq.split(" ");
        console.log(seqArr);
        setResult("fifo");
      } catch (e) {}
    }
  };
  const LRU = () => {
    console.log("LRU");
  };
  const MRU = () => {
    console.log("MRU");
  };
  const OPR = () => {
    console.log("OPR");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box className={classes.mainComponent}>
      <form>
        <Box className={classes.inputBox}>
          <Typography variant="h6" className={classes.label}>
            Enter Number of Frames
          </Typography>
          <input
            type="number"
            className={classes.input}
            id="frame"
            name="frame"
            value={frame}
            onChange={frameHanadler}
          />
        </Box>
        <Box className={classes.inputBox}>
          <Typography variant="h6" className={classes.label}>
            Enter Number of Pages
          </Typography>
          <input
            type="number"
            className={classes.input}
            id="page"
            name="page"
            value={page}
            onChange={pageHanadler}
          />
        </Box>
        {page > 0 ? (
          <>
            <Box className={classes.inputBox}>
              <Typography variant="h6" className={classes.label}>
                Enter The Page Sequence
              </Typography>

              <input
                type="text"
                className={classes.input}
                id="seq"
                name="seq"
                value={seq}
                onChange={seqHandler}
              />
            </Box>
          </>
        ) : (
          <></>
        )}
        <Box className={classes.btns}>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={Fifo}
          >
            FCFS
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={LRU}
          >
            LRU
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={MRU}
          >
            MRU
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={OPR}
            onSubmit={handleSubmit}
          >
            opr
          </Button>
        </Box>

        {error ? (
          <>
            <p className={classes.errorMsg}>{error}</p>
          </>
        ) : (
          <></>
        )}

        {/* <hr /> */}
      </form>

      {/* result here */}
      {result === "fifo" ? (
        <>
          <FIFO pages={page} frames={frame} seq={seq} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default MainComponent;
