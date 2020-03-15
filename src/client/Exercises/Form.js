import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles,
  Button
} from "@material-ui/core";

const styles = theme => ({
  FormControl: {
    width: 500,
    textAlign: "left"
  },
  "@media (max-width: 600px)": {
    FormControl: {
      width: 200,
      textAlign: "left"
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});
// a controlled component. state is managed with in this component

class Form extends Component {
  state = this.getInitState();
  getInitState() {
    const { exercise } = this.props;
    return exercise
      ? exercise
      : {
          title: "",
          description: "",
          muscles: ""
        };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.exercise !== this.props.exercise) {
      this.setState({ ...this.props.exercise });
    }
  }

  handleChange = name => event => {
    // console.log(event.target.value);
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit = () => {
    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, "-"),
      ...this.state
    });
    this.setState(this.getInitState);
  };

  render() {
    const { title, description, muscles } = this.state;
    const { classes, muscles: categories, exercise } = this.props;

    return (
      <form className={classes.form}>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <FormControl className={classes.FormControl}>
          <InputLabel id="demo-simple-select-label">Muscle</InputLabel>
          <Select
            id="Muscles"
            value={muscles}
            onChange={this.handleChange("muscles")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map(category => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          label="Description"
          value={description}
          multiline
          rows="4"
          onChange={this.handleChange("description")}
          margin="normal"
          className={classes.FormControl}
        />
        {/* <Button color="primary" onClick={this.handleToggle}>
          Cancel
        </Button> */}
        <Button color="primary" onClick={this.handleSubmit}>
          {exercise ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}

Form.propTypes = { classes: PropTypes.object.isRequired };

Form.defaultProps = {};

export default withStyles(styles)(Form);
