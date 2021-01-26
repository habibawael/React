import React from 'react'
import Artist from './Artist'

export default class Headd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            artists : []
        }
        this.baseURL = "http://localhost:3001/artists"
    }

    renderArtists({artists}){
        if(artists&& artists.length>0){
            return artists.map((artist)=>{
                return <Artist key={artist.id} artistinfo={artist}/>
            })
        }
        return(
            <p className="text-danger">No artists Available</p>
        )
    }
    render(){
        return(
            <div>
                <header className="masthead">
                    <div className="h-100 row">
                        <img className="col-12" height="700px" src='/Images/cover.png'/>
                    </div>
                </header>
                <br></br>
                <h1 className="display-1 text-center font-weight-bold ">Browse Artists</h1>
                {this.renderArtists(this.state)}
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
            console.log(data);
            this.setState({artists: data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}