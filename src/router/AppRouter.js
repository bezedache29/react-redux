import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WithoutHooks from '../pages/WithoutHooks'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={WithoutHooks} />
    </Switch>
  )
}

export default AppRouter