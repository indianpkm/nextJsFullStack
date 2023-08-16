import { Box, Button, List, ListItem, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AccountContext } from "@/context/AccountProvider";

const Container = styled(Box)(({ theme }) => ({
  width: "20%",
  height: "100%",
  backgroundColor: "#fff",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const DashboardStyle = styled(Typography)`
  border: 1px solid #cac8c8;
  width: 55%;
  padding: 5px;
  margin-top: 1rem;
  color: #555353;
  border-radius: 10px;
  font-weight: 550;
  font-size: 1.5rem;
`;

const Text = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListStyle = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const ListItemStyle = styled(ListItem)(({ isSelected }) => ({
  border: isSelected ? "1px solid black" : "none", // Apply border style based on isSelected prop
  color: isSelected ? "#393939" : "#8e8e8e", // Apply text color based on isSelected prop
  borderRadius: "5px",
  fontWeight: "500",
  fontSize: "1.2rem",
  textAlign: "center",
  cursor: "pointer",
}));

const ArrowIcon = styled(ArrowForwardIosIcon)`
  margin-right: 0.4rem;
  font-size: 15px;
  color: #8e8e8e;
`;

const LogoutButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 2rem;
  font-weight: 550;
  color: blue;
  &:hover {
    color: white;
  }
`;

const LeftComponent = ({ connectionOpen, setConnectionOpen }) => {
  const { setAccount } = useContext(AccountContext);

  const handleLogout = () => {
    // Clear session user data
    sessionStorage.removeItem("userData");

    // Reset the account
    setAccount("");
  };

  return (
    <Container>
      <DashboardStyle>Dashboard</DashboardStyle>
      <ListStyle>
        <Text>
          <ArrowIcon />
          <ListItemStyle
            isSelected={!connectionOpen}
            onClick={() => setConnectionOpen(false)}
          >
            My Profile
          </ListItemStyle>
        </Text>
        <Text>
          <ArrowIcon />
          <ListItemStyle
            isSelected={connectionOpen}
            onClick={() => setConnectionOpen(true)}
          >
            My Connections
          </ListItemStyle>
        </Text>
      </ListStyle>
      <LogoutButton
        onClick={() => handleLogout()}
        variant="contained"
        color="primary"
      >
        Logout
      </LogoutButton>
    </Container>
  );
};

export default LeftComponent;
