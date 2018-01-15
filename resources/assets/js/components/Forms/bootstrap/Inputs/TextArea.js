import React, { Component } from 'react'
import ReactMde, { ReactMdeCommands } from 'react-mde'
import autosize from 'autosize'
import capitalize from 'lodash/capitalize'
class TextArea extends Component {
    componentDidMount() {
        autosize(document.querySelector('textarea'))
    }
    render() {
        const { input: { onChange, value }, config } = this.props
        return(
            <div className="form-group">
                <ReactMde
                    textAreaProps={{
                        id: 'ta1',
                        placeholder: capitalize(config.name),
                    }}
                    value={value}
                    onChange={({text}) => onChange(text)}
                    commands={ReactMdeCommands}
                />
            </div>
        )
    }
}

export default TextArea
