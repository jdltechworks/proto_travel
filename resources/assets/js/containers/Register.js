import React, { Component, PropTypes } from 'react'
import RegisterForm from '../components/Forms/RegisterForm'


class Register extends Component {
    render() {
        const { csrf_token } = this.props
        return (
            <RegisterForm getFormValues={
                (values) => console.log(values)
            } csrf_token={csrf_token} />
        )
    }
}

export default Register
