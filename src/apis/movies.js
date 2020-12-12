import axios from 'axios'

export default axios.create({
    baseURL: 'https://movie-recommender-app-iitb.herokuapp.com/'
})