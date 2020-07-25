import React from 'react';

import Container from "@material-ui/core/Container";
import classes from './ErrorPage.module.css';
import ErrorPng from '../../assets/images/ErrorPng.png'

const ErrorPage = () => {
    return (
        <div className={classes.ErrorPageContainer}>
            <Container>
                <div className={classes.MianErrorContainer}>
                    <img className={classes.ErrorPng} src={ErrorPng} alt="error" />
                    <h1 className={classes.ErrorHeading}> Error <br />Page Not Found</h1>
                </div>
            </Container>
        </div>
    );
}

export default ErrorPage;
