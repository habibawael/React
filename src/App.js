import React from 'react';
import './index.css';
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom'
import Headd from './components/Header';
import Artist from './components/Artist';
import ArtistDetails from './components/ArtistDetaiils'

// import Slideshow from './components/imageslide'
// import Text from './components/textfill'

// import Regis from './components/Register';
// import Student from './components/Students';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       Details :   [{
//         name : "",
//         age : "",
//         i : 0
//       }]
//     }
//   }

//   add = (det)=>{
    
//     var x = this.state.Details.concat({ name : det.namesent,
//                               age : det.agesent,
//                               i : det.j})
//     this.setState({Details : x})
//   }
  
//   render(){
//     return (
//       <div>
//         <Regis onadd = {this.add}></Regis>
//         <Student list = {this.state.Details}></Student>
        
//       </div>
//     )
//   }
// }
class App extends React.Component{
  
  render(){
    return (
      <Router>
        
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <Link className="navbar-brand text-white" to="/home"><h2>Home</h2></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link text-white"  to="/artist/1"><h3>Artists </h3><span className="sr-only">(current)</span></Link>
                </li>
              </ul>
            </div>
          </nav>
          

          <Switch>
            <Route component={ArtistDetails} path="/artist/:id"></Route>
            <Route component={Headd} path="/home"></Route>
            <Route component={Headd} path="/" exact></Route>
            <Route path="*" render={()=>(
              <h1 className="alert alert-danger">404
              <p>
                Page Not Found
              </p>
              </h1>
            )}>
              
            </Route>
          </Switch>
          
        </div>
      </Router>
    )
  }
}

export default App;

