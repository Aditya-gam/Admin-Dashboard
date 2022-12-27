import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/products";
import Customers from "./scenes/customers";
import Transactions from "./scenes/transactions";
import Geography from "./scenes/geography";
import Overview from "./scenes/overview";
import Daily from "./scenes/daily";
import Monthly from "./scenes/monthly";
import Breakdown from "./scenes/breakdown";
import Admin from "./scenes/admin";
import Performance from "./scenes/performance";
import Register from "./scenes/auth/Register";
import Login from "./scenes/auth/Login";
// import jwtDecode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const auth = useSelector((state) => state.auth);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const auth = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const validateToken = () => {
    setLoading(true);
    if (localStorage.token) {
      console.log("Hello");
      dispatch(createAsyncThunk("auth/loginUser", localStorage.token));
    }
    setLoading(false);
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="*"
              element={
                loading ? (
                  <div>Loading...</div>
                ) : auth._id ? (
                  <>
                    <Layout />
                  </>
                ) : (
                  <Navigate
                    to="/login"
                    replace={true}
                    // state={{ from: location.pathname }}
                  />
                )
              }
            >
              {/* <Route element={<Layout />}> */}
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customers />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="geography" element={<Geography />} />
              <Route path="overview" element={<Overview />} />
              <Route path="daily" element={<Daily />} />
              <Route path="monthly" element={<Monthly />} />
              <Route path="breakdown" element={<Breakdown />} />
              <Route path="admin" element={<Admin />} />
              <Route path="performance" element={<Performance />} />
              {/* </Route> */}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
