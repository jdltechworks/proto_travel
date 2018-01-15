import { render } from 'react-dom'
import React, { Component } from 'react'
import ClientProvider from './provider/Client'

const app = (props, target) => {
  //get initial props / redux state
  render(<ClientProvider {...props} />, document.getElementById(target))
}

window.app = app
