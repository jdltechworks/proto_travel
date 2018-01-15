import React, { Component } from 'react'
import DropZone from 'react-dropzone'

class FileUploader extends Component {
    handleDrop(accepted, rejected) {
        const { input, push, config } = this.props
        accepted.map(file => push(config.name, file))
    }
    removeImage({index, file}, e) {
        const { input, remove, config } = this.props
        window.URL.revokeObjectURL(file)
        remove(config.name, index)
    }
    render() {
        const { handleDrop, removeImage } = this
        const { input: { value } } = this.props
        return(
            <div className="form-group">
                <div className="columns">
                    <div className="column col-3">
                        <DropZone className="uploader" accept="image/png,image/jpeg,image/jpg" onDrop={handleDrop.bind(this)}>
                            <i className="ion-images"></i>
                        </DropZone>
                    </div>
                    <div className="column col-9">
                        <ul className="thumbnail-list">
                            {value ? value.map((file, key) => {
                                return(
                                    <li key={key}>
                                        <a href="javascript:void(0)"
                                            onClick={removeImage.bind(this, {index: key, file})}
                                            className="thumbnail-delete">
                                            <i className="ion-ios-close-empty"></i>
                                        </a>
                                        <img width="80" height="80" src={file.preview} />
                                    </li>
                                )
                            }) : null }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default FileUploader
