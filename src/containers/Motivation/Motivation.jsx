import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

import classes from "./Motivation.module.css";

const useStyles = makeStyles({
  Qoute: {
    color: "#0466c8",
    fontSize: "1.8rem",
    textTransform: "capitalize",
    fontStyle: "italic",
  },
  btn: {
    width: "25rem",
    height: "5rem",
    color: "#fff",
    fontSize: "1.8rem",
    borderWidth: ".2rem",
    fontFamily: `'Open Sans', sans-serif`,
    marginTop: "5rem",
    padding: "2rem",
  },
});

const Motivation = () => {
  const style = useStyles();
  const [qoute, setQoute] = useState("");
  const [qouteAuthor, setQouteAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
      console.log('render....')
    getQoutes();
  }, []);

  const getQoutes = () => {
    setIsLoading(true);
    axios.get("https://api.quotable.io/random").then((response) => {
      const qouteContent = response.data.content;
      setQoute(qouteContent);
      const authorOfQoute = response.data.author;
      setQouteAuthor(authorOfQoute);
      setIsLoading(false);
    });
  };

  return (
    <div className={classes.MotivationContainer}>
      <Container>
        <div className={classes.MainMotivationContainer}>
          <div className={classes.Square}>
            <span></span>
            <span></span>
            <span></span>
            <div className={classes.Content}>
              {isLoading ? (
                 <CircularProgress />
              ) : (
                <>
                  {" "}
                  <Typography varient="h1" className={style.Qoute}>
                    {qoute}
                  </Typography>{" "}
                  <Typography
                    className={style.Qoute}
                    style={{
                      fontStyle: "italic",
                      fontSize: "1.4rem",
                      textAlign: "right",
                    }}
                    varient="h2"
                  >
                    &#8212;{qouteAuthor}
                  </Typography>{" "}
                </>
              )}
            </div>
          </div>
          <Button
            onClick={getQoutes}
            className={style.btn}
            style={{ backgroundColor: "#0466c8" }}
            variant="outlined"
          >
            {isLoading ? <> Getting qoute &nbsp; <CircularProgress style={{color: '#fff'}} size={20}/></> : <> Get another qoute</>}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Motivation;
// api for random qoutes
// https://api.quotable.io/random
