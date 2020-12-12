import React from 'react'
import {Field,reduxForm} from 'redux-form'
import {userCounter,userLogin} from '../../actions'
import {connect} from 'react-redux'


class LoginPage extends React.Component {

    renderError ({error,touched}) {
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input,meta,label}) => {

        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {

        this.props.userLogin(formValues.userId,`/rate/${formValues.userId}/000000000000000000000000`)
    }

    onClick = ()=>{
        this.props.userCounter()
    }

    render() {

        return (
            <div>
                <img className="ui image " src="/images/1517845731.jpg"/>
                <h1 className="ui header">
                        <div className="content">
                            Movie Recommendation App
                        </div>
                </h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="userId" component={this.renderInput} label="Enter UserId"/>
                    <button className="ui button primary">Submit</button>
                </form>
                <br/>
                <button className="ui button negative" onClick={this.onClick}>New User</button>
            </div>
        )
    }
}

const validate = (formValues) => {

    const errors = {}

    if(!formValues.userId){
        errors.title = 'You must enter a title'
    }

    return errors
}

const mapStateToProps = (state)=> {
    return {userId:state.userId}
}

const wrappedLoginForm = reduxForm({
    form:'loginForm',
    validate:validate
})(LoginPage)

export default connect(mapStateToProps,{userCounter,userLogin})(wrappedLoginForm)

