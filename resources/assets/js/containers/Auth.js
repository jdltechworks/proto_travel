import React, { cloneElement, Component, Children } from 'react'
import { Link } from 'react-router'

class Auth extends Component {
    render() {
        return Children.only(this.props.children)
    }
}

export default Auth
