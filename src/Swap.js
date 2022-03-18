import React, { Component } from 'react'
import './Swapp.css'

export class Swap extends Component {
    state={
          name:"Welcome",
    }
   handleSwap=()=>{if(this.state.name==="Welcome")
   {
       this.setState({name:"Hello world"})
   }
   else{
       this.setState({name:"Welcome"})
   }
}
  render() {
    return (
      <div className='c'>
          <div className='a'>
          <h2>{this.state.name}</h2>
          </div>
          <button onClick={this.handleSwap} className='b'>Swap</button>
      </div>
    )
  }
}

export default Swap