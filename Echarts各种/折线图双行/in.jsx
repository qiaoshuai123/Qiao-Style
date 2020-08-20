import React, { Component } from 'react'
import OptLineCharts from './OptLineCharts'
export class Rs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      getFlowList: null,
    }
  }
  render() {
    const { getFlowList } = this.state
    return (
      <div>
        {getFlowList && <OptLineCharts name="getFlowList" dataList={getFlowList} />}
      </div>
    )
  }
}

export default Rs