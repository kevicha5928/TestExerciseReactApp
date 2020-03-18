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
  },
  "@media (max-width: 600px)": {
    Paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 300,
      overflowY: "auto"
    }
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
        <Switch
          checked={state.checkedB}
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="secondary"
        />
        <Typography variant="h6" color="inherit">
          Toggle Dark Mode
        </Typography>
        <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
