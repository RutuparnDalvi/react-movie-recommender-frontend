import React from 'react'
import Modal from "../Modal";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import history from "../../history";

class NewUser extends React.Component {

    renderActions(){

        return (
            <React.Fragment>
                <Link to={`/rate/${this.props.userId}/000000000000000000000000`} className="ui button primary">
                    Rate movies
                </Link>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Modal
                title="Welcome to Movie Recommendation App"
                content={`Your User ID will be: ${this.props.userId}`}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }

}

const mapStateToProps = (state)=>{
    return {userId:state.userId}
}

export default connect(mapStateToProps)(NewUser)