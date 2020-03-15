import React, { Component, Fragment } from "react";
import "./app.css";
import { Header, Footer } from "./Layout";
import Exercises from "./Exercises/Exercises";
import { muscles, exercises } from "../store";
import { CssBaseline } from "@material-ui/core";

export default class App extends Component {
  state = { username: null, exercises, exercise: {} };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (accum, category) => ({
        ...accum,
        [category]: []
      }),
      {}
    );
    // need to destructure and rename the incoming state object
    const { exercises } = this.state;
    // incoming data is not sorted
    // sort the data by the muscle
    return Object.entries(
      exercises.reduce((muscleGroup, exercise) => {
        // need to destructure and rename the incoming state object
        const { muscles } = exercise;

        // new object organized by muscle type
        if (muscleGroup[muscles]) {
          muscleGroup[muscles] = [...muscleGroup[muscles], exercise];
        } else {
          muscleGroup[muscles] = [exercise];
        }

        return muscleGroup;
      }, initExercises)
    );
  }

  handleCategorySelect = category => {
    this.setState({ category });
  };

  handleExerciseSelect = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(exer => exer.id === id),
      editMode: false
    }));
  };
  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };
  handleExerciseDelete = id => {
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));
  };
  handleSelectEdit = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(exer => exer.id === id),
      editMode: true
    }));
  };

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));
  };

  render() {
    // console.log(this.getExercisesByMuscles());
    const sortedExercises = this.getExercisesByMuscles();
    const { username, category, exercise } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        {username ? (
          <h1>{`Hello Cello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <Exercises
          exercises={sortedExercises}
          exercise={exercise}
          category={category}
          muscles={muscles}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleSelectEdit}
          onEdit={this.handleExerciseEdit}
          editMode={this.state.editMode}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
