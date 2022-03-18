import React, { Component } from 'react'
import'./Votes.css';

export class Vote extends Component {

    state={
        count:0
    }
    handleVote=()=>this.setState({count:this.state.count+1})

  render() {
    return (
   
        
        <div className='b'>
       <label> <h1>{this.props.title}</h1></label>
       <br></br>

       <div className='d'> 
       <button onClick={this.handleVote} className='c'>Vote</button>
        </div><br></br>
        <h1>{this.state.count}</h1> 
        
         </div>

    )
  }
}

export default Vote