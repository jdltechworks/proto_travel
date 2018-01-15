import React, { cloneElement, Component, Children } from 'react'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import Navigation from '../components/Navigation'

class App extends Component {
    componentDidMount() {
    }
    render() {
        const { props } = this
        const { actions } = props
        const noform = _.omit(props, 'form')
        return(
            <div className="app-container">
              <Navigation {...props} />
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { ...noform, actions })
                })}
            </div>
        )
    }
}


export default connect(state => state)(App)
