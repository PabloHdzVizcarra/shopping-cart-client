import React from 'react'

export const AuthStateContext = React.createContext()

function AuthProvider({ children }) {
  const [dataUser, setDataUser] = React.useState({
    isAuthenticated: false,
    isAdmin: false,
    data: {
      username: '',
      email: '',
    }
  })

  function setDataUserFromDB(data) {
    setDataUser({
      isAuthenticated: true,
      isAdmin: false,
      data: {
        username: data.username,
        email: data.email,
        id: data.id
      }
    })
  }

  function setAdminUser(userData) {
    const { username, id, isAdmin } = userData
    setDataUser({
      isAuthenticated: false,
      isAdmin,
      data: {
        username,
        id,
        email: 'soporte@help.com'

      }
    })
  }

  return (
    <AuthStateContext.Provider value={{
      dataUser,
      setDataUserFromDB,
      setAdminUser
    }}>
        {children}
    </AuthStateContext.Provider>
  )
}

function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useArticlesContext must be used within a ArticlesProvider')
  }

  return context
}

export {
  AuthProvider,
  useAuthState,
}