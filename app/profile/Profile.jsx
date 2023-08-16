"use client";

import React, { useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import ProfileDialog from "./profileDialog/ProfileDialog";
import LeftComponent from "./leftComponent/LeftComponent";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ProfileDropMenu from "./ProfileDropMenu";
import MyConnection from "../myconnection/MyConnection";
import MenuIcon from "@mui/icons-material/Menu";

const Component = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
}));

const RightComponent = styled(Box)`
  flex: 80%;
  height: 100%;
  background-color: #f9f9f9;
`;
const Header = styled(Box)(({ theme }) => ({
  height: "150px",
  width: "90%",
  backgroundColor: "#1e2875",
  borderRadius: "10px",
  marginTop: "1rem",
  padding: "1rem",

  [theme.breakpoints.down("md")]: {
    height: "100px",
    width: "95%",
    marginTop: "0.5rem",
    padding: "0.8rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const TopHeader = styled(Box)`
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  border-bottom: 1px solid #d5d5d5;
`;

const IconStyle = styled(NotificationsNoneOutlinedIcon)`
  margin-left: auto;
  margin-right: 1rem;
  font-size: 2rem;
  color: #646464;
`;
const ProfileText = styled(Typography)`
  color: #fff;
`;

const ErrorBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const MenuIconStyle = styled(MenuIcon)(({ theme }) => ({
  marginRight: "auto",
  display: "none",
  marginLeft: "1rem",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Profile = () => {
  const [connectionOpen, setConnectionOpen] = useState(false);
  return (
    <Component>
      <LeftComponent
        connectionOpen={connectionOpen}
        setConnectionOpen={setConnectionOpen}
      />
      <RightComponent>
        <TopHeader>
          <MenuIconStyle />
          <IconStyle />
          <ProfileDropMenu setConnectionOpen={setConnectionOpen} />
        </TopHeader>
        {connectionOpen ? (
          <MyConnection />
        ) : (
          <>
            <Header>
              <ProfileText>Profile</ProfileText>
            </Header>
            <ProfileDialog />
          </>
        )}
      </RightComponent>
    </Component>
  );
};

export default Profile;
