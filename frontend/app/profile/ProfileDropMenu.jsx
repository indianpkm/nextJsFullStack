import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { AccountContext } from "@/context/AccountProvider";

const LogoutButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 2rem;
  font-weight: 550;
  color: blue;
  &:hover {
    color: white;
  }
`;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Container = styled(Box)`
  border: 1px solid #cecccc;
  width: 22%;
  border-radius: 10px;
  margin-right: 2rem;
`;
const ProfleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  gap: ".8rem",
  [theme.breakpoints.down("md")]: {
    gap: "2px",
    width: "80%",
  },
}));

const ButtonStyle = styled(Button)`
  width: 100%;
  font-style: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-transform: none;
  margin-left: auto;
  margin-right: auto;
  color: #424242;
  &:hover {
    color: #fff;
  }
`;
const WelcomeText = styled(Typography)`
  font-size: 0.7rem;
  text-align: left;
`;
const NameText = styled(Typography)`
  font-size: 0.9rem;
  text-align: left;
`;
const ProfileTextBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function ProfileDropMenu({ setConnectionOpen }) {
  const { setAccount, account, image } = React.useContext(AccountContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    // Clear session user data
    sessionStorage.removeItem("userData");

    // Reset the account
    setAccount(null);
  };

  const handleProfileClick = () => {
    setConnectionOpen(false);
    setAnchorEl(false);
  };

  const handleConnectionClick = () => {
    setConnectionOpen(true);
    setAnchorEl(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <ButtonStyle
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <ProfleContainer>
          {image ? (
            <img
              src={image}
              alt="profile"
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
            />
          ) : (
            <Image src="/avatar.png" width={30} height={30} alt="profile" />
          )}
          <ProfileTextBox>
            <WelcomeText>Welcome back,</WelcomeText>
            <NameText>
              <b>Vishnu Swaroop</b>
            </NameText>
          </ProfileTextBox>
        </ProfleContainer>
      </ButtonStyle>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleProfileClick()} disableRipple>
          Profile
        </MenuItem>
        <MenuItem onClick={() => handleConnectionClick()} disableRipple>
          My Connections
        </MenuItem>
        <MenuItem>
          <LogoutButton
            onClick={() => handleLogout()}
            variant="contained"
            color="primary"
          >
            Logout
          </LogoutButton>
        </MenuItem>
      </StyledMenu>
    </Container>
  );
}
