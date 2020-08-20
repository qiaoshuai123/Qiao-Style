import React, { Component } from 'react'
import EvaluateEcharts from './evaluateEcharts'
import datas from './datas'
export class Rs extends Component {
  constructor(props) {
    super(props)
    this.state = {
        evaluatingLsit: null,
    }
  }
  render() {
    const { evaluatingLsit } = this.state
    return (
      <div>
        {evaluatingLsit && <EvaluateEcharts evaluatingLsit={evaluatingLsit} />}
      </div>
    )
  }
}

export default Rs