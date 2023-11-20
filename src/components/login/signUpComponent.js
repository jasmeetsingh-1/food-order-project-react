import React from "react";
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
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const signUpInitial = {
  username: "",
  password: "",
  confirmpassword: "",
  email: "",
  name: "",
};

function SignUpComponent(props) {
  const navigate = useNavigate();
  const signUpFromik = useFormik({
    initialValues: signUpInitial,
    onSubmit: (values) => {
      const formdata = {
        username: values.username,
        pasword: values.password,
        confirmpassword: values.confirmpassword,
        email: values.email,
        name: values.names,
      };
      console.log(formdata);
      signUpFromik.resetForm();
    },
  });
  return (
    <form onSubmit={signUpFromik.handleSubmit}>
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
                maxWidth: "700px",
                backgroundColor: "#282f33",
              }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h4>WELCOME TO</h4>
                <h2 className="fw-bold mb-2 text-uppercase">ReactBites</h2>

                <p className="text-white-50 mb-5">
                  Your favourite BITES are just a minute away! SignUp to get
                  started
                </p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Enter username"
                  name="username"
                  id="username"
                  type="text"
                  size="lg"
                  value={signUpFromik.values.username}
                  onChange={signUpFromik.handleChange}
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
                  value={signUpFromik.values.name}
                  onChange={signUpFromik.handleChange}
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
                  value={signUpFromik.values.email}
                  onChange={signUpFromik.handleChange}
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
                  value={signUpFromik.values.password}
                  onChange={signUpFromik.handleChange}
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
                  value={signUpFromik.values.confirmpassword}
                  onChange={signUpFromik.handleChange}
                  style={{ color: "white" }}
                />

                <MDBBtn
                  outline
                  className="mt-2 mx-2 px-5"
                  color="white"
                  size="lg"
                  type="submit"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  SignUp
                </MDBBtn>

                <div>
                  <p className="mb-0 mt-4">
                    Already have an account?{" "}
                    <span
                      className="text-white-50 fw-bold"
                      style={{ cursor: "pointer" }}
                      onClick={props.clickHandler}
                    >
                      Login here!
                    </span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default SignUpComponent;
