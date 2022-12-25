import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { loginUser } from "state/authSlice";
import { StyledForm } from "./StyledForm";
import { Link, useNavigate } from "react-router-dom";
// import Navbar from "components/Navbar";
import axios from "axios";

const Login = () => {
  // const dispatch = useDispatch();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email: user.email,
          password: user.password,
        }
      );
      localStorage.setItem("token", token.data);
      window.location.href = "/dashboard";
      // return token.data;
    } catch (err) {
      console.log(err.response.data);
      // return rejectWithValue(err.response.data);
    }

    // dispatch(loginUser(user));
  };

  return (
    <div style={{ margin: "auto" }}>
      <StyledForm onSubmit={handleSubmit}>
        <div style={{ margin: "auto" }}>
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

          <p style={{ color: "white" }}>
            Don't have an account? <Link to="/register">Register</Link>{" "}
          </p>

          {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
        </div>
      </StyledForm>
    </div>
  );
};

export default Login;
