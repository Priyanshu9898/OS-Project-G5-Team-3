import React, { useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import TableHeader from "./TableHeader";
import PieChart from "./PieChart";
const useStyles = makeStyles({
  table: {
    width: "100%",

    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    marginTop: 40,
    marginBottom: 40,
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  result: {
    "& tr:nth-child(even)": {
      backgroundColor: "#273c3c",
    },
  },
  main: {
    border: "1px solid #dddddd",
    textAlign: "center",
    padding: "10px",
  },
  summary: {
    textAlign: "center",
    marginTop: 30,
    border: "1px solid white",
    borderRadius: "25px",
  },
  header: {
    fontSize: 46,
    textAlign: "center",
  },
  sum: {
    padding: "40px",
  },
  sumText: {
    fontSize: 30,
    textAlign: "left",
  },
});

const FIFO = (props) => {
  const classes = useStyles();
  const pages = props.page;
  const frames = props.frame;

  const pageSeq = props.seq;

  let arr = [];
  for (let i = 0; i < frames; i++) {
    arr.push(i + 1);
  }

  const frameCreator = (f) => {
    return (
      <>
        {f.map((item, index) => {
          return (
            <th
              className={classes.main}
              style={{ backgroundColor: "#273c3c" }}
            >{`FRAME ${item}`}</th>
          );
        })}
      </>
    );
  };

  const fifoResultGiver = (page, frame, seq) => {
    let pageFaults = 0;

    let temp = [frame];

    let result = [];
    for (let i = 0; i < frame; i++) {
      temp[i] = -1;
    }

    for (let i = 0; i < seq.length; i++) {
      let hit = false;
      let fault = false;
      let flag = 0;

      for (let j = 0; j < frame; j++) {
        if (seq[i] === temp[j]) {
          flag++;
          pageFaults--;
          hit = true;
        }
      }
      pageFaults++;
      fault = true;
      if (pageFaults <= frame && flag === 0) {
        temp[i] = seq[i];
      } else if (flag === 0) {
        let pageHitAndPageRatio = (pageFaults - 1) % frame;
        temp[pageHitAndPageRatio] = seq[i];
      }

      let elements = [];

      elements.push(`P${i + 1}   (${seq[i]})`);
      //printing elements
      for (let j = 0; j < frame; j++) {
        elements.push(temp[j]);
      }
      if (hit === true) {
        elements.push("HIT");
      } else if (fault === true) {
        elements.push("FAULT");
      }
      console.log(elements);

      console.log("\t");
      result.push(elements);
    }

    console.log("Total Page Faults: ", pageFaults);

    console.log(result);

    return { result, pageFaults };
  };

  const rowResultMaker = (pages, frames, pageSeq) => {
    let { result, pageFaults } = fifoResultGiver(pages, frames, pageSeq);
    console.log(result, pageFaults);
    return (
      <>
        {result.map((item, index) => {
          return (
            <tr>
              {item.map((i, index) => {
                return <td className={classes.main}>{i}</td>;
              })}
            </tr>
          );
        })}
      </>
    );
  };

  const { pageFaults } = fifoResultGiver(pages, frames, pageSeq);
  const pageHits = pages - pageFaults;
  return (
    <>
      <TableHeader
        // page={props.page}
        // frame={props.frame}
        // pageSeq={props.mainSeq}
        algoName={"FCFS (First Come First Serve)"}
      />

      <Box className={classes.table}>
        <table style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th
                className={classes.main}
                style={{ backgroundColor: "#273c3c" }}
              >
                Pages
              </th>
              {frameCreator(arr)}
              <th
                className={classes.main}
                style={{ backgroundColor: "#273c3c" }}
              >
                Page Fault
              </th>
            </tr>
          </thead>

          <tbody className={classes.result}>
            {rowResultMaker(pages, frames, pageSeq)}
          </tbody>
        </table>
        <Box className={classes.summary}>
          <Box style={{ textAlign: "center", marginTop: 14 }}>
            <Typography className={classes.header}>Summary</Typography>
          </Box>
          <Box className={classes.sum}>
            <Typography className={classes.sumText}>
              Page: {props.page}
            </Typography>
            <Typography className={classes.sumText}>
              Frame: {props.frame}
            </Typography>
            <Typography className={classes.sumText}>
              Page Sequence: {props.mainSeq}
            </Typography>
            <Typography className={classes.sumText}>
              Page Hit: {pageHits}
            </Typography>
            <Typography className={classes.sumText}>
              Page Faults: {pageFaults}
            </Typography>
          </Box>

          <Box className={classes.chart}>
            <PieChart hit={pageHits} fault={pageFaults} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FIFO;
