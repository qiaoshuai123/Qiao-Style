import React, { Component } from 'react'
import AreaCharts from './AreaCharts'
import datas from './datas'
export class Rs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roadLister: null,
        }
    }
    render() {
        const { roadLister } = this.state
        return (
            <div>
                {roadLister && <AreaCharts name="delay_time" chartsDatas={roadLister} />}
            </div>
        )
    }
}

export default Rs