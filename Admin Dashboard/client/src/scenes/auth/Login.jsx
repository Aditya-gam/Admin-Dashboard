import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "state/authSlice";
import { StyledForm } from "./StyledForm";
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  // console.log("🚀 ~ file: register.jsx:8 ~ Register ~ auth", auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/dashboard");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // console.log("🚀 ~ file: register.jsx:15 ~ Register ~ user", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <>
      <Navbar />
      <StyledForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>
          {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
        </button>

        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </StyledForm>
    </>
  );
};

export default Login;
