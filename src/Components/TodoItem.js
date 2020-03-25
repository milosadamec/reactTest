import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    console.log(this.props.todo);
    if (this.props.todo.completed) {
      console.log(" completed");

      return {
        textDecoration: "line-through",
        backgroundColor: "#33CC33"
      };
    } else {
      console.log(" not completed");
      return {
        textDecoration: "none",
        backgroundColor: "#ff3300"
      };
    }
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default TodoItem;
