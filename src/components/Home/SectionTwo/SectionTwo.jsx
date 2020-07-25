import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import RelaxPng from "../../../assets/images/relaxPng.png";
import classes from "./SectionTwo.module.css";

const useStyles = makeStyles({
  Heading: {
    fontSize: "3.5rem",
    fontWeight: "600",
    color: "#0466c8",
    letterSpacing: ".3rem",
  },
  Pera: {
    fontSize: "2rem",
    color: "#000",
    letterSpacing: ".3rem",
    margin: "1rem 0",
    alignSelf: "flex-start",
  },
  btnStart: {
    width: "22rem",
    height: "5rem",
    fontSize: "1.8rem",
    borderWidth: ".2rem",
    fontFamily: `'Open Sans', sans-serif`,
    fontWeight: "600",
    color: "#fff",
    justifySelf: "flex-end",
    marginTop: "5rem",
    padding: "1rem",
    backgroundColor: "#0466c8",
  },
});

const SectionOne = () => {
  const style = useStyles();
  return (
    <div className={classes.SectionOneContainer}>
      <Container>
        <div className={classes.ContentContainer}>
          <div className={classes.MobileSvgContainer}>
            <img className={classes.PhoneSvg} src={RelaxPng} alt="todo" />
          </div>
          <div className={classes.ContentHeadingPeraContainer}>
            <Typography variant="h1" className={style.Heading}>
              Achieve peace of mind with Any Notes
            </Typography>
            <Link to="/signup">
              <Button
                style={{ backgroundColor: "#0466c8" }}
                className={style.btnStart}
                variant="contained"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionOne;
