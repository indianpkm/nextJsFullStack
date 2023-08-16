"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  styled,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Select,
  MenuItem,
  useTheme,
  InputLabel,
  OutlinedInput,
  FormControl,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import Login from "./Login";

const Title = styled(DialogTitle)`
  font-size: 26px;
  color: #525252;
  text-align: center;
  font-weight: 600;
`;

function getStyles(skill, personSkill, theme) {
  return {
    fontWeight:
      personSkill.indexOf(skill) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MenuProps = {
  PaperProps: {
    style: {
      width: 400,
      marginTop: 20,
    },
  },
};

const skills = [
  "Java",
  "JavaScript",
  "React",
  "Angular",
  "Node.js",
  "AWS",
  "HTML",
  "CSS",
];

const RegisterButton = styled(Button)`
  font-weight: 600;
  margin-bottom: 0.5rem;
  align-self: center;
  color: blue;
  width: 60%;
  font-size: 1rem;
  &:hover {
    color: #fff;
  }
`;

const Text = styled(Typography)`
  color: blue;
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
`;

const Container = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
`;

const Register = () => {
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    skills: [skills[0]],
    experience: "",
    about: "",
    password: "",
    Cpassword: "",
  });
  const [personSkill, setPersonSkill] = useState([]);
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
    height: "85%",
    width: mobileView ? "85%" : "60%",
    maxWidth: "500px",
    maxHeight: "100%",
    overFlow: "hidden",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (name === "skills") {
      setPersonSkill(typeof value === "string" ? value.split(",") : value);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);

      for (const key in data) {
        if (data[key] === "") {
          alert("Please fill in all the fields.");
          return;
        }
      }

      if (data.password === data.Cpassword) {
        const response = await axios.post("../api/users/register", data);
        // console.log(response);
        if (response.data.error) {
          alert(response.data.error);
          return;
        } else if (response.status === 200) {
          alert("Registration Successfully");
        } else if (response.status === 500) {
          alert("Something went wrong. Please filled mobile and email unique");
        }
      } else {
        alert("Password not match");
        return;
      }
      setLogin(true);
      setData("");
    } catch (err) {
      console.log("Register fail", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      {login ? (
        <Login />
      ) : (
        <>
          <Title>Register</Title>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              name="name"
              type="text"
              fullWidth
              onChange={handleChange}
              variant="standard"
            />

            <Container>
              <TextField
                required
                margin="dense"
                id="email"
                label="Email"
                name="email"
                type="email"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                id="number"
                label="Phone Number"
                name="number"
                type="number"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />

              <TextField
                required
                margin="dense"
                id="password"
                label="Password"
                name="password"
                type="password"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                id="Cpassword"
                label="Confirm Password"
                name="Cpassword"
                type="password"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Container>

            <FormControl sx={{ marginTop: 2, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Experience</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="experience"
                value={data.experience}
                onChange={handleChange}
                input={<OutlinedInput label="Experience" />}
              >
                <MenuItem value="Fresher">Fresher</MenuItem>
                <MenuItem value="Experienced">Experienced</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ marginTop: 2, width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">Skill</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                name="skills"
                multiple
                value={personSkill}
                onChange={handleChange}
                MenuProps={MenuProps}
                input={<OutlinedInput label="Name" />}
              >
                {skills.map((skill) => (
                  <MenuItem
                    key={skill}
                    value={skill}
                    style={getStyles(skill, personSkill, theme)}
                  >
                    {skill}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              required
              margin="dense"
              id="about"
              label="About"
              name="about"
              rows={3}
              multiline
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </DialogContent>
          <RegisterButton
            disabled={loading ? true : false}
            onClick={handleRegister}
            variant="contained"
            color="primary"
          >
            {loading ? "...Loading" : "Register"}
          </RegisterButton>
        </>
      )}
      <Text onClick={() => setLogin(!login)}>
        {login ? "I have not account" : "I have already account"}
      </Text>
    </Dialog>
  );
};

export default Register;
