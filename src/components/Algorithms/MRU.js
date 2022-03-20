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

const MRU = (props) => {
  const classes = useStyles();

  const pages = props.page;
  const frames = props.frame;

  const pageSeq = props.seq;

  let arr = [];
  for (let i = 0; i < frames; i++) arr.push(i + 1);

  // For creating frames
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

  // MRU Result Maker
  // Time complexity = O(page * frame)
  // Space Complexity = O(page)
  const mruResultMaker = (page, frame, seq) => {
    console.log("MRU Result Maker");

    let flag1;
    let flag2;

    let pos;

    let faults = 0;
    let result = [];
    let frame_arr = [];
    let hit;
    let fault;
    let index_arr = [];

    // declaring every element -1
    for (let i = 0; i < frames; i++) frame_arr[i] = -1;

    // for every page in sequence
    for (let i = 0; i < page; i++) {
      flag1 = 0;
      flag2 = 0;
      hit = false;
      fault = false;

      //  if page already available in frame_arr
      for (let j = 0; j < frame; j++) {
        if (seq[i] === frame_arr[j]) {
          flag1 = 1;
          flag2 = 1;
          hit = true;
          index_arr.push(j);
          break;
        }
      }

      //  if frame_arr contains -1
      if (flag1 === 0) {
        for (let j = 0; j < frame; j++) {
          if (frame_arr[j] === -1) {
            faults++;
            frame_arr[j] = seq[i];
            fault = true;
            flag2 = 1;
            index_arr.push(j);
            break;
          }
        }
      }

      // For finding position of element which is most recently used
      if (flag2 === 0) {
        let prev = seq[i - 1];
        for (let j = 0; j < frame; j++) {
          if (frame_arr[j] === prev) {
            pos = j;
            break;
          }
        }
        faults++;
        fault = true;
        frame_arr[pos] = seq[i];
        index_arr.push(pos);
      }

      // Push all elements into frame_arr array
      let elements = [];
      elements.push(`P${i + 1}   (${seq[i]})`);

      for (let j = 0; j < frame; j++) elements.push(frame_arr[j]);

      if (hit === true) elements.push("HIT");
      else if (fault === true) elements.push("FAULT");

      result.push(elements);
    }

    return { result, faults, index_arr };
  };

  // Creating row for table
  const rowResultMaker = (page, frame, seq) => {
    const { result, index_arr } = mruResultMaker(page, frame, seq);
   
   
    return (
      <>
        {result.map((item, index) => {
          let lastEle = item[item.length - 1];

          return (
            <tr>
              {item.map((i, ind) => {
                return (
                  <>
                    {ind !== index_arr[index] + 1 ? (
                      <>
                        <td
                          className={classes.main}
                          style={{
                            backgroundColor: `${
                              ind !== item.length - 1
                                ? "inherit"
                                : lastEle === "HIT"
                                ? "rgb(105 228 0 / 86%)"
                                : "#fa2c2c"
                            }`,
                          }}
                        >
                          {i}
                        </td>
                      </>
                    ) : (
                      <>
                        {lastEle === "HIT" ? (
                          <>
                            <td
                              className={classes.main}
                              style={{
                                backgroundColor: "rgb(40 226 63 / 67%)",
                              }}
                            >
                              {i}
                            </td>
                          </>
                        ) : (
                          <>
                            <td
                              className={classes.main}
                              style={{
                                backgroundColor: "rgb(248 85 85 / 95%)",
                              }}
                            >
                              {i}
                            </td>
                          </>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </tr>
          );
        })}
      </>
    );
  };

  const { faults } = mruResultMaker(pages, frames, pageSeq);
  const pageHits = pages - faults;

  return (
    <>
      <TableHeader
        // page={props.page}
        // frame={props.frame}
        // pageSeq={props.mainSeq}
        algoName={"MRU (Most Recently Used)"}
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

export default MRU;
