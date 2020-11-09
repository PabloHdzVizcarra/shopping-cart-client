import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { AdminLoginScreen } from '../components/adminLoginScreen'
import LoginScreen from '../components/loginScreen/LoginScreen'
import SignIn from '../components/singScreen/SignIn'

const DashboardRoutesPublic = (props) => {
  const { url } = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route exact path={url} component={LoginScreen} />
        <Route path={`${url}/sign-in`} component={SignIn} />
        <Route path={`${url}/admin`} component={AdminLoginScreen} />

        <Redirect to="/login" />
        
      </Switch>
    </div>
  )
}

export default DashboardRoutesPublic