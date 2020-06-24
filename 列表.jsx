import React from 'react'
import { Select, Pagination } from 'antd'
import styles from './Mounting.scss'

class Mounting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => [

  ]
  render() {
    const { Option } = Select
    return (
      <div className={styles.mountingWrapper}>
        <div className={styles.mountingSearch}>
          <div className={styles.keywords}>关键词:</div>
          <div>
            <Select defaultValue={0}>
              <Option key={0} value={0}>0</Option>
              <Option key={1} value={1}>1</Option>
            </Select>
          </div>
          <div className={styles.searchIconBox}>
            <span>查询</span>
            <span className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.mountingManage}>
          <div className={styles.mountingTable}>
            <div className={styles.mountingThead}>
              <div className={styles.mountingTh}>安装点名称</div>
              <div className={styles.mountingTh}>所属高速路</div>
              <div className={styles.mountingTh}>桩号</div>
              <div className={styles.mountingTh}>经度</div>
              <div className={styles.mountingTh}>纬度</div>
              <div className={styles.mountingTh}>描述</div>
              <div className={styles.mountingTh}>操作</div>
            </div>
            <div className={styles.mountingTbody}>
              <div className={styles.mountingTr}>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>
                  <span className={styles.deviceMsg}>修改</span>
                  <span className={styles.deviceMsg}>删除</span>
                </div>
              </div>
              <div className={styles.mountingTr}>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>*************</div>
                <div className={styles.mountingTd}>
                  <span className={styles.deviceMsg}>修改</span>
                  <span className={styles.deviceMsg}>删除</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paginationBox}>
          <Pagination showQuickJumper defaultCurrent={2} total={500} />
        </div>
      </div>
    )
  }
}

export default Mounting