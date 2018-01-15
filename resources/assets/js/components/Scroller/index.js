import React, { Component, Children } from 'react'
import throttle from 'lodash/throttle'

let count = 0

const endOfPage = (base) => {
    const { offsetHeight } = base
    const { pageYOffset, innerHeight } = window

    const currentY = () => {
        return pageYOffset + innerHeight
    }
    const isEndOfPage = () => {
        return currentY() > offsetHeight && count == 0
    }
    return {
        //Literal throttling lol
        useThrottledMethod(url, skip, execute) {
            if(isEndOfPage()) {
                count++
                setTimeout(() => {
                    count = 0

                }, 2000)
                return execute(url, skip)
            }
            return
        }
    }
}

class Scroller extends Component {
    componentDidMount() {
        window.addEventListener(
            'scroll',
            this.scrollObserver.bind(this)
        )
    }
    componentWillUnMount() {
        window.removeEventListener(
            'scroll'
        )
    }
    scrollObserver () {
        endOfPage(this.refs.container)
            .useThrottledMethod(
                this.props.url,
                this.props.take,
                this.props.more
            )
    }
    render() {
        return(
            <div ref="container" className="container grid-xl scoller">
                {this.props.children}
            </div>
        )
    }
}


export default Scroller
