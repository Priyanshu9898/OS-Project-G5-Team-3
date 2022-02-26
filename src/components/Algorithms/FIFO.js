import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

const FIFO = (props) => {
  const classes = useStyles();

  return (
    <div>
      <h1>{props.pages}</h1>
      <h1>{props.frames}</h1>
      <h1>{props.seq}</h1>
      
    </div>
  );
};

export default FIFO;
