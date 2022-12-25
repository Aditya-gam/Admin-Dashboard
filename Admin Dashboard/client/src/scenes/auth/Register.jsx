import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "state/authSlice";
import { StyledForm } from "./StyledForm";
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";

const Register = () => {
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
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: "",
    role: "",
  });
  // console.log("🚀 ~ file: register.jsx:15 ~ Register ~ user", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <>
      <Navbar />

      <StyledForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="state"
          onChange={(e) => setUser({ ...user, state: e.target.value })}
        />
        <input
          type="text"
          placeholder="country"
          onChange={(e) => setUser({ ...user, country: e.target.value })}
        />
        <input
          type="text"
          placeholder="occupation"
          onChange={(e) => setUser({ ...user, occupation: e.target.value })}
        />
        <input
          type="tel"
          placeholder="phone number"
          onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
        />
        <label>
          Role:
          <select
            id="role"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="user" selected>
              User
            </option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </label>
        <button>
          {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
        </button>

        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
      </StyledForm>
    </>
  );
};

export default Register;
