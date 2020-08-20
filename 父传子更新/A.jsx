import React, { Component } from 'react'

class A extends Component {
  constructor(props) {
    super(props)
    const { das } = this.props
    console.log(das, 'ziji')
    this.state = {
      das,
    }
  }
  componentDidUpdate(nextProps, nextState) {
    console.log(nextProps.das, this.props.das, 'sdsdsd')
    if (nextProps.das !== this.props.das) {
      this.setState({
        das: this.props.das,
      })
    }
  }
  render() {
    const { das } = this.state
    return (
      <div>
        13{das}
      </div>
    )
  }
}

export default A
