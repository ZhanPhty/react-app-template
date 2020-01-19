import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps {
  [prop: string]: any
}

class App extends Component<Props, {}> {
  public render() {
    const { children } = this.props
    return <div className="page-bg-gray">{children}</div>
  }
}

export default App
