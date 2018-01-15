import { reduxForm } from 'redux-form'
import { validator } from './validator'
import { renderField } from './fields'
import React, { Component, Children, cloneElement } from 'react'


/**
 * Core form class
 * @type {Component}
 */
class CoreForm extends Component {
    componentDidMount() {

        const { initialize, csrf_token } = this.props
        initialize({ csrf_token })
    }
    render() {
        const { props } = this
        const { children, handleSubmit } = props
        return (
            <div className="container grid-xl">
                <form onSubmit={handleSubmit((values) => {
                    this.props.getFormValues(values)}
                )} className="columns">
                    {Children.map(children, (child) =>
                        cloneElement(child, { ...props, renderField })
                    )}
                </form>
            </div>
        )
    }
}

/**
 * Component enhancer to add redux form props in your form component
 * @param  {string} name      Form name
 * @param  {FormComponent} FormComponent Form Component
 * @param  {object} model     Form Fields configuration
 * @return {Component}           Component
 */
const createForm = (name, FormComponent, model) => {

    const DecoratedForm = (props) => {

        const clonedProps = {
            ...props,
            fields: model
        }

        return(
            <CoreForm {...clonedProps}>
                <FormComponent />
            </CoreForm>
        )

    }

    return reduxForm({
        form: name,
        validate: validator(model)
    })(DecoratedForm)

}

export default createForm
