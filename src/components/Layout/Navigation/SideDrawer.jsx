import React from "react";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import classes from "./SideDrawer.module.css";

const useStyles = makeStyles({
  root: {},
  btn: {
    width: "12rem",
    height: "4rem",
    fontSize: "1.5rem",
    borderWidth: ".2rem",
    margin: "1rem",
    borderColor: "#0466c8",
    fontFamily: `'Open Sans', sans-serif`,
    fontWeight: "400",
    color: "#0466c8",
  },
  iconBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  icon: {
    fontSize: "3.5rem",
    color: "#0466c8",
  },
});

const SideDrawer = (props) => {
  const style = useStyles();

  let AddingClasses = [classes.Close, classes.SideDrawerContainer];
  if (props.SideDrawerState) {
    AddingClasses = [classes.Open, classes.SideDrawerContainer];
  }

  return (
    <div className={AddingClasses.join(" ")}>
      <IconButton
        onClick={props.sideDrawerCloseHandler}
        className={style.iconBtn}
      >
        <CloseIcon className={style.icon} />
      </IconButton>
      <div className={classes.SideDrawerBtnContainer}>
        <Link to="/login">
          <Button
            onClick={props.sideDrawerCloseHandler}
            className={style.btn}
            style={{
              backgroundColor: "#0466c8",
              color: "#fff",
              boxShadow: "none",
            }}
            variant="contained"
          >
            Log In
          </Button>
        </Link>
        <Typography
          variant="body1"
          style={{ fontSize: "1.6rem", color: "#0466c8" }}
        >
          or
        </Typography>
        <Link to="/signup">
          <Button
            className={style.btn}
            variant="outlined"
            onClick={props.sideDrawerCloseHandler}
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SideDrawer;
