import React from 'react'
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  //AuthWrapper is just to avoid some errors from the auth0, in authwapper we handle isLoading, error, and get children from all of these other elements, as parent authwrapper has access to them, and must render them now, to avoid errors, 'for our private route component to work'
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login  />
          </Route>
          <Route path="*">
            <Error />  
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
      
  )
}

export default App
