import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import PieChart from "./PieChart";
import TableHeader from "./TableHeader";

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

const LRU = (props) => {
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

  const findLru = (temp, frame) => {
    let minimum = temp[0];
    let pos = 0;

    for (let i = 0; i < frame; i++) {
      if (temp[i] < minimum) {
        minimum = temp[i];
        pos = i;
      }
    }
    return pos;
  };

  const lruResultMaker = (page, frame, seq) => {
    console.log("LRU Result Maker");
    let temp = [];
    let flag1;
    let flag2;

    let pos;

    let faults = 0;
    let counter = 0;
    let result = [];
    let frame_arr = [];
    let hit;
    let fault;

    for (let i = 0; i < frames; i++) {
      frame_arr[i] = -1;
    }

    console.log(frame_arr);

    for (let i = 0; i < page; i++) {
      flag1 = 0;
      flag2 = 0;
      hit = false;
      fault = false;

      for (let j = 0; j < frame; j++) {
        if (seq[i] === frame_arr[j]) {
          counter++;

          flag1 = 1;
          flag2 = 1;
          hit = true;
          break;
        }
      }

      if (flag1 === 0) {
        for (let j = 0; j < frame; j++) {
          if (frame_arr[j] === -1) {
            faults++;
            counter++;
            frame_arr[j] = seq[i];
            temp[j] = counter;
            flag2 = 1;
            fault = true;
            break;
          }
        }
      }

      if (flag2 === 0) {
        pos = findLru(temp, frame);
        faults++;
        counter++;
        frame_arr[pos] = seq[i];
        temp[pos] = counter;
        fault = true;
      }

      let elements = [];
      elements.push(`P${i + 1}   (${seq[i]})`);
      for (let j = 0; j < frame; j++) {
        elements.push(frame_arr[j]);
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
    console.log(result);
    console.log("Total Page Faults : ", faults);

    return { result, faults };
  };

  const rowResultMaker = (page, frame, seq) => {
    const { result } = lruResultMaker(page, frame, seq);
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

  const { faults } = lruResultMaker(pages, frames, pageSeq);
  const pageHits = pages - faults;

  return (
    <>
      <TableHeader
        // page={props.page}
        // frame={props.frame}
        // pageSeq={props.mainSeq}
        algoName={"LRU (Least Recently Used)"}
      />

      <Box className={classes.table}>
        <table style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th
                className={classes.main}
                style={{ backgroundColor: "#273c3c", padding: "20px" }}
              >
                PAGES
              </th>
              {frameCreator(arr)}
              <th
                className={classes.main}
                style={{ backgroundColor: "#273c3c", padding: "20px" }}
              >
                RESULT
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
              Total Frames: {props.frame}
            </Typography>
            <Typography className={classes.sumText}>
              Total Pages: {props.page}
            </Typography>
            <Typography className={classes.sumText}>
              Page Sequence: {props.mainSeq}
            </Typography>
            <Typography className={classes.sumText}>
              Page Hit: {pageHits}
            </Typography>
            <Typography className={classes.sumText}>
              Page Faults: {faults}
            </Typography>
          </Box>

          <Box className={classes.chart}>
            <PieChart hit={pageHits} fault={faults} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LRU;
