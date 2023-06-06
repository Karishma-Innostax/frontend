import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            _id:this.props.match.param.id,
            name:'',
            age:null,
            emailId:'',


        }
        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state._id).then(res=>{
            let employee=res.data;
            this.setState({
                _id:employee._id,
                name:employee.name,
                age:employee.age,
                emailId:employee.emailId

            })
        })
    }
    updateEmployee=(e)=>{
        e.preventDefault();
        let employee={
            _id:this.state._id,
            name:this.state.name,
            age:this.state.age,
            emailId:this.state.emailId
        }
        console.log('employee=>'+JSON.stringify(employee))

      EmployeeService.updateEmployee(employee,this.state._id).then(res=>{
        this.props.history.push('/employee');
      })
     }
     

    changeNameHandler=(event)=>{
        this.setState({
            name:event.target.value
        });
    }
    changeIdHandler=(event)=>{
        this.setState({
            _id:event.target.value
        });
    }
    changeAgeHandler=(event)=>{
        this.setState({
            age:event.target.value
        });
    }
    changeEmailHandler=(event)=>{
        this.setState({
            emailId:event.target.value
        });
    }
//  navigation= useNavigation();
    cancel(){
        this.props.history.push('/employee')
        // this.props.navigation.navigate('/employee')
    }


  render() {
    return (
      <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Employee</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>User-Id:</label>
                                <input placeholder='Enter Your ID' name='_id' className='form-control' value={this.state._id} 
                                onChange={this.changeIdHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Name:</label>
                                <input placeholder='Enter Your Name' name='name' className='form-control' value={this.state.name} 
                                onChange={this.changeNameHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Age:</label>
                                <input placeholder='Enter Your Age' name='age' className='form-control' value={this.state.age} 
                                onChange={this.changeAgeHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Email:</label>
                                <input placeholder='Enter Your Email' name='email' className='form-control' value={this.state.emailId} 
                                onChange={this.changeEmailHandler}/>
                            </div>
                            <br></br>
                            <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
