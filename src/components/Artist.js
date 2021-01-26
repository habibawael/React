
import React from 'react'
import { Link } from 'react-router-dom';


const Artist = ({artistinfo})=>{
    if (artistinfo && artistinfo.name)
    {
        return(
            <div>
                
                <br></br>
                <br></br>
                <br></br>
                
                <div className="row align-items-center">
                <Link to={`artist/${artistinfo.id}`} className=" col-xl-8 col-lg-6 col-md-12 col-sm-12 row">
                <img  src={"/Images/"+ artistinfo.cover + ".jpg"} className=" col-12" alt=""></img>
                </Link>
                <Link  to={`artist/${artistinfo.id}`} className="col-xl-4 col-lg-6 col-md-12 col-sm-12 row">
                    <h3 className="display-3 font-weight-bold text-secondary col-12 ">{artistinfo.name}</h3>
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

export default Artist;