import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import TopDetail from "./TopDetail";
import MiddleDetail from "./MiddleDetail";
import { AccountContext } from "@/context/AccountProvider";
import BottomDetail from "./BottomDetail";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";

const UploadButton = styled(Typography)`
  background-color: #e4e4e4;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #585757;
`;
const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "space-between",
  width: "80%",
  marginTop: ".5rem",
  [theme.breakpoints.down("md")]: {
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

const LeftProfile = () => {
  const { account, image, setImage } = useContext(AccountContext);

  const handleUpload = async (result) => {
    const storedUserData = JSON.parse(sessionStorage.getItem("userData"));

    if (storedUserData) {
      // Update the image property in userData
      storedUserData.data.image = result?.info?.secure_url;

      // Store the updated userData back in session storage
      sessionStorage.setItem("userData", JSON.stringify(storedUserData));
    }

    setImage(result?.info?.secure_url);
    await axios.put("../api/upload", {
      image: result?.info?.secure_url,
      id: account._id,
    });
  };

  return (
    <Container>
      <ImageBox>
        {image ? (
          <img
            src={image}
            alt="profile"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        ) : (
          <Image src="/avatar.png" width={70} height={70} alt="profile" />
        )}
        <CldUploadButton
          style={{ width: "50%" }}
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset="l5ujh3y5"
        >
          <UploadButton>Upload Photo</UploadButton>
        </CldUploadButton>
      </ImageBox>
      <TopDetail account={account} />
      <MiddleDetail account={account} />
      <BottomDetail account={account} />
    </Container>
  );
};

export default LeftProfile;
