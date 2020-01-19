import React from 'react'
import { Link } from 'react-router-dom'

export default class EnvironHtml extends React.Component {
  public render() {
    console.log(23)
    const ract = this.props
    console.log(ract)
    return (
      <div>
        <p>测试哈哈3哈哈323</p>
        <Link to="/home">跳转---》</Link>
      </div>
    )
  }
}
