import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const useStyles = makeStyles(theme => ({
  exerciseContainer: {
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 108px)"
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 112px)"
    }
  },
  itemContainer: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
}));

function Exercises({
  muscles,
  exercises,
  category,
  exercise,
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit,
  editMode
}) {
  const classes = useStyles();
  // console.log(exercises);
  return (
    <Grid container className={classes.exerciseContainer}>
      <Grid item xs={12} sm={6} className={classes.itemContainer}>
        <LeftPane
          exercises={exercises}
          category={category}
          onSelect={onSelect}
          onDelete={onDelete}
          onSelectEdit={onSelectEdit}
        />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.itemContainer}>
        <RightPane
          exercise={exercise}
          editMode={editMode}
          muscles={muscles}
          onEdit={onEdit}
        />
      </Grid>
    </Grid>
  );
}

Exercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default Exercises;
