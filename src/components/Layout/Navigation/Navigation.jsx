import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import FullLogo from "../../../assets/images/full-logo-removebg.png";
import classes from "./Navigation.module.css";
import SideDrawer from "./SideDrawer";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles({
  root: {},
  appBar: {
    maxHeight: "80px",
    backgroundColor: "#fff",
    overflow: "hidden",
    zIndex: "1",
  },
  toolbarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
    ["@media (min-width: 40.625em)"]: {
      display: "none",
    },
  },
  icon: {
    fontSize: "3.5rem",
    color: "#0466c8",
  },
});

export default function HideAppBar(props) {
  const classesII = useStyles();
  const reff = useRef();

  const [isSideDrawerOPen, setIsSideDrawerOpen] = useState(false);

  const sideDrawerOpenHandler = () => {
    setIsSideDrawerOpen(true);
  };

  const sideDrawerCloseHandler = () => {
    setIsSideDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classesII.appBar} ref={reff}>
          <Backdrop open={isSideDrawerOPen} onClick={sideDrawerCloseHandler}/>

          <Toolbar>
            <Container className={classesII.toolbarContainer}>
              <Link to="/">
                <img
                  className={classes.Logo}
                  src={FullLogo}
                  alt="Any Notes Logo"
                />
              </Link>

              <div className={classes.NavBtnContainer}>
                <Link to="/login">
                  <Button
                    className={classesII.btn}
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
                  <Button className={classesII.btn} variant="outlined">
                    Sign Up
                  </Button>
                </Link>
              </div>
              <IconButton
                onClick={sideDrawerOpenHandler}
                className={classesII.iconBtn}
              >
                <MenuIcon className={classesII.icon} />
              </IconButton>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <SideDrawer
        SideDrawerState={isSideDrawerOPen}
        sideDrawerCloseHandler={sideDrawerCloseHandler}
      />
      <Toolbar />
    </React.Fragment>
  );
}
