import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import TopDetail from "./TopDetail";
import MiddleDetail from "./MiddleDetail";
import BottomDetail from "./BottomDetail";

const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "80%",
  maxHeight: "20%",
  border: "1px solid #acacac",
  padding: ".3rem 1rem .3rem 1rem",
  borderRadius: "1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "1rem",
    width: "90%",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const TitleText = styled(Typography)`
  font-size: 0.8rem;
  font-weight: 550;
  color: #303030;
`;
const Text = styled(Typography)`
  font-size: 0.8rem;
  width: 80%;
  color: #424242;
`;

const RightProfile = () => {
  return (
    <Container>
      <ImageBox>
        <Box>
          <TitleText>Professional Details</TitleText>
          <Text>
            This are the professional details shown to users in the app.
          </Text>
        </Box>
        <Image src="/twostar.png" width={70} height={70} alt="profile" />
      </ImageBox>
      <TopDetail />
      <MiddleDetail />
      <BottomDetail />
    </Container>
  );
};

export default RightProfile;
