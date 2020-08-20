import React, { Component } from 'react'
import SchemeEcharts from './shemeEcharts'
import datas from './datas'
export class Rs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optimizationPlanList: null,
    }
  }
  render() {
    const { optimizationPlanList } = this.state
    return (
      <div>
        {optimizationPlanList && <SchemeEcharts optimizationPlanList={optimizationPlanList} />}
      </div>
    )
  }
}

export default Rs