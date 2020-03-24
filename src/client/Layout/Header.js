import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Switch
} from "@material-ui/core";
import CreateDialog from "../Exercises/CreateDialog";
import { withContext } from "../context";

const useStyles = makeStyles({
  header: {
    flex: 1,
    textAlign: "left"
  }
});

function Header({ onThemeToggle }) {
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
        <Switch
          checked={state.checkedB}
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="secondary"
        />
        <Typography variant="h6" color="inherit">
          Toggle Dark Mode
        </Typography>
        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
}

export default withContext(Header);
