import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import { registerUser } from "../../slices/authSlice";

import { StyledForm } from "./StyledForm";

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("user:", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <>
      {/* <NavBar /> */}
      <StyledForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>
          {auth.registerStatus === "pending" ? "Submitting" : "Register"}
        </button>
        <p>
          <a href="/login">Already have an acount? Login</a>
        </p>
        {/* <link to="/login">Already Have an account? Login</link> */}
        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
      </StyledForm>
    </>
  );
};

export default Register;
