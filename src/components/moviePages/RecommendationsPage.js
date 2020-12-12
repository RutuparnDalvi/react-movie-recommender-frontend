import React from 'react'
import {connect} from 'react-redux'
import {userLogin,fetchRecommendations} from '../../actions'

class RecommendationsPage extends React.Component {

    componentDidMount() {
        this.props.userLogin(this.props.match.params.id,`/recommendations/${this.props.match.params.id}`)
        this.props.fetchRecommendations(this.props.match.params.id)
    }

    renderList() {
        return this.props.recommendations.map(recommendation => {
            return (
                <div className="item" key={recommendation._id}>
                    <i className="large middle aligned icon movie"/>
                    <div className="content">
                        <div className="header">{recommendation.title}</div>
                        <div className="description">{recommendation.genres}</div>
                    </div>
                </div>
            )
        })
    }


    render(){
        return (
            <div>
                <h2>10 Movie Recommendations:</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId:state.userId,
        recommendations:Object.values(state.recommendations)
    }
}

export default connect(mapStateToProps,{userLogin,fetchRecommendations})(RecommendationsPage)