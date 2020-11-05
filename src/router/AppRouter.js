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
  const { dataUser, setDataUserFromDB } = useContext(AuthStateContext)

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return
    setDataUserFromDB({
      dataUser: {
        username: "thiago",
        email: "test@tes.com"
      },
      isAuthenticated: true

    })

    fetch(`http://127.0.0.1:1820/api/auth/verify-user/${token}`)
      .then(resp => resp.json())
      .then(data => {
        setDataUserFromDB(data)
      })
      .catch(error => {
        console.log(error)
      })

    console.log(token)
  }, [])


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
