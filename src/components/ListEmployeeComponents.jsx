import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponents extends Component {
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }
    }

componentDidMount(){
    EmployeeService.getEmployees().then((res)=>{
        this.setState({employees:res.data});
    })
}

  render() {
    return (
      <div>
        <h2 className='text-center'>Employees list</h2>
        <div className='row'>
            <table className='table table-striped table-bordered'>
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

                    {
                        this.state.employees.map(
                            employee=>
                            <tr key={employee.id}>
                                <td>{employee._id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
        



      </div>
    )
  }
}
