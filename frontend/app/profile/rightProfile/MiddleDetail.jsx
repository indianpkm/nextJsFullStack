import { Box, Typography, styled } from "@mui/material";
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
  height: "30%",
  marginTop: "1rem",

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));
const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 30%;
  border: 1px solid #acacac;
  padding: 0.5rem 1rem 0.5rem 1rem;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
const Text = styled(Typography)`
  width: 100%;
  font-size: 0.75rem;
  color: #424242;
`;
const HeadingBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled(Box)`
  display: flex;
`;
const HeadingText = styled(Typography)`
  font-size: 0.75rem;
`;
const TitleText = styled(Typography)`
  font-size: 0.7rem;
  width: 100%;
`;

const MiddleDetail = () => {
  return (
    <TopDetailComponent>
      <GroupBox>
        <HeadingText>
          <b>Experience</b>
        </HeadingText>
        <EditButton>Edit</EditButton>
      </GroupBox>
      <Container>
        <HeadingBox>
          <TitleText>
            <b>7 Years (2014-2021)</b>
          </TitleText>
          <TitleText>
            <b>Full-time</b>
          </TitleText>
        </HeadingBox>
        <TextBox>
          <Text>Oruphones</Text>
          <Text>--Full Stack Developer</Text>
        </TextBox>
      </Container>
      <Container>
        <HeadingBox>
          <TitleText>
            <b>6 months (2014)</b>
          </TitleText>
          <TitleText>
            <b>Intern</b>
          </TitleText>
        </HeadingBox>
        <TextBox>
          <Text>Oruphones</Text>
          <Text>--Full Stack Developer</Text>
        </TextBox>
      </Container>
    </TopDetailComponent>
  );
};

export default MiddleDetail;
