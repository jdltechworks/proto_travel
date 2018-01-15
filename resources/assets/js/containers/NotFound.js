import React, { Component } from 'react'

class NotFound extends Component {
    render() {
        const { location } = this.props
        const { pathname } = location
        return(
            <div className="container grid-xl not-found">Sorry this page {pathname} does not exist</div>
        )
    }
}

export default NotFound
