import { Box, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import ConnectedUser from "./ConnectedUser";
import ConnectUser from "./ConnectUser";
import { AccountContext } from "@/context/AccountProvider";

const ConnectionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88%;
`;

const Header = styled(Box)`
  height: 70px;
  width: 90%;
  background-color: #1e2875;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem;
`;
const ConnectionText = styled(Typography)`
  color: #fff;
  font-size: 1.3rem;
`;
const Text = styled(Typography)`
  margin: 1rem;
  margin-top: 4rem;
  font-size: 1.2rem;
  color: #303030;
`;

const MyConnectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ConnectUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "1rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const initialUnconnectedUsers = [
  {
    id: 1,
    name: "Vishnu Swaroop",
    role: "Full Stack Developer",
    company: "@Oruphones",
  },
  {
    id: 2,
    name: "Vishnu Swaroop",
    role: "Full Stack Developer",
    company: "@Oruphones",
  },
  {
    id: 3,
    name: "Vishnu Swaroop",
    role: "Full Stack Developer",
    company: "@Oruphones",
  },
];

const MyConnection = () => {
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [unconnectedUsers, setUnconnectedUsers] = useState(
    initialUnconnectedUsers
  );
  const { image } = useContext(AccountContext);

  const handleConnect = (user) => {
    setConnectedUsers([...connectedUsers, user]);
    setUnconnectedUsers(unconnectedUsers.filter((u) => u !== user));
  };

  const handleDisconnect = (user) => {
    setUnconnectedUsers([...unconnectedUsers, user]);
    setConnectedUsers(connectedUsers.filter((u) => u !== user));
  };

  return (
    <ConnectionContainer>
      <Header>
        <ConnectionText>My Connections</ConnectionText>
      </Header>
      <MyConnectionBox style={{ display: "flex" }}>
        {connectedUsers.map((user, index) => (
          <ConnectedUser
            key={index}
            user={user}
            image={image}
            onRemove={() => handleDisconnect(user)}
          />
        ))}
      </MyConnectionBox>
      <Text>People you can also connect</Text>
      <ConnectUserBox>
        {unconnectedUsers.map((user, index) => (
          <ConnectUser
            key={index}
            user={user}
            image={image}
            onConnect={() => handleConnect(user)}
          />
        ))}
      </ConnectUserBox>
    </ConnectionContainer>
  );
};

export default MyConnection;
