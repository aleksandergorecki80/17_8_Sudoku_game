import React from "react";
import style from "../containers/TodoForm.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: ""
    };
  }

  onAddTask() {
    if (this.state.name.trim() === "") {
      this.setState({
        message: "* This field can't be empty"
      });
    } else {
      this.props.addTask(this.state.name);
      this.setState({
        message: ""
      });
    }
  }

  onHandleAdd(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          value={this.state.name}
          onChange={this.onHandleAdd.bind(this)}
        />
        <p> {this.state.message}</p>
        <button className="btn" onClick={this.onAddTask.bind(this)}>
          Add a task
        </button>
      </div>
    );
  }
}

export default TodoForm;
