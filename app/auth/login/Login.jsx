"use client";

import React, { useContext, useState } from "react";
import {
  styled,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { AccountContext } from "@/context/AccountProvider";
import Image from "next/image";

const Title = styled(DialogTitle)`
  font-size: 26px;
  color: #525252;
  text-align: center;
  font-weight: 600;
`;

const RegisterButton = styled(Button)`
  font-weight: 600;
  margin-bottom: 0.5rem;
  align-self: center;
  color: blue;
  width: 60%;
  font-size: 1rem;
  &:hover {
    color: #fff;
  }
`;

const ImageStyle = styled(Image)`
  margin: 0.1rem auto 0.1rem auto;
`;
const DialogContentStyle = styled(DialogContent)`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setAccount, setImage } = useContext(AccountContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      for (const key in data) {
        if (data[key] === "") {
          alert("Please filled value");
          return;
        }
      }
      const response = await axios.post("../api/users/login", data);

      // console.log(response)
      if (response.data.error) {
        alert("Invalid details");
        return;
      }

      if (response.data.data) {
        const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour

        // Store user data and expiration time in sessionStorage
        const userData = {
          data: response.data.data,
          expirationTime: expirationTime,
        };

        sessionStorage.setItem("userData", JSON.stringify(userData));

        setImage(response.data.data.image);
        setAccount(response.data.data);
      }
    } catch (error) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title>Login</Title>
      <ImageStyle src="/logo.png" width={100} height={100} alt="LogoPic" />
      <DialogContentStyle>
        <TextField
          margin="dense"
          id="email"
          label="Email"
          name="email"
          type="email"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          name="password"
          type="password"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContentStyle>
      <ImageStyle src="/login.jpg" width={200} height={200} alt="LoginPic" />
      <RegisterButton
        disabled={loading ? true : false}
        onClick={handleLogin}
        variant="contained"
        color="primary"
      >
        {loading ? "...Loading" : "Login"}
      </RegisterButton>
    </>
  );
};

export default Login;
