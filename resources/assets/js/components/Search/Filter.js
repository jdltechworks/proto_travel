import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return(
            <div className="column col-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <ul className="menu">
                  <li className="divider" data-content="MODIFY SEARCH">
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <i className="icon icon-link"></i> Slack
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li className="menu-item">
                    <div className="menu-badge">
                      <label className="label label-primary">2</label>
                    </div>
                    <a href="#">
                      <i className="icon icon-link"></i> Settings
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li className="menu-item">
                      <input className="slider tooltip" onChange={(e) => {

                      }} type="range" min="0" max="100" defaultValue="50" />
                  </li>
                </ul>
            </div>
        )
    }
}

export default Filter
