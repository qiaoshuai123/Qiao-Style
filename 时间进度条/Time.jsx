import React, { Component } from 'react'
import OptLineCharts from './OptLineCharts'
export class Rs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      getRoadStatusList: null,
    }
  }
  render() {
    const { getRoadStatusList } = this.state
    return (
      <div className={styles.palnRunBox}>
        <div className={styles.runStage} style={{ width: `${50}px` }}><span className={styles.stageInner} /></div>
        {
          getRoadStatusList && getRoadStatusList.map((item) => {
            const allSm = item.green_time + item.yellow_time
            const yellowNum = (item.yellow_time * 100) / allSm
            const greenNum = (item.green_time * 100) / allSm
            const allNum = (allSm * 100) / nums
            return (
              <div key={item.phase_name + item.phase_img} style={{ width: `${allNum}%` }} className={styles.planRunStage}>
                <span className={styles.stageMsg}>{item.phase_name} &nbsp;{item.green_time}秒</span>
                <div className={styles.greenStage} style={{ width: `${greenNum}%` }} />
                <div className={styles.yellowStage} style={{ width: `${yellowNum}%` }} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Rs