import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import EditDialog from "../EditDialog";

const Container = styled(Box)(({ theme }) => ({
  gap: "2rem",
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
  margin-bottom: 8px;
`;

const Text = styled(Typography)`
  font-size: 0.8rem;
  overflow: auto;
  height: 80%;
  color: #424242;
`;
const AboutText = styled(Typography)`
  font-size: 0.75rem;
`;

const MiddleDetail = ({ account }) => {
  const { about, _id, name } = account;
  const [open, setOpen] = useState(false);
  const [editValue, setEditValue] = useState({ id: "", value: "" });
  const [updateData, setUpdateData] = useState({
    about: about,
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
      <GroupBox>
        <AboutText>
          <b>About</b>
          <span style={{ color: "blue" }}> {name.split(" ")[0]}</span>
        </AboutText>
        <EditButton onClick={() => handleEditClick("about", updateData.about)}>
          Edit
        </EditButton>
      </GroupBox>
      <Text>{updateData.about}</Text>
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

export default MiddleDetail;
