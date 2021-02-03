const list = [
    {
        id:1,
        title:'God Father 1',
        year: 1972
    },
    {
        id:2,
        title:'God Father 2',
        year: 1974
    },
    {
        id:3,
        title:'God Father 3',
        year: 1976
    }
]

function getMovies(){
    console.log('3-get movies action called ')
    //fetch
    return(
        {
            type : 'MOVIES_LIST',
            payload : list
        }
    )
    
}

function getMoviesbyID(idID){
    return(
        {
            type : 'MOVIES_LIST',
            payload : list.filter(obj => obj.id === idID)
        }
    )

}

export  {getMovies, getMoviesbyID}