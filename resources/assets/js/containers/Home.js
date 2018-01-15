import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return(
            <div className="home text-center" style={{ marginTop: '5em'}}>
              <img src="/images/under-construction.png" />
              <div className="under-construction">
                <h4>This site is in progress</h4>
              </div>
            </div>
        )
    }
}
