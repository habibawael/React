
import React from 'react'
import { Link } from 'react-router-dom';


const Student = ({studentinfo})=>{
    if (studentinfo && studentinfo.name)
    {
        return(
            <div>
                
                <br></br>
                <br></br>
                <br></br>
                
                <div className="row">
                <Link to={`student/${studentinfo.id}`} className=" col-6 row text-center">
                </Link>
                <Link  to={`student/${studentinfo.id}`}>
                    <h3 className="display-3 font-weight-bold text-secondary col-12 ">{studentinfo.name}</h3>
                </Link>
                </div>
                
                
            </div>
        )
    }
    else{
        return(
            <p>
                No data Available
            </p>
        )
    }
}

export default Student;