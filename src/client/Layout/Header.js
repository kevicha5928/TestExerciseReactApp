import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/CreateDialog";
import "./Layout.css";

const Header = ({ muscles, onExerciseCreate }) => (
  // const classes = useStyles();
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" color="inherit" className="header">
        Exercise Database
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);

export default Header;
