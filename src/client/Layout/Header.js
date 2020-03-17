import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import CreateDialog from "../Exercises/CreateDialog";
// import "./Layout.css";

const useStyles = makeStyles({
  header: {
    flex: 1,
    textAlign: "left"
  }
});

function Header({ muscles, onExerciseCreate, onThemeToggle }) {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    onThemeToggle();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit" className={classes.header}>
          Exercise Database
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange("checkedB")}
              value="checkedB"
              color="secondary"
            />
          }
          label="Toggle Dark Mode"
        />
        <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
