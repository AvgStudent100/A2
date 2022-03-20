import React, { Component } from 'react'
import './Vallis.css'

export class Vali extends Component {
    state={
        title:'',
        fname:"",
        lname:'',
        dob:'',
        email:'',
        agree:'',
        password:'',
        cpassword:'',
        onsubmit:false
      }
      
      handleReset=(e)=>{this.setState({title:'',fname:'',lname:'',dob:'',email:'',agree:'',password:'',cpassword:''})
          }
      
      handleSubmit = () => { 
        if (!this.state.fname) {
          alert('firstname is mandatory')
          return
        }

        if (!this.state.lname) {
            alert('Lastname is mandatory')
            return
          }

          if (!this.state.dob) {
            alert('Date of birth is mandatory')
            return
          }

          
          if (!this.state.email) {
            alert('Email is mandatory')
            return
          }
        
          
        if((this.state.agree==='yes')){
            this.setState({agree:"Yes I agreed the condition"})}
        else{
            this.setState({agree:"No,I didnt agreed the condition"})
        }

        if((this.state.password) && (this.state.password===this.state.cpassword))
        
          this.setState({ onsubmit: true })
        else
          alert('Password should match')
        }

       

        handleChange = (e) => {
            if (e.target.type === 'checkbox') {
              this.setState({[e.target.name]:e.target.checked})
            } else {
              
              this.setState({[e.target.name]:e.target.value})
            }
          }

      
  render() {
    return (
        <div>
        {!this.state.onsubmit&&<div>
         <div className='ab'>
          <div className='b lead me-5'>
          <label>Title</label>
          <label>FirstName</label>
          <label>LastName</label>
          </div>
  
  
         <div className='c lead'>
         <select className='bx5  border border-danger' name='title' onChange={this.handleChange} value={this.state.title}>
          <option>Select</option>
          <option>Mr.</option>
          <option>Ms.</option>
          <option>Mrs.</option>
          </select>
          <input type="text" className='bx6 border border-danger' placeholder='Firstname' name='fname' onChange={this.handleChange} value={this.state.fname}></input> 
          <input type="text" className='bx7 border border-danger' placeholder='Lastname'  name='lname' onChange={this.handleChange} value={this.state.lname}></input> 
          </div>
  
          <div className='d'>
            <label>Date of Birth</label>
            <label>Email</label>
          </div>
          <div className='e'>
          <input type="date" className='bx3 border border-danger' placeholder='Date of Birth' name='dob' onChange={this.handleChange} value={this.state.dob}></input>
          <input type="text"  className='bx4 border border-danger' placeholder='Email' name='email' onChange={this.handleChange} value={this.state.email}></input> 
          </div>
  
          <div className='f'>
            <label>Password</label>
            <label>Confirm Password</label>
          </div>
          <div className='g'>
            <input type='password' className='bx1  border border-danger' placeholder='Password' name='password' onChange={this.handleChange} value={this.state.password}></input>
            <input type='password' className='bx2 border border-danger' placeholder='Password' name="cpassword" onChange={this.handleChange} value={this.state.cpassword}></input>
          </div>
  
          <form>
          <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck" name="agree"  onChange={this.handleChange}></input>
          <label class="custom-control-label" for="customCheck">agree Terms & Conditions</label>
          </div>
         </form>
  
         <div className='h'>
           <button class="btn btn-primary border border-danger" onClick={this.handleSubmit}>Submit</button>
           <button class="btn btn-secondary border border-danger" onClick={this.handleReset}>Reset</button>
         </div>
         </div>
         
         </div>}

         
        <div >
         {this.state.onsubmit&&<div className='outp'>
          <label><h3  className='text text-decoration-underline ' >{this.state.title}</h3></label>
           <label><h3 className='text text-decoration-underline '>{this.state.fname}</h3></label>
           <label><h3 className='text text-decoration-underline '>{this.state.lname}</h3></label><br></br>
           <label><h3 className='text text-decoration-underline'>{this.state.dob}</h3></label><br></br>
           <label><h3 className='text text-decoration-underline '>{this.state.email}</h3></label><br></br>
           <label><h3 className='text text-decoration-underline'>{this.state.agree}</h3></label>
           </div>}
           </div>
        </div>
      )
    }
  }

export default Vali