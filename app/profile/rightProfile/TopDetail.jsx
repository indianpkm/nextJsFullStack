import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";

const GroupBox = styled(Box)`
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
`;
const EditButton = styled(Typography)`
  background-color: #e4e4e4;
  width: 13%;
  height: 1.3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: #585757;
`;
const TopDetailComponent = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "16%",
  marginTop: "1rem",

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 60%;
  border: 1px solid #acacac;
  padding: 0.5rem 2rem 0.5rem 3rem;
  border-radius: 50px;
`;
const Text = styled(Typography)`
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  color: #424242;
`;
const HeadingText = styled(Typography)`
  font-size: 0.75rem;
`;

const TopDetail = () => {
  return (
    <TopDetailComponent>
      <GroupBox>
        <HeadingText>
          <b>Certifications</b>
        </HeadingText>
        <EditButton>Edit</EditButton>
      </GroupBox>
      <Container>
        <Image src="/star.png" width={40} height={18} alt="profile" />
        <Text>
          Python
          <br />
          Coding Ninjas
        </Text>
      </Container>
    </TopDetailComponent>
  );
};

export default TopDetail;
