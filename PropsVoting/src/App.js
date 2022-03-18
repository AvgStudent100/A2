import React, { Component } from 'react'
import Vote from './Vote'

export class App extends Component {
  render() {
    return (
      <div className='e'>
        <div className='a'>
        <Vote title='C'/>
        <Vote title='C++'/>
        <Vote title='C#'/>
        </div>
      </div>
    )
  }
}

export default App