import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Header extends React.Component {

    render() {
        const {userId} = this.props

        return (
            <div className="ui secondary pointing menu">
                <Link to={`/rate/${userId}/000000000000000000000000`} className="item">
                    Movie Recommendation App
                </Link>
                <div className="right menu">
                    <Link to={`/rate/${userId}/000000000000000000000000`} className="item">
                        Rate New Movies
                    </Link>
                    <Link to={`/oldlist/${userId}`} className="item">
                        Old Ratings by you
                    </Link>
                    <Link to={`/recommendations/${userId}`} className="item">
                        Get New Recommendations
                    </Link>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        userId: state.userId
    }
}

export default connect(mapStateToProps)(Header)