import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

interface RouterQuery {
  key?: string | number
  path: string
  exact?: boolean
  strict?: boolean
  requiresAuth?: boolean
  component: any
}

const renderRoutes = (routes: RouterQuery[], authed?: boolean, authPath: string = '/', extraProps: object = {}, switchProps: object = {}) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route: RouterQuery, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (!route.requiresAuth || authed || route.path === authPath) {
              return <route.component {...props} {...extraProps} route={route} />
            }
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
          }}
        />
      ))}
    </Switch>
  ) : null
}

export default renderRoutes