import React, { Component } from 'react'
import GreenWaveCharts from './GreenWaveCharts'
import datas from './datas'
export class Rs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greenWaveData: datas,
      totleDistance: 900,
      showForwordWave: true,
      showReverseWave: true,
    }
  }
  render() {
    const { greenWaveData, totleDistance, showForwordWave, showReverseWave } = this.state
    return (
      <div>
        {
          datas &&
          <
            GreenWaveCharts
            chartsData={greenWaveData}
            totleDistance={totleDistance}
            showForwordWave={showForwordWave}
            showReverseWave={showReverseWave}
          />
        }
      </div>
    )
  }
}

export default Rs
