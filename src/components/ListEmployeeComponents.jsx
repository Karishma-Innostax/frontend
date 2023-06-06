import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";

export default class ListEmployeeComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.editEmployee=this.editEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
  }

editEmployee(id){
    this.props.history.push(`/update-employee/${id}`)

}

  componentDidMount(){
      EmployeeService.getEmployees().then((res)=>{
          this.setState({employees:res.data});
      })
  }

  addEmployee() {
    // console.log(employee)
    this.props.history.push({ pathname: `/add-employee`,
    state: this.state.employees}
);

    console.log('hihiihihi',this.props.history)
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
                  <td>
                    <button onClick={()=>this.editEmployee(employee._id)} className="btn btn-info">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
