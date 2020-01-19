import React from 'react'
import { Route } from 'react-router'
import Loadable from '@loadable/component'

// demo
export default [
  <Route
    key="report"
    exact={true}
    path="/report"
    component={Loadable(() => import('@/views/home/index'))}
  />
]
