import movies from '../apis/movies'
import history from "../history";

export const lastIdCapture = (movies) => {

    const last_id = movies[movies.length-1]._id

    return {
        type:'LAST_ID',
        payload:last_id
    }
}

export const userCounter = () => async (dispatch) => {
    const response = await movies.get('/user/count/new')
    dispatch({type:'USER_SIGNUP',payload:response.data})
    history.push('/login/newuser')

}

export const userLogin = (userId,path) => async (dispatch) => {
    const response = await movies.get('/user/count')
    if(response.data.count>userId){
        dispatch({type:'USER_LOGIN',payload:userId})
        history.push(path)
    } else{
        dispatch({type:'USER_LOGIN',payload:null})
        alert('User ID not found.Please enter a valid User ID')
    }

}

export const fetchMovies = (userId,lastId='000000000000000000000000')=> async(dispatch)=> {
    const response = await movies.get(`/movies/${userId}/${lastId}`)

    if(response.data.length ===0){
        history.push(`/movies/${userId}/000000000000000000000000`)
        return
    }
    dispatch({type:'FETCH_MOVIES',payload:response.data})
}

//rating object must contain the movie name, _id

export const createRating = (userId,rating)=> async(dispatch)=> {
    const response = await movies.post(`/ratings/${userId}`,rating)
    dispatch({type:'CREATE_RATING',payload:response.data})

    //Lock the rated movie, or at least feed the value into the rating stars
}

//rating object must contain the movie name, _id

export const updateRating = (userId,rating)=> async(dispatch)=> {
    const response = await movies.patch(`/ratings/${userId}`,rating)
    dispatch({type:'EDIT_RATING',payload:response.data})

    //Lock the rated movie, or at least feed the value into the rating stars
}

export const fetchRatings = (userId)=> async(dispatch)=> {
    const response = await movies.get(`/ratings/${userId}`)
    dispatch({type:'FETCH_RATINGS',payload:response.data})
}

export const fetchRecommendations = (userId)=> async(dispatch)=> {
    const response = await movies.get(`/recommendations/${userId}`)
    dispatch({type:'FETCH_RECOMMENDATIONS',payload:response.data})
}





