import { useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "../../actions/userAction";
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

import classes from "./UserForm.module.css";

const UserForm = ({ user, onClose }) => {
  let name = "";
  let email = "";

  if (user) {
    name = user.name;
    email = user.email;
  }

  const [enteredName, setEnteredName] = useState(name);
  const [enteredEmail, setEnteredEmail] = useState(email);

  const dispatch = useDispatch();

  const onSubmitUserFormHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      email: enteredEmail,
    };
    dispatch(addUser(userData));

    setEnteredEmail("");
    setEnteredName("");

    onClose();
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  return (
    <FormControl className={classes.form}>
      <form onSubmit={onSubmitUserFormHandler}>
        
        <Typography variant="h5">Create User</Typography>

        <FormGroup className={classes.formline}>
          <TextField
            required
            variant="standard"
            label="Name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </FormGroup>
        <FormGroup className={classes.formline}>
          <TextField
            variant="standard"
            required
            type="email"
            label="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </FormGroup>
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

export default UserForm;
