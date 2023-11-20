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
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const initial = {
  username: "",
  password: "",
};

function LoginComponent(props) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initial,
    onSubmit: (values) => {
      const formData = {
        username: values.username,
        password: values.password,
      };
      console.log(formData);
      // Add your form submission logic here
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
                maxWidth: "550px",
                backgroundColor: "#282f33",
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
                  name="username"
                  id="username"
                  type="text"
                  size="lg"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  style={{ color: "white" }}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  size="lg"
                  value={formik.values.password}
                  onChange={formik.handleChange}
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
                  Login
                </MDBBtn>

                <div>
                  <p className="mb-0 mt-4">
                    Don't have an account?{" "}
                    <span
                      className="text-white-50 fw-bold"
                      style={{ cursor: "pointer" }}
                      onClick={props.clickHandler}
                    >
                      Sign Up
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

export default LoginComponent;
