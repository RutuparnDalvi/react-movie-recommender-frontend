import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import userIdReducer from './userIdReducer'
import recommendationReducer from './recommendationReducer'
import movieListReducer from './movieListReducer'
import ratingReducer from "./ratingReducer";
import lastIdReducer from "./lastIdReducer";

export default combineReducers({
    form: formReducer,
    lastId: lastIdReducer,
    userId: userIdReducer,
    ratings:ratingReducer,
    recommendations:recommendationReducer,
    movieList:movieListReducer
})