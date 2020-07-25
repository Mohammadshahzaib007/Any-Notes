import React from "react";
import { Link } from 'react-router-dom';

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import classes from "./Home.module.css";
import todoPng from "../../assets/images/todoPng.png";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import Footer from "../Footer/Footer";

const useStyles = makeStyles({
  mainHeading: {
    fontSize: "3.5rem",
    fontWeight: "600",
    color: "#fff",
    letterSpacing: ".3rem",
  },
  mainPera: {
    fontSize: "2rem",
    color: "#fff",
    letterSpacing: ".3rem",
    margin: "1rem 0",
    alignSelf: "flex-start",
  },
  btn: {
    width: "22rem",
    height: "5rem",
    fontSize: "1.8rem",
    borderWidth: ".2rem",
    fontFamily: `'Open Sans', sans-serif`,
    fontWeight: "600",
    color: "#0466c8",
    justifySelf: "flex-end",
    marginTop: "5rem",
    padding: "1rem",
  },
});

const Home = () => {
  const style = useStyles();
  return (
    <React.Fragment>
      <div className={classes.HomeContainer}>
        <Container>
          <div className={classes.MainContainer}>
            <div className={classes.HeadingContainer}>
              <Typography variant="h1" className={style.mainHeading}>
                Make your notes digitally and free up your mental space.
              </Typography>
              <Typography variant="body1" className={style.mainPera}>
                Take notes anywhere. Capture what's important and get more done.
                write yout thought when it hits you.
              </Typography>
              <Link to="/signup">
                <Button
                  className={style.btn}
                  style={{ backgroundColor: "#fff" }}
                  variant="contained"
                >
                  Sign up for free
                </Button>
              </Link>
            </div>
            <div className={classes.ImgContainer}>
              <img className={classes.TodoSvg} src={todoPng} alt="todo" />
            </div>
          </div>
        </Container>
      </div>
      <SectionOne />
      <SectionTwo />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
