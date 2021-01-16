import React, { Component } from "react";

export class TodoBanner extends Component {
  render() {
    return (
      <>
        <h4 className="bg-primary text-white text-center p-2">
          Lista zadań uzytkownika {this.props.name}
        </h4>
        <h5 className="bg-primary text-white text-center p-2">
          Liczba zadań: {this.props.tasks.filter((t) => !t.done).length})
        </h5>
      </>
    );
  }
}

export default TodoBanner;
