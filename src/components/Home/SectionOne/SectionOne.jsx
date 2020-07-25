import React from 'react';

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


import PhonePng from "../../../assets/images/phonePng.png";
import classes from './SectionOne.module.css';

const useStyles = makeStyles({
    Heading: {
      fontSize: "3.5rem",
      fontWeight: "600",
      color: "#0466c8",
      letterSpacing: '.3rem'
    },
    Pera: {
      fontSize: '2rem',
      color: '#000',
      letterSpacing: '.3rem',
      margin: '1rem 0',
      alignSelf: 'flex-start'
    }
  });

const SectionOne = () => {
    const style = useStyles();
    return (
        <div className={classes.SectionOneContainer}>
            <Container>
                <div className={classes.ContentContainer}>
                    <div className={classes.ContentHeadingPeraContainer}>
                    <Typography variant="h1" className={style.Heading}>
              A task manager you can trust for life
            </Typography>
            <Typography variant="body1" className={style.Pera}>
              In the one month and 10 days that we have been bulding Any Notes, 
              we have naver considered selling out or becoming acquired. < br />
             <br /> Our team is commited to staying indipandent and earning your trust for as
              long as you need our app.
                          </Typography>
                    </div>
                    <div className={classes.MobileSvgContainer}>
                    <img className={classes.PhoneSvg} src={PhonePng} alt="todo" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SectionOne;
