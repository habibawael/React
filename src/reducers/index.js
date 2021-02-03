import {movies} from './movies'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    moviesList : movies
})

export default rootReducer;

// store
// {
//     moviesList:[

//     ]
// }