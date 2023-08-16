import { Box, Typography, styled } from "@mui/material";
import React from "react";

const GroupBox = styled(Box)`
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 5px;
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
  height: "27%",
  marginBottom: "8px",

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #acacac;
  padding: 0.8rem;
  flex-direction: column;
  border-radius: 10px;
  gap: 0.4rem;
`;
const Text = styled(Typography)`
  width: 100%;
  font-size: 0.75rem;
  overflow: auto;
  color: #424242;
`;
const HeadingBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
const HeadingText = styled(Typography)`
  font-size: 0.75rem;
`;
const TitleText = styled(Typography)`
  font-size: 0.7rem;
  justify-content: space-between;
  padding-right: 2rem;
`;
const CollegeName = styled(Typography)`
  color: blue;
  font-weight: 550;
  font-size: 0.75rem;
`;

const BottomDetail = () => {
  return (
    <TopDetailComponent>
      <GroupBox>
        <HeadingText>
          <b>Education</b>
        </HeadingText>
        <EditButton>Edit</EditButton>
      </GroupBox>
      <Container>
        <CollegeName>IIT HYDERABAD</CollegeName>
        <HeadingBox>
          <TitleText>
            <b>2010-2024</b>
          </TitleText>
          <TitleText>
            <b>Btech</b>
          </TitleText>
        </HeadingBox>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ipsam totam in, ut quo magni dolores animi numquam, perferendis rem
          facilis eos eligendi est sit qui corporis minima odio necessitatibus!
        </Text>
      </Container>
    </TopDetailComponent>
  );
};

export default BottomDetail;
