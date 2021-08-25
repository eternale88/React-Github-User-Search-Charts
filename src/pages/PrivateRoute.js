import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
//children is <dashboard></dashboard>, ..rest is rest of props, in this case - exact path="/" off of the route component in app.js, this spreads those out into Private route component here in the same place relatively speaking
const PrivateRoute = ({children, ...rest}) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user
  return (
    <Route {...rest} render={() => {
      return isUser ? children : <Redirect to='/login'></Redirect>
    }}> 
    </Route>
  )
  
}
export default PrivateRoute;
