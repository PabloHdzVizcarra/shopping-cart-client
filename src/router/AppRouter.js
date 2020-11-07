import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import App from '../App'
import Spinner from '../components/atoms/spinner/Spinner'
import { AuthStateContext } from '../context/auth-context'
import DashboardRoutesPublic from './DashboardRoutesPublic'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const [loadingToken, setLoadingToken] = React.useState(false)
  const { dataUser, setDataUserFromDB } = useContext(AuthStateContext)

  const token = localStorage.getItem('token')

  React.useEffect(() => {
    if (!token) {
      return
    }

    setLoadingToken(true)

    fetch(`http://127.0.0.1:1820/api/auth/verify-user/${token}`)
      .then(resp => resp.json())
      .then(data => {

        if (data.message) {
          console.log(data.message)
          setLoadingToken(false)
          return
        }
        setDataUserFromDB(data)
        setLoadingToken(false)

      })
      .catch(error => {
        setLoadingToken(false)
        console.log(error)
      })

    //eslint-disable-next-line
  }, [])

  if (loadingToken) {
    return <Spinner />
  }


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
