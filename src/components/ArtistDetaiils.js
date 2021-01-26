import {useEffect, useState} from 'react'



const ArtistDetails = ({match})=>{
    let [artistInfo, setArtistInfo]=useState({});
    let [albums, setAlbums] = useState([]);
    const baseUrl = "http://localhost:3001/artists"
    
    useEffect(()=>{
        fetch(`${baseUrl}/${match.params.id}`)
        .then((response)=>{
            return response.json()
        })
        .then(data=>{
            
            setArtistInfo(data)
            setAlbums(data.albums)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const A = albums.map((album) =>{
        return(
            <div className="card justify-content-center align-content-center d-flex">
                <img src={"/Images/albums/"+ album.cover + ".jpg"} className="card-img-top" alt="" width="50px"/>
                <div className="card-body">
                    <h4 className="card-title">{album.title}</h4>
                    <h6 className="card-text">Price : {album.price}</h6>
                    <h6 className="card-text">Year : {album.year}</h6>
                </div>
            </div>
        )
    });

    if(artistInfo.name){
        console.log(albums)
        return(
            
            <section className="py-5">
                <br></br>
                <br></br>
                <div className="container">
                    <h1 className="display-1 text-center font-weight-bolder">{artistInfo.name}</h1>
                    <br></br>
                    <img src={"/Images/"+ artistInfo.cover + ".jpg"} class="rounded mx-auto d-block" alt="..."/>
                    <br></br>
                    <h3>Genre: {artistInfo.genre}</h3>
                    <hr></hr>
                    <h4 className="text-secondary">{artistInfo.bio}</h4>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div class="row justify-content-center align-content-center d-flex">
                    {A}
                </div>
            </section>
        )
    
    }
    return(
            <p>No Artist data available</p>
        )
    
}

export default ArtistDetails;