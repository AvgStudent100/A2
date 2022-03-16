import React, { Component } from 'react'

export class Second extends Component {
    state={

         fullname:'',
        age:'   '  ,
        onsubmit:false,
        
     }
    handleName=(e)=>{
       this.setState({fullname:e.target.value})
    }
    handleAge=(e)=>{
        this.setState({age:e.target.value})
    }
    handleSubmit =()=>{
        this.setState({onsubmit:true})
        this.setState({onsubmit:!this.state.onsubmit})
    }
    
  render() {
    return (
      <div>
          <h2> Student name: <input type='text' value={this.state.fullname} onChange={this.handleName}/></h2>
          <h2>Student age: <input type="number" name='age'value={this.state.age}onChange={this.handleAge}/></h2>
         <button type='Submit' onClick={this.handleSubmit}>Submit</button>{ 
          this.state.onsubmit&&<div>
          <label>My name is :{this.state.fullname}</label><br></br>
          <label>My age is {this.state.age}</label></div>
          }
          
      </div>
    )
  }
}

export default Second