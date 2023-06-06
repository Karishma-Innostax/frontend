import React, { Component } from "react";
// import { Link } from 'react-router-dom';

export default class ListEmployeeComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
  }

  // componentDidMount(){
  //     EmployeeService.getEmployees().then((res)=>{
  //         this.setState({employees:res.data});
  //     })
  // }

  addEmployee() {
    this.props.history.push('/add-employee');
    // <Link to='/add-employee'></Link>
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees list</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Employee Age</th>
                <th>Employee Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee._id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
