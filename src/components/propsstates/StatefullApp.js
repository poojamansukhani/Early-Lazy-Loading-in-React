import React, { Component } from "react";

export default class StatefullApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Pooja",
          age: 26
        },
        {
          id: 2,
          name: "Pooja",
          age: 26
        },
        {
          id: 3,
          name: "Pooja",
          age: 26
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h3 className="bg-danger text-center">Dashboard Enrollers</h3>
        <table className="table table-hover table-striped">
          {this.state.data.map((person, index) => {
            return <TableRow data={person} />;
          })}
        </table>
      </div>
    );
  }
}

//Post or container
const TableRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.age}</td>
    </tr>
  );
};
