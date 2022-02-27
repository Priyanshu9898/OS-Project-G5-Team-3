import React from "react";
import { Grid, Typography, makeStyles, Button, Box } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 200px",
  },
  para: {
    marginTop: 10,
  },

  imgBox: {
    marginTop: 40,
  },
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    marginBottom: 40,
    marginTop: 20,
  },
});

const Page = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Typography
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 35,
            marginTop: 50,
          }}
        >
          {props.algoName}
        </Typography>

        <Box className={classes.descr}>
          {props.content.map((item, index) => {
            return (
              <>
                <Box className={classes.para}>
                  <Typography style={{ color: "white", fontSize: 18 }}>
                    {item}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>

        <Box className={classes.imgBox}>
          <Typography style={{ color: "white", fontSize: 22 }}>
            Example:{" "}
          </Typography>

          <img src={props.path} alt={props.algoName} className={classes.img} />
        </Box>
      </Box>
    </>
  );
};

export default Page;
