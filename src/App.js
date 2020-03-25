import React from "react";
import "./styles.css";
import Todos from "./Components/Todos";

class App extends React.Component {
  state = {
    Todos: [
      {
        id: 1,
        title: "Work hard",
        completed: false
      },
      {
        id: 2,
        title: "Clean stuff",
        completed: true
      },
      {
        id: 3,
        title: "Documentation",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.Todos} />
      </div>
    );
  }
}

export default App;
