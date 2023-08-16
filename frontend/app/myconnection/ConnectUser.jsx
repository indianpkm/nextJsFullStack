import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";

const UserContainer = styled(Box)(({ theme }) => ({
  width: "23%",
  border: "1px solid #acacac",
  padding: "1rem",
  borderRadius: "10px",
  display: "flex",
  margin: "1rem",

  [theme.breakpoints.down("md")]: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const RemoveButton = styled(Typography)`
  background-color: #9f98f3;
  width: 100%;
  height: 2rem;
  border-radius: 0.7rem;
  font-size: 0.7rem;
  padding: 0.4rem;
  font-weight: 550;
  text-align: center;
  cursor: pointer;
`;
const DetailBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Text = styled(Typography)`
  color: #424242;
  font-size: 0.7rem;
  margin-bottom: 2px;
`;
const NameText = styled(Typography)`
  font-size: 0.75rem;
  color: #303030;
  font-weight: 550;
`;

const ConnectUser = ({ user, onConnect, image }) => {
  return (
    <UserContainer>
      <DetailBox>
        <NameText>{user.name}</NameText>
        <Text>
          {user.role} <br />
          {user.company}
        </Text>
        <RemoveButton onClick={() => onConnect(user)}>Connect</RemoveButton>
      </DetailBox>

      {image ? (
        <img
          src={image}
          alt="profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginLeft: "auto",
          }}
        />
      ) : (
        <Image
          style={{ marginLeft: "auto" }}
          src="/avatar.png"
          width={90}
          height={90}
          alt="profile"
        />
      )}
    </UserContainer>
  );
};

export default ConnectUser;
