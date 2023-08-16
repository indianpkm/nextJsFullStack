import { Box, List, ListItem, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import EditDialog from "../EditDialog";

const Container = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  width: "80%",
  height: "20%",
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
`;
const ListStyle = styled(List)`
  display: flex;
  width: 100%;
  overflow: auto;
`;
const SkillText = styled(Box)`
  font-size: 0.75rem;
`;
const ListItemStyle = styled(ListItem)`
  font-size: 0.85rem;
  color: #303030;
`;

const BottomDetail = ({ account }) => {
  const { _id, skills } = account;
  const [open, setOpen] = useState(false);
  const [editValue, setEditValue] = useState({ id: "", value: "" });
  const [updateData, setUpdateData] = useState({
    skills: skills,
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
  const skillsArray =
    typeof updateData.skills === "string"
      ? updateData.skills.trim().split(" ")
      : updateData.skills;

  return (
    <Container>
      <GroupBox>
        <SkillText>
          <b>Skill</b>
        </SkillText>
        <EditButton
          onClick={() => handleEditClick("skills", updateData.skills)}
        >
          Edit
        </EditButton>
      </GroupBox>
      <ListStyle>
        {!open &&
          skillsArray.map((item) => {
            return <ListItemStyle>{item}</ListItemStyle>;
          })}
      </ListStyle>

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

export default BottomDetail;
