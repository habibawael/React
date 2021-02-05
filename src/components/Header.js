import React from 'react'
import Student from './Student'

export default class Headd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            students : [],
            keywords: ''
        }
        this.baseURL = "http://localhost:3001/students"
    }
    
    keywordsChanged = (e) => {
        
        this.setState({ keywords: e.target.value })
    }


    renderStudents({students}){
        if(this.state.keywords !== "")
        {
            if(students && students.length>0){
                return students.map((student)=>{
                    if(student.name.toLowerCase().startsWith(this.state.keywords.toLowerCase()))
                        return <Student key={student.id} studentinfo={student}/>

                })
            }
            return(
                <p className="text-danger">No students Available</p>
            )
        }
        else{
            if(students && students.length>0){
                return students.map((student)=>{
                    return <Student key={student.id} studentinfo={student}/>
                })
            }
            return(
                <p className="text-danger">No students Available</p>
            )

        }
    }
    render(){
        return(
            <div>
                <header className="masthead">
                </header>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="display-1 text-center font-weight-bold ">Students List</h1>
                <input  className = "form-control" type="text" placeholder="Search by name"
                    value={this.state.keywords}
                    
                    onChange={this.keywordsChanged}
                />
                <p>
                    keywords:{this.state.keywords}
                </p>

                {this.renderStudents(this.state)}
            </div>
        )
    }

    componentDidMount(){
        fetch(this.baseURL,{method:'GET'})
        .then((response)=>{
            if(response.status ===200)
            {
                return (response.json())
            }
        })
        .then((data)=>{
            //console.log(data);
            this.setState({students: data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}