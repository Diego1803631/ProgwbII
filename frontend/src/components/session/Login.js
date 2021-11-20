import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "../../hooks/react-auth0-spa";

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  // console.log(loginWithRedirect, typeof loginWithRedirect);
  return (
    <>
      {isAuthenticated ? (
        <p>Logged</p>
      ) : (
        <>
          <h3>Not logged</h3>
          <Button
            onClick={() =>
              loginWithRedirect({
                mode: "signUp",
              })
            }
          >
            Login
          </Button>
        </>
      )}
    </>
  );
};

export default Login;
