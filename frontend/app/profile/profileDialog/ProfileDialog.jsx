"use client";

import React from "react";
import { styled, Box } from "@mui/material";
import LeftProfile from "../leftProfile/LeftProfile";
import RightProfile from "../rightProfile/RightProfile";

const DialogContainer = styled(Box)(({ theme }) => ({
  width: "85%",
  height: "75vh",
  borderRadius: "10px",
  backgroundColor: "#fff",
  position: "relative",
  zIndex: 1200,
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  padding: "1rem",
  display: "flex",
  marginTop: "-4rem",
  marginLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    marginTop: "-2.5rem",
  },
}));

const ProfileDialog = () => {
  return (
    <DialogContainer>
      <LeftProfile />
      <RightProfile />
    </DialogContainer>
  );
};

export default ProfileDialog;
