import React from 'react'
import echarts from 'echarts'

class TimeCharts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }
  componentWillReceiveProps = (nextProps) => {
    // console.log(nextProps)
    const myCharts = echarts.init(this.chartsBox)
    this.renderCharts(myCharts, '', this.props.datas)
  }
  componentDidMount = () => {
    const myCharts = echarts.init(this.chartsBox)
    this.renderCharts(myCharts, '', this.props.datas)
  }
  renderCharts = (myCharts, title, datas) => {
    if (!datas) datas = 0
    const options = {
      title: {
        show: false,
        text: title,
        x: 'center',
        bottom: '20',
        textStyle: {
          color: '#fff',
          fontSize: 10,
          align: 'right',
        }
      },
      tooltip : {
        position: 'left',
        formatter: "正向协调速度" + "<br/>{c} {b}"
    },
      series: [{
        name: '',
        textStyle: {
          fontSize: '10px',
          color: '#fff'
        },
        type: 'gauge',
        //仪表盘详情，用于显示数据。
        // 刻度
        splitNumber: 10,
        min: 0,
        max: 100,
        axisLine: { // 坐标轴线
          lineStyle: { // 属性lineStyle控制线条样式
            color: [
              [0.2, '#6F962B'],
              [0.4, '#A1EC20'],
              [0.6, '#EDED36'],
              [0.8, '#F1CD16'],
              [1.0, '#F13F16'],

            ],
            width: 3
          }
        },
        axisLabel: {      // 刻度标签。
          show: false,        // 是否显示标签,默认 true。
        },
        axisTick: { // 坐标轴小标记
          show: false, // 属性show控制显示与否，默认不显示
          splitNumber: 5, // 每份split细分多少段
          length: 15, // 属性length控制线长
          lineStyle: { // 属性lineStyle控制线条样式
            color: '#eee',
            width: 1,
            type: 'solid'
          }
        },
        splitLine: { // 分隔线
          length: 5, // 属性length控制线长
          lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer: {
          // width: 5
        },
        detail: {
          show: false,
          offsetCenter: [0, '50%'],
          textStyle: {
            fontSize: 16,
            color: '#6F962B',
          }
        },
        data: [{value: datas, name: ''}]
      }]
    };
    myCharts.setOption(options);
  }
  render() {
    return (
      <div style={{ width: '60px', height: '60px' }} ref={(input) => { this.chartsBox = input }}>123</div>
    )
  }
}

export default TimeCharts
