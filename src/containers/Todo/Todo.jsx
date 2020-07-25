import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";

import classes from "./Todo.module.css";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "50rem",
    fontFamily: 'inherit'
  },
  inputProps: {
    fontSize: '2rem',
    color: '#fff'
  },
  floatingLabelFocusStyle: {
    color: "#fff",
    fontSize: '2rem'
}
}));
const Todo = () => {
  const style = useStyles();
  return (
    <div className={classes.TodoContainer}>
      <Container>
        <div className={classes.TodoContainerMain}>
          <form>
            <TextField
            InputLabelProps={{
              className: style.floatingLabelFocusStyle,
          }}
              InputProps={{
                className: style.inputProps,
              }}
              className={style.input}
              id="standard-basic"
              label="Standard"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Todo;
