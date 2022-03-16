import React, { Component } from 'react'
import './Sixt.css'

export class Sixth extends Component {
  render() {
    return (
      <div className='black'>
          <div className='a'>
           <h1>Welcome:</h1>
          </div>
          <div className='b'>
              <h3>Already Registered:</h3>
              <h3>New Customer:</h3>
          </div>
        <div className='h'>
          <div className='c'>
              <input type='text' placeholder='Username'></input>
              <br></br>
              <input type='text' placeholder='Email'></input>
          </div><br></br>


          <div className='d'>
          <input type='text' placeholder='Password'></input>
              <br></br>
              <input type='text' placeholder='Password'></input>
          </div><br></br>

          <div className='e'>
              <button className='f'>Sign In</button>
              <button className='g'>Log In</button>
          </div>
          </div>
      </div>
    )
  }
}

export default Sixth
