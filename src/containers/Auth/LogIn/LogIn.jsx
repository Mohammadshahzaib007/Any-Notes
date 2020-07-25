import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from 'react-router-dom';

function Copyright() {
    const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link className={classes.option} to="/" color="inherit" href="https://material-ui.com/">
       Any Notes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "16rem",
    height: "4rem",
    fontSize: "1.6rem",
    borderWidth: ".2rem",
    margin: "2rem 0",
    fontFamily: `'Open Sans', sans-serif`,
    fontWeight: "600",
    color: "#fff",
  },
  option: {
      fontSize: '1.6rem',
      color: '#0466c8'
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h2">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            inputProps={{ style: { fontSize: "2rem" } }} // font size of input text
            InputLabelProps={{ style: { fontSize: "2rem" } }} // font size of input label
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            inputProps={{ style: { fontSize: "2rem" } }} // font size of input text
            InputLabelProps={{ style: { fontSize: "2rem" } }} // font size of input label
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            style={{ backgroundColor: "#0466c8" }}
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password?" className={classes.option} href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" className={classes.option} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
