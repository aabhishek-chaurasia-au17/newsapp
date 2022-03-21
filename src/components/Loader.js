import React, { Component } from 'react'
import './loding.css'

export class Loader extends Component {
    
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="loader"></div>
      </div>
    )
  }
}

export default Loader