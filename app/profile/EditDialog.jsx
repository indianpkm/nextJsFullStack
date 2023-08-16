import { Box, Button, Dialog, TextField, styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const EditButton = styled(Button)`
  font-weight: 600;
  align-self: center;
  margin: 1rem;
  color: blue;
  width: 40%;
  font-size: 1rem;
  &:hover {
    color: #fff;
  }
`;

const EditDialog = ({
  open,
  setOpen,
  editValue,
  updateData,
  setUpdateData,
}) => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const updateMobileView = () => {
      const isMobileView = window.innerWidth < 900;
      setMobileView(isMobileView);
    };

    updateMobileView();

    window.addEventListener("resize", updateMobileView);

    // Clean up the listener on unmount
    return () => {
      window.removeEventListener("resize", updateMobileView);
    };
  }, []);

  const dialogstyle = {
    height: "auto",
    width: mobileView ? "90%" : "40%",
    maxWidth: "500px",
    maxHeight: "100%",
    overFlow: "hidden",
    padding: "2rem",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editSave = async () => {
    try {
      const dataToUpdate = {
        _id: updateData.id,
        idName: editValue.id,
        value: updateData[editValue.id],
      };
      const response = await axios.put("./api/update", dataToUpdate);
      setOpen(false);
      console.log(response);
    } catch (error) {
      console.log("Login failed", error.message);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: dialogstyle }}
      hideBackdrop={true}
    >
      <TextField
        autoFocus
        margin="dense"
        id={editValue.id}
        value={updateData[editValue.id]}
        label="Name"
        name={editValue.id}
        type="text"
        fullWidth
        onChange={handleChange}
        variant="standard"
      />
      <Box>
        <EditButton
          onClick={() => setOpen(false)}
          variant="contained"
          color="primary"
        >
          Cancel
        </EditButton>
        <EditButton
          onClick={() => editSave()}
          variant="contained"
          color="primary"
        >
          Save
        </EditButton>
      </Box>
    </Dialog>
  );
};

export default EditDialog;
