import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import App from '../App'
import { AuthStateContext } from '../context/auth-context'
import DashboardRoutesPublic from './DashboardRoutesPublic'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const { dataUser } = useContext(AuthStateContext)
  console.log(dataUser)

  return (
    <Router>
        <div>
          <Switch>
            <PublicRoute
              path="/login"
              component={DashboardRoutesPublic}
              isAuthenticated={dataUser.isAuthenticated}
            />

            <PrivateRoute
              exact
              path="/"
              component={App}
              isAuthenticated={dataUser.isAuthenticated}
            />
  
            <Redirect to="/login"/>
          </Switch>
        </div>
    </Router>
  )
}

export default AppRouter
