import React, { Component } from 'react';
import'./Vot.css';
export class Vot extends Component {
    state={
        count:0,
        count1:0,
        count2:0,
        count3:0,
    }
handleIncrement=()=>{this.setState ({count:this.state.count+1})}
handleIncrement1=()=>{this.setState ({count1:this.state.count1+1})}   
handleIncrement2=()=>{this.setState ({count2:this.state.count2+1})}
handleIncrement3=()=>{this.setState ({count3:this.state.count3+1})}

    
  render() {
    return (
      <div className='kk'>
          <div className='bq'>

          
          <h1> <center>VOTING</center></h1>
          </div>
          <div className='bg'>
          <h2>C: {this.state.count}</h2>
          <button className='vd' onClick={this.handleIncrement}>VOTE</button>
          </div><br/>
          <div className='hh'>
          <h2>JS:{this.state.count1}</h2>
          <button className='hu' onClick={this.handleIncrement1}>VOTE</button>
          </div><br/>
          <div className='by'>
          <h2>C#:{this.state.count2}</h2>
          <button className='ji' onClick={this.handleIncrement2}>VOTE</button>
          </div><br/>
          <div className='vr'>
          <h2>C++:{this.state.count3}</h2>
          <button className='ui' onClick={this.handleIncrement3}>VOTE</button>
          </div><br/>     
          
               
           </div>
    )
    
    
  }
}

export default Vot
