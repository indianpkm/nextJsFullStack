"use client";

import Register from "./auth/login/Register";
import { Box, Typography, styled } from "@mui/material";
import Profile from "./profile/Profile";
import { useContext, useEffect } from "react";
import { AccountContext } from "@/context/AccountProvider";

const Header = styled(Box)`
  height: 150px;
  width: 100%;
  margin-bottom: auto;
  background-color: #1e2875;
  border-radius: 10px;
  padding: 1rem;
`;
const WelcomeText = styled(Typography)`
  color: #fff;
  margin: 2rem;
  font-size: 2rem;
`;
const Main = styled(Box)(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
}));

export default function Home() {
  const { account, setAccount, setImage } = useContext(AccountContext);

  useEffect(() => {
    const storedUserData = JSON.parse(sessionStorage.getItem("userData"));

    if (storedUserData) {
      setAccount(storedUserData.data);
      setImage(storedUserData.data.image);
    }
  }, [setAccount, setImage]);

  return (
    <Main>
      {account ? (
        <Profile />
      ) : (
        <>
          <Header>
            <WelcomeText>Welcome</WelcomeText>
          </Header>
          <Register />
        </>
      )}
    </Main>
  );
}
