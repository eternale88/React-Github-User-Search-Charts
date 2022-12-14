import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
//children is <dashboard></dashboard>, ..rest is rest of props, in this case - exact path="/" off of the route component in app.js, this spreads those out into Private route component here in the same place relatively speaking
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user

  if (!isUser) {
    return <Navigate to="/login" />
  }
  return children
}
export default PrivateRoute
