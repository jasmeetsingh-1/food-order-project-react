import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

import "./cssFiles/loginComponent.css";
import Header from "../Layout/Header";

function LoginPage() {
  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    name: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    usernameLogin: "",
    passwordLogin: "",
  });

  const toastConfig = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  function signUpFormHandler() {
    if (!/^[a-zA-Z0-9_]+$/.test(signUpFormData.username)) {
      toast.error(
        "Invalid username: Username can only contain letters, numbers, and underscores.",
        toastConfig
      );
      return;
    }
    if (/\s/.test(signUpFormData.password)) {
      toast.error(
        "Invalid password: password cant have whitespaces",
        toastConfig
      );
      return;
    }
    if (signUpFormData.confirmpassword !== signUpFormData.password) {
      toast.error("Password and Confirm password must match", toastConfig);
      return;
    }
    if (signUpFormData.password < 6) {
      toast.error("Password must more then 6 characters", toastConfig);
    }
    if (!/^[a-zA-Z0-9_\s]+$/.test(signUpFormData.name)) {
      toast.error(
        "Invalid name: Name can only contain letters, numbers, underscores, and spaces.",
        toastConfig
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpFormData.email)) {
      toast.error("Invalid Email address", toastConfig);
      return;
    }

    toast.success("Sign Up Successful", toastConfig);
    console.log("SignUp Form:", signUpFormData);
  }

  function loginFormHandler() {
    if (loginFormData.usernameLogin.length === 0) {
      toast.warn("Please enter username", toastConfig);
      return;
    }
    if (loginFormData.passwordLogin.length === 0) {
      toast.warn("Please enter Password", toastConfig);
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(loginFormData.usernameLogin)) {
      toast.error(
        "Invalid username: Username can only contain letters, numbers, and underscores.",
        toastConfig
      );
      return;
    }
    if (/\s/.test(loginFormData.passwordLogin)) {
      toast.error(
        "Invalid password: password cant have whitespaces",
        toastConfig
      );
      return;
    }

    toast.success("Login Successful", toastConfig);
    console.log("Login Form Data:", loginFormData);
  }

  // const navigate = useNavigate();
  const [signup, setSignUp] = useState(false);
  return (
    <>
      <Header />
      {signup ? (
        //signup form
        <MDBContainer
          style={{
            fontFamily: "'Overpass', sans-serif",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="text-white my-5 mx-auto"
                style={{
                  borderRadius: "1rem",
                  maxWidth: "400px",
                  backgroundColor: "#282f33",
                }}
              >
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    signUpFormHandler();
                  }}
                >
                  <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                    <h4>WELCOME TO</h4>
                    <h2 className="fw-bold mb-2 text-uppercase">ReactBites</h2>

                    <p className="text-white-50 mb-5">
                      Login for a seamless experience
                    </p>

                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Enter username"
                      name="username"
                      id="username"
                      type="text"
                      size="lg"
                      value={signUpFormData.username}
                      onChange={(event) => {
                        const usernameValue = event.target.value;
                        setSignUpFormData({
                          ...signUpFormData,
                          username: usernameValue,
                        });
                      }}
                      style={{ color: "white" }}
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Enter name"
                      name="name"
                      id="name"
                      type="text"
                      size="lg"
                      value={signUpFormData.name}
                      onChange={(event) => {
                        const nameValue = event.target.value;
                        setSignUpFormData({
                          ...signUpFormData,
                          name: nameValue,
                        });
                      }}
                      style={{ color: "white" }}
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Enter Email"
                      name="email"
                      id="email"
                      type="email"
                      size="lg"
                      value={signUpFormData.email}
                      onChange={(event) => {
                        const emailValue = event.target.value;
                        setSignUpFormData({
                          ...signUpFormData,
                          email: emailValue,
                        });
                      }}
                      style={{ color: "white" }}
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Password?"
                      id="password"
                      name="password"
                      type="password"
                      size="lg"
                      value={signUpFormData.password}
                      onChange={(event) => {
                        const passwordValue = event.target.value;
                        setSignUpFormData({
                          ...signUpFormData,
                          password: passwordValue,
                        });
                      }}
                      style={{ color: "white" }}
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Confirm Passoword?"
                      id="confirmpassword"
                      name="confirmpassword"
                      type="password"
                      size="lg"
                      value={signUpFormData.confirmpassword}
                      onChange={(event) => {
                        const confirmpasswordValue = event.target.value;
                        setSignUpFormData({
                          ...signUpFormData,
                          confirmpassword: confirmpasswordValue,
                        });
                      }}
                      style={{ color: "white" }}
                    />

                    <MDBBtn
                      outline
                      className="mt-2 mx-2 px-5"
                      color="white"
                      size="lg"
                      type="submit"
                    >
                      SignUp
                    </MDBBtn>

                    <div>
                      <p className="mb-0 mt-4">
                        Already have an account?{" "}
                        <span
                          onClick={() => {
                            setSignUp(false);
                          }}
                          className="text-white-50 fw-bold"
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Login
                        </span>
                      </p>
                    </div>
                  </MDBCardBody>
                </form>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ) : (
        // log in
        <MDBContainer
          style={{
            fontFamily: "'Overpass', sans-serif",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="text-white my-5 mx-auto"
                style={{
                  borderRadius: "1rem",
                  maxWidth: "400px",
                  backgroundColor: "#282f33",
                }}
              >
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    loginFormHandler();
                  }}
                >
                  <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                    <h4>WELCOME TO</h4>
                    <h2 className="fw-bold mb-2 text-uppercase">ReactBites</h2>

                    <p className="text-white-50 mb-5">
                      Login for a seamless experience
                    </p>

                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Username"
                      name="usernameLogin"
                      id="usernameLogin"
                      type="text"
                      size="lg"
                      value={loginFormData.usernameLogin}
                      onChange={(e) => {
                        const usernameLoginValue = e.target.value;
                        setLoginFormData({
                          ...loginFormData,
                          usernameLogin: usernameLoginValue,
                        });
                      }}
                      style={{ color: "white" }}
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Password"
                      id="passswordLogin"
                      name="passswordLogin"
                      type="password"
                      size="lg"
                      value={loginFormData.passwordLogin}
                      onChange={(e) => {
                        const passswordLoginValue = e.target.value;
                        setLoginFormData({
                          ...loginFormData,
                          passwordLogin: passswordLoginValue,
                        });
                      }}
                      style={{ color: "white" }}
                    />

                    <MDBBtn
                      outline
                      className="mt-2 mx-2 px-5"
                      color="white"
                      size="lg"
                      type="submit"
                    >
                      Login
                    </MDBBtn>

                    <div>
                      <p className="mb-0 mt-4">
                        Don't have an account?{" "}
                        <span
                          onClick={() => {
                            setSignUp(true);
                          }}
                          className="text-white-50 fw-bold"
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Sign Up
                        </span>
                      </p>
                    </div>
                  </MDBCardBody>
                </form>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
      <ToastContainer />
    </>
  );
}

export default LoginPage;
