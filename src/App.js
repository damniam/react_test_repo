//import './App.css';
import React, { Component } from "react";
import TodoBanner from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import TodoRow from "./TodoRow";
import VisibilityControl from "./VisibilityControl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Damian",
      todoItems: [
        { action: "Kupić kwiat", done: false },
        { action: "Przeczytac ksiazke", done: false },
        { action: "Zadzwonic do dziewczyny", done: true },
        { action: "Posprzatac pokoj", done: false },
      ],
      showCompleted: true,
    };
  }
  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  };

  createNewToDo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: task, done: false }],
        newItemText: "",
      });
    }
  };

  toggleTodo = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });

  todoTableRows = (doneValue) =>
    this.state.todoItems
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
      ));

  render = () => (
    <div className="App">
      <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
      <div className="container-fluid">
        <TodoCreator callback={this.createNewToDo} />
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Opis</th>
            <th>Wykonane</th>
          </tr>
          <tbody>{this.todoTableRows(false)}</tbody>
        </thead>
      </table>
      <div className="bg-secondary text-white text-center p-2">
        <VisibilityControl
          decription="wykonane zadania"
          isChecked={this.state.showCompleted}
          callback={(checked) => this.setState({ showCompleted: checked })}
        />
      </div>
      {this.state.showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Opis</th>
              <th>Wykonane</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows(true)}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;
