import { List, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";

const ProjectsList = ({ projects, onEditProject }) => {
  if (!projects || projects.length === 0) {
    return (
      <div style={{ marginLeft: "1em", marginTop: "1em" }}>
        <Typography variant="subtitle">No projects founded</Typography>
      </div>
    );
  }

  const onEditProjectHandler = (project) => {
    onEditProject(project);
  };

  return (
    <List>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          onEdit={onEditProjectHandler}
        />
      ))}
    </List>
  );
};

export default ProjectsList;
