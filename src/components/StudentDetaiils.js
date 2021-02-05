import {useEffect, useState} from 'react'



const StudentDetails = ({match})=>{
    let [studentInfo, setStudentInfo]=useState({});
    
    const baseUrl = "http://localhost:3001/students"
    
    useEffect(()=>{
        fetch(`${baseUrl}/${match.params.id}`)
        .then((response)=>{
            return response.json()
        })
        .then(data=>{
            
            setStudentInfo(data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    if(studentInfo.name){
        
        return(
            
            <section className="py-5">
                <br></br>
                <br></br>
                <div className="container">
                    <h1 className="display-1 text-center font-weight-bolder">{studentInfo.name}</h1>
                    <br></br>
                    <h3>Age: {studentInfo.age}</h3>
                    <hr></hr>
                    <h4 className="text-secondary">Phone : {studentInfo.phone}</h4>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
               
            </section>
        )
    
    }
    return(
            <p>No Student data available</p>
        )
    
}

export default StudentDetails;