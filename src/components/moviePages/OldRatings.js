import React from 'react'
import {connect} from 'react-redux'
import {userLogin,fetchRatings,updateRating} from '../../actions'
import ReactStars from "react-rating-stars-component";

class OldRatings extends React.Component {

    componentDidMount() {
        this.props.userLogin(this.props.match.params.id,`/oldlist/${this.props.match.params.id}`)
        this.props.fetchRatings(this.props.match.params.id)
    }

    componentDidUpdate() {
        this.props.fetchRatings(this.props.match.params.id)
    }

    changeRating = (newRating,movieId,movie) => {
        const rating = {
            rating:newRating,
            movie,
            movieId
        }
        this.props.updateRating(this.props.userId,rating)
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

    renderList() {
        return this.props.ratings.map(rating => {
            return (
                <div className="item" key={rating._id}>
                    <i className="large middle aligned icon movie"/>
                    <div className="content">
                        <div className="header">{rating.movie}</div>
                        <div className="description">{rating.genres}</div>
                    </div>
                    <ReactStars
                        value={this.fetchMovieRating(rating.movieId)}
                        activeColor="#ffd700"
                        onChange={(newRating)=>this.changeRating(newRating,rating.movieId,rating.movie)}
                        count={5}
                        edit={true}
                    />
                </div>
            )
        })
    }

    render(){
        return (
            <div>
                <h2>My Ratings:</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId:state.userId,
        ratings:Object.values(state.ratings)
    }
}

export default connect(mapStateToProps,{userLogin,fetchRatings,updateRating})(OldRatings)