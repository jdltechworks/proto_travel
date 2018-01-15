import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import LoginForm from '../components/Forms/LoginForm'

class Login extends Component {
    render() {
        const { csrf_token } = this.props
        return (
            <LoginForm
                csrf_token={csrf_token}
                getFormValues={(values) => {
                    console.log(values)
                }} />
        )
    }
}


export default Login
