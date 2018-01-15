import React, { Component } from 'react'

export default class Search extends Component {
    scrollObserver() {
        const base = document.querySelector('.navbar-container')
        const baseOffset = base.offsetHeight
        this.refs.searchBox.classList.remove('scrolled')
        if(window.pageYOffset >= baseOffset) {
            this.refs.searchBox.classList.add('scrolled')
        }
    }
    componentDidMount () {
        window.addEventListener('scroll', this.scrollObserver.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollObserver.bind(this));
    }
    render() {
        return(
            <div ref="searchBox" className="search-box">
                <div className="container grid-xl">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-input" placeholder="Search" />
                            <button className="btn btn-primary input-group-btn"><i className="icon icon-location"></i></button>
                            <button className="btn btn-primary input-group-btn"><i className="icon icon-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
