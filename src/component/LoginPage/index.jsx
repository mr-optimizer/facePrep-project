import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import Button from "@mui/material/Button";
import { useAuth } from "../../context/AuthProvider";

import { ToastContainer, toast } from "react-toastify"; // for creating alerts

const LoginPage = () => {
  const { isLoggedIn, login } = useAuth(); //custom hook

  const navigate = useNavigate();

  const [userInfo, setUserinfo] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = userInfo;

  useEffect(() => {
    if (isLoggedIn) {
      //redirecting to home page if already login
      navigate("/facePrep-project/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleChange = ({ target }) => {
    //updating username and password as entered by user
    const { value, name } = target;
    setUserinfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "foo" && password === "bar") {
      // test data is provided in problem statement
      login();
    } else {
      toast.error("Invalid Id or Password", {
        // giving alert to user about bad credentials
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.login_form}>
        <h1>Login</h1>
        <label className={classes.input_label} htmlFor="userName">
          User Name
        </label>
        <input
          value={userName}
          onChange={handleChange}
          className={classes.inputs}
          name="userName"
          id="userName"
          required
        />
        <label className={classes.input_label} htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={handleChange}
          className={classes.inputs}
          type="password"
          name="password"
          id="password"
          required
        />
        <span>Forgot Password</span>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
