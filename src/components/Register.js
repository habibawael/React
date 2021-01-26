import React from 'react';

class Regis extends React.Component{
  constructor(){
    super()
    this.state ={
        name : "", 
        age : "",
        i : null,
        det : [{
            namesent : "",
            agesent : "",
            j : 0
        }]
    }
  }

  added = (e) =>{
      if(this.state.name !== "" && this.state.age!== ""){
        this.state.det.push({namesent : this.state.name,
            agesent : this.state.age,
            j : this.state.i++,
            })
        this.props.onadd(this.state.det[this.state.i]);
        this.setState({name : ""})
        this.setState({age: ""}) 

      }
    
  }

  render(){
    return ( 
        
      <div>
          <hr></hr>
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Name</span>
                </div>
                <input type="text" value={this.state.name} onChange={
                    (e) => {
                        this.setState({name : e.target.value})
                    }
                    } className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/> 
            </div>
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Age</span>
                </div>
                <input type="text" value={this.state.age} onChange={
                    (e) => {
                        this.setState({age : e.target.value})
                    }
                    } className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <hr></hr>
            <input type="button" className="btn btn-success btn-lg" value="Add" onClick={this.added}/>
            <hr></hr>
      </div>
    )
  }
}  
export default Regis;