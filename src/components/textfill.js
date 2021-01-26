import React from 'react';

class Text extends React.Component{
  constructor(){
    super()
    this.state ={
      name : "Habiba", 
    }
  }
  render(){
    const styles = {
      header : {
        backgroundColor : "red"
      },
      text : {
        backgroundColor : "lightblue"
      }
    }
    return ( 
      <div>
        <p className="text" style= {styles.text}>
        {this.state.name}
        </p>
        <input type="text" value={this.state.name} onChange={
          (e) => {
            this.setState({name : e.target.value})
          }
        }/>
        <input type="button" value="click" onClick={()=>{ 
          this.setState({name : "Test"})
        }}/>
        {/* <img src="https://archive.org/download/72975551.cms/72975551.cms.jpg"></img>
        <img src="/Images/1.jpg"></img> */}
      </div>
    )
  }
}  
export default Text;

