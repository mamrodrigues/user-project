import { Grid, Button, Container } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelEdit } from "../../actions/projectAction";
import ProjectForm from "../project/ProjectForm";
import UserForm from "../user/UserForm";

const FormContainer = ({ onFormChange }) => {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [isEditingProject, setIsEditingProject] = useState(false);

  const dispatch = useDispatch();

  const isEditingProjectItem = useSelector(
    (state) => state.projectState.isEditing
  );

  
  const editingProject = useSelector((state) => state.projectState.project);

  const startEditingUserHandler = () => {
    setIsEditingUser(true);
    onFormChange(true);
  };

  const onCloseUserHandler = () => {
    setIsEditingUser(false);
    onFormChange(false);
  };

  const startEditingProjectHandler = () => {
    setIsEditingProject(true);
    onFormChange(true);
  };

  const onCloseProjectHandler = () => {
    setIsEditingProject(false);
    onFormChange(false);

    dispatch(cancelEdit());
  };

  return (
    <Container>
      <Grid>
        {!isEditingUser && !isEditingProject && !isEditingProjectItem && (
          <Grid
            container
            justifyContent="center"
            spacing={6}
            alignItems="center"
            direction="row"
            padding={3}
          >
            <Grid item>
              <Button variant="outlined" onClick={startEditingUserHandler}>
                New User
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={startEditingProjectHandler}>
                New Project
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Grid>{isEditingUser && <UserForm onClose={onCloseUserHandler} />}</Grid>
      <Grid>
        {(isEditingProject || isEditingProjectItem) && (
          <ProjectForm
            onClose={onCloseProjectHandler}
            project={editingProject}
          />
        )}
      </Grid>
    </Container>
  );
};

export default FormContainer;
