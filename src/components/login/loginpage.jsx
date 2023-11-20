import React, { useState } from "react";

import SignUpComponent from "./signUpComponent";
import LoginComponent from "./loginComponent";
import Header from "../Layout/Header";

function LoginPage() {
  const [signup, setSignUp] = useState(false);

  return (
    <>
      <Header />
      {signup && (
        <SignUpComponent
          clickHandler={() => {
            setSignUp(!signup);
          }}
        />
      )}
      {!signup && (
        <LoginComponent
          clickHandler={() => {
            setSignUp(!signup);
          }}
        />
      )}
    </>
  );
}

export default LoginPage;
