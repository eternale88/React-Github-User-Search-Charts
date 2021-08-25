import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';
function AuthWrapper({children}) {
  const { isLoading, error } = useAuth0()

  if(isLoading) {
    return (
      <Wrapper>
        <img src={loadingGif} alt="spinner"/>
      </Wrapper>
    )
  }
  if(error) {
    return (
      <Wrapper>
        <h1>{error}</h1>
      </Wrapper>
    )
  }
  //render children, all of our route, our whole app basically as this wrapper is around our whole app component
  return <React.Fragment>{children}</React.Fragment>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
