import React from 'react'
import ReactStars from "react-rating-stars-component";
import {connect} from 'react-redux'
import {userLogin,lastIdCapture,fetchMovies,fetchRatings,createRating} from '../../actions'


class RatingPage extends React.Component {


    componentDidMount() {
        this.props.userLogin(this.props.match.params.id,`/rate/${this.props.match.params.id}/${this.props.lastId}`)
        this.props.fetchRatings(this.props.match.params.id)
        this.props.fetchMovies(this.props.match.params.id)
    }

    componentDidUpdate() {
        if(this.props.movieList.length !== 0){
            this.props.lastIdCapture(this.props.movieList)
        }
    }

    changeRating = (newRating,movieId,movie) => {
        const rating = {
            rating:newRating,
            movie,
            movieId
        }
        this.props.createRating(this.props.userId,rating)
    }

    fetchMovieRating = (movieId) => {
        const movie = this.props.ratings.find((movie)=>{
            return movie.movieId === movieId
        })
        if(!movie){
            return 0
        }
        return movie.rating
    }

    toEdit=(movie)=>{
        return this.fetchMovieRating(movie.movieId)===0?true:false
    }

    renderList() {
        return this.props.movieList.map(movie => {

            return (
                <div className="item" key={movie._id}>
                    <i className="large middle aligned tv icon"/>
                    <div className="content">
                        <div className="header">{movie.title}</div>
                        <div className="description">{movie.genres}</div>
                    </div>
                    <ReactStars
                        value={this.fetchMovieRating(movie.movieId)}
                        activeColor="#ffd700"
                        onChange={(newRating)=>this.changeRating(newRating,movie.movieId,movie.title)}
                        count={5}
                        edit={this.toEdit(movie)}
                    />
                </div>
            )
        })
    }

    nextPage = ()=> {
        this.props.lastIdCapture(this.props.movieList)
        this.props.fetchMovies(this.props.userId,this.props.lastId)
    }

    render(){

        return (
            <div>
                <h2>Movie List</h2>
                <div className="ui celled list">{this.renderList()}</div>
                <button className="ui button negative" onClick={this.nextPage}>Next Page</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId:state.userId,
        movieList:Object.values(state.movieList),
        ratings:Object.values(state.ratings),
        lastId:state.lastId
    }
}

export default connect(mapStateToProps,{userLogin,lastIdCapture,fetchMovies,fetchRatings,createRating})(RatingPage)