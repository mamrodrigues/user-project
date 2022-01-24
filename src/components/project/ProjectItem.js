import { IconButton, ListItem, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import classes from "./ProjectItem.module.css";
import { useDispatch } from "react-redux";
import { editProject } from "../../actions/projectAction";

const ProjectItem = ({ project, onEdit }) => {
  const dispatch = useDispatch();

  const onEditItem = () => {
    onEdit(project);

    dispatch(editProject(project));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onEditItem}>
          <EditIcon />
        </IconButton>
      }
    >
      <div className={classes.item}>
        <Typography variant="h5">{project.name}</Typography>
        <Typography variant="subtitle1">{project.description}</Typography>
      </div>
    </ListItem>
  );
};

export default ProjectItem;
