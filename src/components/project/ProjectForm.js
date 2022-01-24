import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { addProject, updateProject } from "../../actions/projectAction";

import classes from "../user/UserForm.module.css";

const ProjectForm = ({ project, onClose }) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userState);

  let name = "";
  let description = "";
  let user = "";

  if (project) {
    name = project.name;
    description = project.description;
    user = project.user;
  }

  const [enteredName, setEnteredName] = useState(name);
  const [enteredDesc, setEnteredDesc] = useState(description);
  const [enteredUser, setEnteredUser] = useState(user);

  const onSubmitProjectFormHandler = (event) => {
    event.preventDefault();

    if (project && project.id) {
      project.name = enteredName;
      project.description = enteredDesc;
      project.owner = enteredUser;

      updateProject(project);
    } else {
      const p = {
        name: enteredName,
        description: enteredDesc,
        owner: enteredUser,
      };

      dispatch(addProject(p));
    }
    setEnteredName("");
    setEnteredDesc("");
    setEnteredUser("");

    onClose();
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };
  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  return (
    <FormControl className={classes.form}>
      <form onSubmit={onSubmitProjectFormHandler}>
        <Typography variant="h5">Create Project</Typography>

        <FormGroup className={classes.formline}>
          <TextField
            variant="standard"
            label="Name"
            required
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </FormGroup>

        <FormGroup className={classes.formline}>
          <TextField
            variant="standard"
            label="Description"
            required
            type="text"
            value={enteredDesc}
            onChange={descChangeHandler}
          />
        </FormGroup>

        <FormControl className={classes.formline}>
          <InputLabel id="owner-label">Owner</InputLabel>
          <Select labelId="owner-label" label="Owner">
            {users.map((user) => (
              <MenuItem value={10}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormGroup className={classes.buttons}>
          <div>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Register</Button>
          </div>
        </FormGroup>
      </form>
    </FormControl>
  );
};

export default ProjectForm;
