import React, { Component } from 'react'
import './Thrids.css'

export class Third extends Component {
    state={
          Count:0
    }
    handleIncrement=()=>{this.setState({Count:this.state.Count+1})}
    handleDecrement=()=>{this.setState({Count:this.state.Count-1})}
  render() {
    return (
      <div>
        <div className='vr'>
          <h2>Count : {this.state.Count}</h2>
          </div>
          <div>
            <button className='ja' onClick={this.handleIncrement}>Increment</button>
            <button  className='yr' onClick={this.handleDecrement}>Decrement</button>
          </div>
      <div>
        <div className='t'>
      <label><center><h1>The count is {this.state.Count}</h1></center></label></div>
      </div>
      </div>
    )
  }
}

export default Third