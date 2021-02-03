import React from 'react';
import './index.css';
import {connect} from 'react-redux'
import * as actions from './actions'

class App extends React.Component{

  constructor(){
    super();
    this.state ={
      movieID : 0
    }
  }
  
  render(){

    return(
      <div>
        <h2 className="text-center">Movies List </h2>
        <hr></hr>
        <div className="row">
          <input type="button" className="btn btn-primary btn-lg col-3" value="Get Movies List" onClick={()=>this.props.getMovies()}></input>
          <input type="number" className="bg-secondary offset-5 col-1"  value={this.state.movieID} onChange={
                      (e) => {
                          this.setState({movieID : e.target.value})
                      }}></input>
          <input type="button" className="btn btn-primary btn-lg col-3" value = "Get Movie Details by ID" onClick={()=>this.props.getMoviesbyID(parseInt(this.state.movieID))}></input>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        {this.renderMovies(this.props)}
        
      </div>
    )
  }
  
  renderMovies = ({mList})=>{
    if(mList){
      return mList.map((movie)=>{
        return (
          <div className="alert alert-dark" key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
          </div>
        )
      })
    }
    return <p>
      No Movie available
    </p>
  }  
}

const mapReduxStateToComponentProps =(state) =>{
  console.log(state)
  return(
    {
      mList : state.moviesList
    }
  )
}

export default connect(mapReduxStateToComponentProps,actions)(App)

