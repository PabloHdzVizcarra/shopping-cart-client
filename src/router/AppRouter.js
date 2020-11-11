import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import App from '../App'
import AdminScreen from '../components/adminScreen/AdminScreen'
import Spinner from '../components/atoms/spinner/Spinner'
import { AuthStateContext } from '../context/auth-context'
import AdminRoute from './AdminRoute'
import DashboardRoutesPublic from './DashboardRoutesPublic'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const [loadingToken, setLoadingToken] = React.useState(false);
  const { dataUser, setDataUserFromDB } = useContext(AuthStateContext);

  React.useEffect(() => {
    setLoadingToken(true);

    fetch("api/auth/verify-user")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          setLoadingToken(false);
          return null;
        }
        setDataUserFromDB(data.dataUser);
        setLoadingToken(false);
      })
      .catch((error) => {
        setLoadingToken(false);
        console.log(error.message);
      });
    //eslint-disable-next-line
  }, []);

  if (loadingToken) {
    return <Spinner />;
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

          <AdminRoute
            path="/admin"
            component={AdminScreen}
            isAdmin={dataUser.isAdmin}
          />

          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
