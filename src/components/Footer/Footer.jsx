import React from "react";

import classes from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logoHeading: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "2rem",
    fontWeight: "600",
    marginTop: "-4rem",
  },
  footerNavH: {
    color: "#fff",
    margin: "1rem",
    fontWeight: "100",
    fontSize: "1.6rem",
    cursor: "pointer",
  },
});

const Footer = () => {
  const style = useStyles();
  return (
    <div className={classes.FooterContainer}>
      <Container>
        <div className={classes.MainDataContainer}>
          <div className={classes.LogoContainer}>
            <img
              className={classes.FooterLogo}
              src={logo}
              alt="Any Notes Logo"
            />
            <Typography className={style.logoHeading} variant="h3">
              Any Notes
            </Typography>
          </div>
          <div className={classes.DataContainer}>
            <Typography variant="h4" className={style.footerNavH}>
              Terms and Condition
            </Typography>
            <Typography variant="h4" className={style.footerNavH}>
              Privacy Policy
            </Typography>
            <Typography variant="h4" className={style.footerNavH}>
              Help
            </Typography>
          </div>
          <div className={classes.CopyContainer}>
            <Typography
              variant="h4"
              className={style.footerNavH}
              style={{ opacity: ".5", fontSize: "1.5rem" }}
            >
              Copyrighted &copy; 2020 Any Notes, All Right Reserved
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
