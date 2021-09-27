import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WithHooks from '../pages/WithHooks'
import WithoutHooks from '../pages/WithoutHooks'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={WithoutHooks} />
      <Route path="/with-hooks" component={WithHooks} />
    </Switch>
  )
}

export default AppRouter