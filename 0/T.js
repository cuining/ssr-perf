import React, { Component } from 'react'

export default class T extends Component {

  handleClick () {
    alert('click')
  }

  render() {
    const { depth, breadth } = this.props

    if (depth <= 0) {
      return <div>......</div>
    }

    let children = []
    for (let i = 0; i < breadth; i++) {
      children.push(
        <T key={i} depth={depth - 1} breadth={breadth} />
      )
    }

    return (
      <div onClick={this.handleClick.bind(this)}>
        {children}
      </div>
    )
  }
}
