import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({
  isAdmin,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        (isAdmin)
          ? (<Component {...props} />)
          : (<Redirect to="/login" />)
      )}
    />
  )
}

AdminRoute.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
}

export default AdminRoute
