import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import EditDialog from "../EditDialog";

const Container = styled(Box)(({ theme }) => ({
  margin: "1rem",
  width: "80%",
  height: "30%",
  border: "1px solid #acacac",
  padding: "0.9rem",
  borderRadius: "10px",

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

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
  cursor: pointer;
`;
const GroupBox = styled(Box)`
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;
const TitleText = styled(Typography)`
  color: #969696;
  font-size: 0.7rem;
  margin-bottom: 2px;
`;
const ValueText = styled(Typography)`
  font-size: 0.75rem;
  color: #303030;
`;

const TopDetail = ({ account }) => {
  const { name, email, number, _id } = account;
  const [open, setOpen] = useState(false);
  const [editValue, setEditValue] = useState({ id: "", value: "" });
  const [updateData, setUpdateData] = useState({
    name: name, // Initialize with an empty string or appropriate initial value
    email: email,
    number: number,
    id: _id,
  });

  const handleEditClick = (id, value) => {
    setEditValue({ id, value });
    setUpdateData({
      ...updateData,
      [id]: value,
    });
    setOpen(true);
  };

  return (
    <Container>
      <TitleText>Your Name</TitleText>
      <GroupBox>
        <ValueText>{updateData.name}</ValueText>
        <EditButton onClick={() => handleEditClick("name", updateData.name)}>
          Edit
        </EditButton>
      </GroupBox>
      <TitleText>Email</TitleText>
      <GroupBox>
        <ValueText>{updateData.email}</ValueText>
        <EditButton onClick={() => handleEditClick("email", updateData.email)}>
          Edit
        </EditButton>
      </GroupBox>
      <TitleText>Phone Number</TitleText>
      <GroupBox>
        <ValueText>+91{updateData.number}</ValueText>
        <EditButton
          onClick={() => handleEditClick("number", updateData.number)}
        >
          Edit
        </EditButton>
      </GroupBox>
      <EditDialog
        open={open}
        setOpen={setOpen}
        editValue={editValue}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
    </Container>
  );
};

export default TopDetail;
