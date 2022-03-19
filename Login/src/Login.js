import React, { Component } from 'react'
import './Logins.css'

export class Login extends Component {
state={
  title:'',
  fname:"",
  lname:'',
  dob:'',
  email:'',
  accept:'',
  password:'',
  cpassword:'',
  onsubmitted:false
}

handleReset=(e)=>{this.setState({title:'',fname:'',lname:'',dob:'',email:'',accept:'',password:'',cpassword:''})
    }


handlePassword=(e)=>{this.setState({password:e.target.value})}
handleTitle=(e)=>{this.setState({title:e.target.value})}
handleFname=(e)=>{this.setState({fname:e.target.value})}
handleLname=(e)=>{this.setState({lname:e.target.value})}
handleDob=(e)=>{this.setState({dob:e.target.value})}
handleEmail=(e)=>{this.setState({email:e.target.value})}
handleAccept=(e)=>{this.setState({accept:e.target.value})}
handleRegister=(e)=>{this.setState({onsubmitted:true})}
handleChangePassword=(e)=>{this.setState({cpassword:e.target.value})}


  render() {
    return (
      <div>
      <div className='a'>
        <div className='b lead me-5'>
        <label>Title</label>
        <label>FirstName</label>
        <label>LastName</label>
        </div>


       <div className='c lead'>
       <select className='bx5  border border-danger' onChange={this.handleTitle} value={this.state.title}>
        <option>Select</option>
        <option>Mr.</option>
        <option>Ms.</option>
        <option>Mrs.</option>
        </select>
        <input type="text" className='bx6 border border-danger' placeholder='Firstname' onChange={this.handleFname} value={this.state.fname}></input> 
        <input type="text" className='bx7 border border-danger' placeholder='Lastname'  onChange={this.handleLname} value={this.state.lname}></input> 
        </div>

        <div className='d'>
          <label>Date of Birth</label>
          <label>Email</label>
        </div>
        <div className='e'>
        <input type="date" className='bx3 border border-danger' placeholder='Date of Birth' onChange={this.handleDob} value={this.state.dob}></input>
        <input type="text"  className='bx4 border border-danger' placeholder='Email' onChange={this.handleEmail} value={this.state.email}></input> 
        </div>

        <div className='f'>
          <label>Password</label>
          <label>Confirm Password</label>
        </div>
        <div className='g'>
          <input type='password' className='bx1  border border-danger' placeholder='Password' onChange={this.handlePassword} value={this.state.password}></input>
          <input type='password' className='bx2 border border-danger' placeholder='Password' onChange={this.handleChangePassword} value={this.state.cpassword}></input>
        </div>

        <form>
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" onChange={this.handleAccept} value={this.state.accept}></input>
        <label class="custom-control-label" for="customCheck">Accept Terms & Conditions</label>
        </div>
       </form>

       <div className='h'>
         <button class="btn btn-primary border border-danger" onClick={this.handleRegister}>Register</button>
         <button class="btn btn-secondary border border-danger" onClick={this.handleReset}>Reset</button>
       </div>
       </div>
      <div className='alert alert-link  mb-5'>
       {this.state.onsubmitted&&<div>
        <label>{this.state.title}</label>
         <label>{this.state.fname}</label>
         <label>{this.state.lname}</label><br></br>
         <label>{this.state.dob}</label><br></br>
         <label>{this.state.email}</label><br></br>
         <label>{this.state.accept}</label>
         </div>}
         </div>
      </div>
    )
  }
}

export default Login