import React, { useState, useEffect } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ResetPassword from "./ResetPassword";

const Auth = (props) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const onSignUpForm = () => {
    setIsSignIn(false);
  };

  useEffect(() => {
    setIsSignIn(true);
  }, []);

  return (
    <div>
      {isSignIn ? (
        <SignInForm show={props.show} handleClose={props.handleClose} onSignUpForm={onSignUpForm} />
      ) : (
        <SignUpForm show={props.show} handleClose={props.handleClose} />
      )}
      {/* <ResetPassword show={props.show} handleClose={props.handleClose} /> */}
    </div>
  );
};
export default Auth;
