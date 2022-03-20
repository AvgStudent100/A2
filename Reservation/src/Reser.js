import React, { Component } from 'react'
import'./Rese.css'

export class reser extends Component {
  state={
    name:'',
    age:'',
    gender:'',
    source:'',
    destination:'',
    onsubmit:false,
  }

  handleSubmit=(e)=>{this.setState({onsubmit:true})}
  handleClear=(e)=>{this.setState({fullname:'',
  age:'',
  gender:'',
  source:'',
  destination:'',
  })}

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
        <div>
         {this.state.onsubmit&&<div className='out'>
        <label><h4 className='fst-italic text-decoration-underline border border-danger'> Name:{this.state.fullname}</h4></label><br></br>
        <label><h4 className='fst-italic text-decoration-underline  border border-danger'> Age:{this.state.age}</h4></label><br></br>
        <label><h4 className='fst-italic text-decoration-underline border border-danger'> Gender:{this.state.gender}</h4></label><br></br>
        <label><h4 className='fst-italic text-decoration-underline border border-danger'> Traveling from:{this.state.source}</h4></label><br></br>
        <label><h4 className='fst-italic text-decoration-underline border border-danger'> Destination to:{this.state.destination}</h4></label><br></br>
         </div>}
         </div>
       
      {!this.state.onsubmit&&<div>
      <div className="a">
      
      <div>
     <h1 className='text-center text-danger'><label>RESERVATION</label></h1><br></br>
     <label><h3 className='text-start ms-5   font-monospace' >Name of the Passenger:</h3></label>
     <input type='text' className='border border-warning' placeholder='Name'  name='fullname' onChange={this.handleChange}
      value={this.state.fullname}></input><br></br>
      </div>

      <div>
      <label><h3 className='ms-5 font-monospace'>Age:</h3></label>
        <input type='number' name='age' onChange={this.handleChange} className='border border-warning' placeholder='Age' value={this.state.age}></input>
      </div>
      

      <div className='b me-5' name='gender' onChange={this.handleChange} value={this.state.gender}>
      <label><h3 className='font-monospace me-5'value={this.state.name}>Gender:</h3></label>
      <div className='form-check me-5 '   > 
      <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault1"  name='gender' onChange={this.handleChange} value="male"></input>
      <label class="form-check-label text-decoration-underline" for="flexRadioDefault1">Male</label>
      </div>

      <div className='form-check me-5'>
      <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault2" name='gender' onChange={this.handleChange} value="female"></input>
      <label class="form-check-label text-decoration-underline" for="flexRadioDefault2">Female</label>
      </div>

      <div className='form-check me-5'>
      <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault3" name='gender' onChange={this.handleChange} value="others"></input>
      <label class="form-check-label text-decoration-underline" for="flexRadioDefault3">Others</label>
      </div>
      </div>

      <div>
      <label><h3 className='text-start ms-5 font-monospace' >Source:</h3></label>
      <select className='border border-warning font-monospace' placeholder='Source' name='source' onChange={this.handleChange} value={this.state.source}>
        <option>Select City</option>
        <option>Chennai</option>
        <option>Mumbai</option>
        <option>Hyderabad</option>
        <option>Lucknow</option>
        <option>Gujarat</option>
        <option>Delhi</option>
        <option>Kerala</option>
        <option>Kochin</option>
        <option>Goa</option>
      </select>
      </div>

      <div>
        <div>
      <label><h3 className='text-start ms-5   font-monospace'>Destination:</h3></label>
      <select className='border border-warning font-monospace'  name='destination' onChange={this.handleChange} value={this.state.destination}>
        <option>Select City</option>
        <option>Chennai</option>
        <option>Mumbai</option>
        <option>Hyderabad</option>
        <option>Lucknow</option>
        <option>Gujarat</option>
        <option>Delhi</option>
        <option>Kerala</option>
        <option>Kochin</option>
        <option>Goa</option>
      </select>
      </div>
      <form>
         <div class="custom-control custom-checkbox">
        <input type="checkbox" class="ms-5" id="customCheck" name='accept' onChange={this.handleChange} value='yes'></input>
        <label class="custom-control-label" for="customCheck">I Agreed all terms and conditions</label>
        </div>
      </form>
      </div><br/>

      <div className='d-flex ms-5'>
         <button class="btn btn-primary border border-outset " onClick={this.handleSubmit}>Submit</button>
        <div className='d-flex ms-5'>
        <button class="btn btn-secondary border border-outset" onClick={this.handleClear}>Clear</button>
        </div>
       </div>


      
     
      </div>
      </div>}
      </div>
    )
  }
}

export default reser