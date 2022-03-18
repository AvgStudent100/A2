import React, { Component } from 'react'
import './Fifths.css'

export class Fifth extends Component {

  state={
    fname:'',
    lname:'',
    name:'',
    cit:'',
    ph:'',
    ema:'',
    onsubmit:false
  }

    handleChange=()=>{
       this.setState({onsubmit:true})
       this.setState({onsubmit:!this.state.onsubmit})
    }
    handlefname=(e)=>{
      this.setState({fname:e.target.value})
    }
    handleLname=(e)=>{
      this.setState({lname:e.target.value})
    }
    handleName=(e)=>{
      this.setState({name:e.target.value})
    }
    handleCity=(e)=>{
      this.setState({cit:e.target.value})
    }

    handlePhone=(e)=>{
      this.setState({ph:e.target.value})
    }

    handleEmail=(e)=>{
      this.setState({ema:e.target.value})
    }

  render() {
    return (
      <div className='row'>
      <div className='col-8'>
<div className='a'>
       <h1><center>Register New Account</center></h1>
       
          
          
        <div className='b'>
        <div><input type='text' placeholder='Firstname'  onChange={this.handlefname}></input></div>
        <div ><input type='text' placeholder='Lastname' onChange={this.handleLname}></input></div>
        </div> 
        <br>
        </br>


      <div className='c'>
      <input type='text' placeholder='Name' onChange={this.handleName}></input></div><br></br>

      <div className='d'>
      <input type='text' placeholder='City' onChange={this.handleCity}></input>
      </div>
      <br></br>

      <div className='e'>
      <input type='text' placeholder='PhoneNumber'  onChange={this.handlePhone}></input>
      </div><br></br>

      <div className='f'>
      <input type='text' placeholder='Email'onChange={this.handleEmail}></input><br></br>
      </div><br/>

      <div>
      <button className='h' onClick={this.handleChange}>Create Account</button>
      </div>
</div>
</div>
      {/* </div> */}
      <div className='col-4'>
      <div className='r'>
              {this.state.onsubmit&&<div>
          <label>First Name:{this.state.fname}</label><br></br>
          <br></br>
          <label>Last Name: {this.state.lname}</label><br></br>
          <br></br>
          <label>Name:{this.state.name}</label><br></br>
          <br></br>
          <label>City:{this.state.cit}</label><br></br>
          <br></br>
          <label>PhoneNumber{this.state.ph}</label><br></br>
          <br></br>
          <label>Email{this.state.ema}</label><br></br>
          </div>
          
          }
          </div>
      </div>
      </div>
    )
  }
}
export default Fifth