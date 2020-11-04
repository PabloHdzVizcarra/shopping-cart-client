import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import App from '../App'
import { AuthProvider } from '../context/auth-context'
import DashboardRoutesPublic from './DashboardRoutesPublic'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const user = false

  return (
    <Router>
      <AuthProvider>
        <div>
          <Switch>
            <PublicRoute
              path="/login"
              component={DashboardRoutesPublic}
              isAuthenticated={user}
            />

            <PrivateRoute
              exact
              path="/"
              component={App}
              isAuthenticated={user}
            />
  

            <Redirect to="/login"/>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default AppRouter
