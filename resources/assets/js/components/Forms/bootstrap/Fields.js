import React from 'react'
import eq from 'lodash/eq'
import { Field } from 'redux-form'
import pick from 'lodash/pick'
import capitalize from 'lodash/capitalize'

import FileUploader  from './Inputs/File'

/**
 * Must be binded inside a react render / component
 * @param  {object} fieldConfig configuration of the field that you declared in a react/redux form
 * @param  {string} field       name of the field
 * @return {react component}             return an html that is generated from react
 */


export const renderField = function(fieldConfig, field) {
    const { props: { array }} = this
    return(
        <Field key={field}
            type={fieldConfig.type}
            name={field} config={fieldConfig}
            component={FieldSetter}
            name={fieldConfig.name} {...array} />
    )
}

const textAreaConfig = (type) => {
    if(type == 'textarea') return ''
    return
}


const UseCustomFields = (props) => {
    const { input, type } = props

    const Fields = {
        file: FileUploader
    }

    const FieldType = Fields[type]

    return(<FieldType {...props} />)
}



export const FieldSetter = function(_field) {

    let { meta, input, name, config } = _field
    const { rows, type, custom } = config
    const setClass = textAreaConfig(type)
    const isFail = (meta.error && !meta.pristine) ||
                (meta.submitFailed && meta.pristine)
    if(custom) {
        return <UseCustomFields {..._field}/>
    }
    return (
        <div  className={`form-group ${isFail ? 'has-error' : ''}`}>
          <config.tag
                {...input}
                rows={rows}
                type={type}
                className={`form-input ${setClass}`}
                placeholder={capitalize(config.name)} />
          {meta.touched && meta.error ? <small>{meta.error}</small> : null}
        </div>
    )
}
