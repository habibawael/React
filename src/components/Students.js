import React from 'react';

const Student = (props) =>{
    const Lis = props.list.map((item)=>{
        return (
            <tr key = {item.i}>
                    <th>{item.name} </th>
                    <th>{item.age} </th>
            </tr>
        )
    })
    return (
        <div>
            <table className="table table-dark table-striped table-bordered">
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {Lis}
            </tbody>
            </table>
        </div>
        
    )
}

export default Student;