import React from 'react'
import { AuthProvider } from './context/auth-context'
import AppRouter from './router/AppRouter'

const AppContext = () => {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}

export default AppContext
