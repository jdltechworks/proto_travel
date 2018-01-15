import React, { Component } from 'react'
import createForm from './bootstrap'
import model from './models/Login'
import map from 'lodash/map'


class LoginForm extends Component {
    render() {
        const { props } = this
        const { renderField, fields } = this.props
        return(
            <div className="column col-4 col-4-ml-auto col-mr-auto col-ml-auto">
                <div className="panel form-product">
                    <div className="panel-header text-center">
                        <i className="icon icon-3x icon-people"></i>
                        <div className="panel-title h5 mt-10">SignIn</div>
                    </div>
                    <div className="panel-body">
                        {map(fields, renderField.bind(this))}
                    </div>
                    <div className="panel-footer text-right">
                        <div className="text-right">
                            <button className="btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createForm('login-form', LoginForm, model)
